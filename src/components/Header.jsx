import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronDown, Mail, MapPin, Phone } from 'lucide-react'
import { business, nav } from '../data/site.js'
import { useScrolled } from '../lib/motion.jsx'
import Mark from './Mark.jsx'
import './Header.css'

/*
 * Navigation
 * Layout ......... Mega Menu Dropdown Nav
 * Visual style ... Glass Frosted Nav Bar
 * Animation ...... Nav Background Fade-In on Scroll + Underline Grow on Hover
 *                  + Mega Menu Column Stagger Reveal
 *
 * No hamburger anywhere. On mobile the bar is wordmark + click-to-call, with
 * a scrollable index strip beneath it that retracts once the visitor starts
 * scrolling, leaving click-to-call as the only nav affordance.
 */

function MegaMenu({ item, openKey, setOpenKey }) {
  const open = openKey === item.label
  const wrapRef = useRef(null)
  const panelId = `menu-${item.label.replace(/\s+/g, '-').toLowerCase()}`

  const close = useCallback(() => {
    setOpenKey((k) => (k === item.label ? null : k))
  }, [item.label, setOpenKey])

  const onKeyDown = (e) => {
    if (e.key === 'Escape' && open) {
      e.stopPropagation()
      close()
      wrapRef.current?.querySelector('.hdr__navBtn')?.focus()
    }
  }

  const onBlur = (e) => {
    if (!wrapRef.current?.contains(e.relatedTarget)) close()
  }

  const columns = item.label === 'Services' ? 3 : 2
  const per = Math.ceil(item.items.length / columns)
  const groups = Array.from({ length: columns }, (_, i) => item.items.slice(i * per, i * per + per))

  return (
    <li
      className="hdr__navItem"
      ref={wrapRef}
      onMouseEnter={() => setOpenKey(item.label)}
      onMouseLeave={close}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    >
      <button
        type="button"
        className="hdr__navBtn"
        aria-expanded={open}
        aria-controls={panelId}
        aria-haspopup="true"
        onFocus={() => setOpenKey(item.label)}
        onClick={() => setOpenKey(open ? null : item.label)}
      >
        <span className="hdr__navLabel">{item.label}</span>
        <ChevronDown className="hdr__chev" size={13} strokeWidth={2} aria-hidden="true" />
      </button>

      <div className="hdr__mega" id={panelId} hidden={!open}>
        <div className="hdr__megaInner">
          <p className="hdr__megaKicker mono">{item.label}</p>
          <div className="hdr__megaCols" style={{ '--cols': columns }}>
            {groups.map((group, gi) => (
              <ul className="hdr__megaCol" key={gi} style={{ '--gi': gi }}>
                {group.map((label) => (
                  <li key={label}>
                    <a className="hdr__megaLink" href={item.href} onClick={close}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <a className="hdr__megaAll" href={item.href} onClick={close}>
            <span className="sweep">Go to {item.label === 'Services' ? 'Core Services' : 'Coverage'}</span>
          </a>
        </div>
      </div>
    </li>
  )
}

export default function Header() {
  const scrolled = useScrolled(24)
  const retracted = useScrolled(72)
  const [openKey, setOpenKey] = useState(null)

  useEffect(() => {
    if (!openKey) return
    const onDocDown = (e) => {
      if (!e.target.closest?.('.hdr__navItem')) setOpenKey(null)
    }
    document.addEventListener('pointerdown', onDocDown)
    return () => document.removeEventListener('pointerdown', onDocDown)
  }, [openKey])

  return (
    <header className={`hdr${scrolled ? ' is-scrolled' : ''}${retracted ? ' is-retracted' : ''}`}>
      <div className="hdr__sub">
        <div className="shell shell--wide hdr__subInner">
          <a className="hdr__subLink" href={business.phoneHref}>
            <Phone size={12} strokeWidth={2} aria-hidden="true" />
            <span className="sweep">{business.phoneDisplay}</span>
          </a>
          <span className="hdr__subDot" aria-hidden="true">
            ·
          </span>
          <a className="hdr__subLink" href={business.emailHref}>
            <Mail size={12} strokeWidth={2} aria-hidden="true" />
            <span className="sweep">{business.email}</span>
          </a>
          <span className="hdr__subDot" aria-hidden="true">
            ·
          </span>
          <span className="hdr__subLink">
            <MapPin size={12} strokeWidth={2} aria-hidden="true" />
            {business.addressLine}
          </span>
          <span className="hdr__subTail">24/7 Emergency Response</span>
        </div>
      </div>

      <div className="hdr__bar">
        <div className="shell shell--wide hdr__barInner">
          <a className="hdr__brand" href="#top" aria-label={`${business.name} — back to top`}>
            <Mark className="hdr__mark" size={28} />
            <span className="hdr__word">
              <span className="hdr__wordMain">{business.mark}</span>
              <span className="hdr__wordSub">Electrical Services</span>
            </span>
          </a>

          <nav className="hdr__nav" aria-label="Primary">
            <ul className="hdr__navList">
              {nav.map((item) =>
                item.items ? (
                  <MegaMenu key={item.label} item={item} openKey={openKey} setOpenKey={setOpenKey} />
                ) : (
                  <li className="hdr__navItem" key={item.label}>
                    <a className="hdr__navLink" href={item.href}>
                      <span className="hdr__navLabel sweep">{item.label}</span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="hdr__actions">
            <a className="hdr__call" href={business.phoneHref}>
              <span className="hdr__callIcon" aria-hidden="true">
                <Phone size={15} strokeWidth={2.1} />
              </span>
              <span className="hdr__callText">
                <span className="hdr__callKicker">Call now</span>
                <span className="hdr__callNum">{business.phonePretty}</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="hdr__strip">
        <nav className="hdr__stripScroll" aria-label="Section index">
          <ul className="hdr__stripList">
            {nav.map((item) => (
              <li key={item.label}>
                <a className="hdr__stripLink" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
