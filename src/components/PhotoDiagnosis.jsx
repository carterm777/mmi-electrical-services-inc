import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ImagePlus,
  Phone,
  RotateCcw,
  Trash2,
} from 'lucide-react'
import { business } from '../data/site.js'
import './PhotoDiagnosis.css'

/*
 * THE SIGNATURE ELEMENT — photo-diagnosis intake, framed as a diagnostic
 * intake terminal (per this site's art-direction row): monospace field
 * labels, a visible step indicator, and a status line that reads like
 * instrumentation rather than a form message.
 *
 * Layout ......... Multi-Step Form (forms/layouts)
 * Visual style ... Industrial Technical Interface Styling (interactive)
 *                  + Boxed Input Fields on Card (forms)
 * Animation ...... Field Focus Highlight, Inline Validation Feedback,
 *                  Multi-Step Progress Transition, Success State Confirmation
 *
 * There is no backend. Nothing leaves the browser: the preview is a local
 * object URL, revoked on unmount and on replace.
 */

const MAX_BYTES = 8 * 1024 * 1024
const OK_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif']

function formatSize(bytes) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`
}

function makeReference() {
  const d = new Date()
  const stamp = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(
    d.getDate()
  ).padStart(2, '0')}`
  const seq = String(Math.floor(Math.random() * 9000) + 1000)
  return `MMI-${stamp}-${seq}`
}

const STEPS = ['Photo', 'Details', 'Sent']

export default function PhotoDiagnosis() {
  const [step, setStep] = useState(0)
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [error, setError] = useState('')
  const [scanning, setScanning] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [focusDrop, setFocusDrop] = useState(false)
  const [sending, setSending] = useState(false)
  const [progress, setProgress] = useState(0)
  const [reference, setReference] = useState('')
  const [fields, setFields] = useState({ desc: '', name: '', phone: '' })
  const [fieldErrors, setFieldErrors] = useState({})
  const [status, setStatus] = useState('Standing by. Attach a photo to begin.')

  const inputRef = useRef(null)
  const previewRef = useRef(null)
  const timers = useRef([])

  const track = (id) => {
    timers.current.push(id)
    return id
  }

  useEffect(() => {
    const list = timers.current
    return () => {
      list.forEach(clearTimeout)
      if (previewRef.current) URL.revokeObjectURL(previewRef.current)
    }
  }, [])

  const clearPreview = useCallback(() => {
    if (previewRef.current) {
      URL.revokeObjectURL(previewRef.current)
      previewRef.current = null
    }
  }, [])

  const acceptFile = useCallback(
    (next) => {
      if (!next) return
      if (!next.type.startsWith('image/') || (next.type && !OK_TYPES.includes(next.type))) {
        setError('That file is not a photo we can read. Attach a JPG, PNG or WEBP.')
        setStatus('Rejected: unsupported file type.')
        return
      }
      if (next.size > MAX_BYTES) {
        setError(
          `That image is ${formatSize(next.size)}. Attach one under 8 MB, or take a new photo at a smaller size.`
        )
        setStatus('Rejected: file over the 8 MB limit.')
        return
      }
      clearPreview()
      const url = URL.createObjectURL(next)
      previewRef.current = url
      setPreview(url)
      setFile(next)
      setError('')
      setScanning(true)
      setStatus('Reading file…')
      track(
        setTimeout(() => {
          setScanning(false)
          setStatus(`Photo attached · ${formatSize(next.size)} · ready to send.`)
        }, 900)
      )
    },
    [clearPreview]
  )

  const onDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    acceptFile(e.dataTransfer?.files?.[0])
  }

  const removeFile = () => {
    clearPreview()
    setPreview(null)
    setFile(null)
    setError('')
    setStatus('Photo removed. Attach another, or describe it instead.')
    if (inputRef.current) inputRef.current.value = ''
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const next = {}
    if (!fields.name.trim()) next.name = 'We need a name to put on the callback.'
    if (fields.phone.replace(/\D/g, '').length < 10) next.phone = 'Enter a 10-digit phone number.'
    setFieldErrors(next)
    if (Object.keys(next).length) {
      setStatus('Check the highlighted fields before sending.')
      return
    }
    setSending(true)
    setProgress(0)
    setStatus('Packaging request…')
    const start = performance.now()
    const tick = () => {
      const p = Math.min((performance.now() - start) / 1400, 1)
      setProgress(Math.round(p * 100))
      if (p < 1) {
        requestAnimationFrame(tick)
      } else {
        setReference(makeReference())
        setSending(false)
        setStep(2)
        setStatus('Request logged. An electrician has it.')
      }
    }
    requestAnimationFrame(tick)
  }

  const reset = () => {
    removeFile()
    setFields({ desc: '', name: '', phone: '' })
    setFieldErrors({})
    setReference('')
    setProgress(0)
    setStep(0)
    setStatus('Standing by. Attach a photo to begin.')
  }

  const ledState = error ? 'error' : step === 2 ? 'done' : scanning || sending ? 'busy' : 'idle'

  return (
    <div className="pd">
      <div className="pd__bar">
        <span className="pd__barMark" aria-hidden="true">
          MMi
        </span>
        <h2 className="pd__title" id="photo-diagnosis-title">
          Photo Diagnosis
        </h2>
        <span className={`pd__led pd__led--${ledState}`} aria-hidden="true" />
      </div>

      <ol className="pd__steps">
        {STEPS.map((label, i) => (
          <li
            key={label}
            className={`pd__step${i === step ? ' is-active' : ''}${i < step ? ' is-done' : ''}`}
          >
            <span className="pd__stepNum">{String(i + 1).padStart(2, '0')}</span>
            <span className="pd__stepLabel">{label}</span>
          </li>
        ))}
      </ol>

      <div className="pd__body">
        {step === 0 && (
          <div className="pd__stage">
            <input
              ref={inputRef}
              id="pd-file"
              className="sr-only"
              type="file"
              accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
              onChange={(e) => acceptFile(e.target.files?.[0])}
              onFocus={() => setFocusDrop(true)}
              onBlur={() => setFocusDrop(false)}
            />

            {!preview && (
              <label
                htmlFor="pd-file"
                className={`pd__drop${dragging ? ' is-dragging' : ''}${
                  focusDrop ? ' is-focus' : ''
                }${error ? ' is-error' : ''}`}
                onDragOver={(e) => {
                  e.preventDefault()
                  setDragging(true)
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={onDrop}
              >
                <ImagePlus className="pd__dropIcon" size={22} strokeWidth={1.5} aria-hidden="true" />
                <span className="pd__dropMain">Drop a photo, or browse</span>
                <span className="pd__dropMeta">JPG · PNG · WEBP · up to 8 MB</span>
              </label>
            )}

            {preview && (
              <div className={`pd__preview${scanning ? ' is-scanning' : ''}`}>
                <img className="pd__previewImg" src={preview} alt="The photo you attached" />
                <div className="pd__previewMeta">
                  <span className="pd__previewName">{file?.name}</span>
                  <span className="pd__previewSize">{file ? formatSize(file.size) : ''}</span>
                </div>
                <button type="button" className="pd__previewDrop" onClick={removeFile}>
                  <Trash2 size={13} strokeWidth={2} aria-hidden="true" />
                  <span>Remove</span>
                </button>
              </div>
            )}

            {error && (
              <p className="pd__error">{error}</p>
            )}

            <div className="pd__actions">
              <button type="button" className="btn btn--wide" onClick={() => setStep(1)}>
                <span>Continue To Details</span>
                <ArrowRight className="btn__icon" size={15} strokeWidth={2.2} aria-hidden="true" />
              </button>
              {!preview && (
                <p className="pd__hint">No photo handy? Continue and describe it instead.</p>
              )}
            </div>
          </div>
        )}

        {step === 1 && (
          <form className="pd__stage" onSubmit={onSubmit} noValidate>
            {preview && (
              <div className="pd__thumbRow">
                <img className="pd__thumb" src={preview} alt="" />
                <span className="pd__thumbMeta">
                  {file?.name}
                  <br />
                  {file ? formatSize(file.size) : ''} attached
                </span>
              </div>
            )}

            <div className="pd__field">
              <label className="pd__label" htmlFor="pd-desc">
                What is going on?
              </label>
              <textarea
                id="pd-desc"
                className="pd__input pd__input--area"
                rows={3}
                placeholder="Breaker keeps tripping when the dryer runs…"
                value={fields.desc}
                onChange={(e) => setFields((f) => ({ ...f, desc: e.target.value }))}
              />
            </div>

            <div className="pd__row">
              <div className="pd__field">
                <label className="pd__label" htmlFor="pd-name">
                  Name
                </label>
                <input
                  id="pd-name"
                  className={`pd__input${fieldErrors.name ? ' is-invalid' : ''}`}
                  type="text"
                  autoComplete="name"
                  value={fields.name}
                  aria-invalid={Boolean(fieldErrors.name)}
                  onChange={(e) => setFields((f) => ({ ...f, name: e.target.value }))}
                />
                {fieldErrors.name && <span className="pd__fieldNote">{fieldErrors.name}</span>}
              </div>

              <div className="pd__field">
                <label className="pd__label" htmlFor="pd-phone">
                  Phone
                </label>
                <input
                  id="pd-phone"
                  className={`pd__input${fieldErrors.phone ? ' is-invalid' : ''}`}
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="780-000-0000"
                  value={fields.phone}
                  aria-invalid={Boolean(fieldErrors.phone)}
                  onChange={(e) => setFields((f) => ({ ...f, phone: e.target.value }))}
                />
                {fieldErrors.phone && <span className="pd__fieldNote">{fieldErrors.phone}</span>}
              </div>
            </div>

            {sending && (
              <div className="pd__progress">
                <div className="pd__progressBar" style={{ '--p': `${progress}%` }} />
                <span className="pd__progressText">Sending · {progress}%</span>
              </div>
            )}

            <div className="pd__actions pd__actions--split">
              <button
                type="button"
                className="btn btn--ghost-invert"
                onClick={() => setStep(0)}
                disabled={sending}
              >
                <ArrowLeft className="btn__icon" size={15} strokeWidth={2.2} aria-hidden="true" />
                <span>Back</span>
              </button>
              <button type="submit" className="btn" disabled={sending}>
                <span>{sending ? 'Sending…' : 'Send For A Quote'}</span>
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <div className="pd__stage pd__stage--done">
            <p className="pd__doneKicker">Request logged</p>
            <p className="pd__doneRef">{reference}</p>
            <p className="pd__doneBody">
              A licensed electrician reviews what you sent and calls you back with a real quote —
              usually the same day. Nothing is charged and nothing is booked until you say so.
            </p>
            <div className="pd__actions pd__actions--split">
              <a className="btn" href={business.phoneHref}>
                <Phone className="btn__icon" size={15} strokeWidth={2.2} aria-hidden="true" />
                <span>Call {business.phonePretty}</span>
              </a>
              <button type="button" className="btn btn--ghost-invert" onClick={reset}>
                <RotateCcw className="btn__icon" size={15} strokeWidth={2.2} aria-hidden="true" />
                <span>Send Another</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="pd__status" role="status" aria-live="polite">
        <span className="pd__statusDot" aria-hidden="true" />
        {status}
      </p>
    </div>
  )
}
