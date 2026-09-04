import { Fragment, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ChevronRight, Phone } from 'lucide-react'
import { business, services } from '../data/site.js'
import { Reveal, Stagger } from '../lib/motion.jsx'
import { Icon } from './icons.jsx'
import Img from './Img.jsx'
import SectionHead from './SectionHead.jsx'
import './Services.css'

/*
 * Services
 * Layout ......... Tabbed or Accordion Service Panel — a technical contents
 *                  index on the left with one open panel to its right on
 *                  desktop; the same DOM reflows to a single-open accordion
 *                  under 1000px. Disclosure semantics (button +
 *                  aria-expanded + aria-controls + region) are used rather
 *                  than ARIA tabs, because one markup tree has to be correct
 *                  in both presentations.
 * Visual style ... Bordered Card with Icon Header
 * Animation ...... Active Tab Underline Slide (a measured copper marker that
 *                  travels the index rail), Accordion Smooth Expand and
 *                  Collapse, Staggered Grid Fade-In on the index rows
 */

export default function Services() {
  const [active, setActive] = useState(0)
  const [marker, setMarker] = useState({ top: 0, height: 0 })
  const btnRefs = useRef([])

  /* The marker's travel is measured, not assumed from a fixed row height —
     index labels wrap at narrow desktop widths and a hard-coded step would
     drift. Measured off bounding rects rather than offsetTop: the rows sit
     inside <Reveal> wrappers that carry will-change/transform, which makes
     offsetParent unreliable. */
  const measure = useCallback(() => {
    const node = btnRefs.current[active]
    const host = node?.closest('.sv__panel')
    if (!node || !host) return
    const hostTop = host.getBoundingClientRect().top
    const rect = node.getBoundingClientRect()
    setMarker({ top: Math.round(rect.top - hostTop), height: Math.round(rect.height) })
  }, [active])

  useLayoutEffect(measure, [measure])

  useEffect(() => {
    window.addEventListener('resize', measure)
    /* Re-measure once the index rows have finished their staggered entrance,
       otherwise the first reading includes the reveal's 14px offset. */
    const id = window.setTimeout(measure, 1300)
    if (document.fonts?.ready) document.fonts.ready.then(measure).catch(() => {})
    return () => {
      window.removeEventListener('resize', measure)
      window.clearTimeout(id)
    }
  }, [measure])

  return (
    <section className="band band--sunk sv" id="services" aria-labelledby="services-title">
      <span className="rulefield" aria-hidden="true" />
      <div className="shell">
        <SectionHead
          index={services.index}
          eyebrow={services.eyebrow}
          title={services.title}
          titleId="services-title"
          lead={services.lead}
          split
        />

        <Stagger className="sv__panel" step={80}>
          <span
            className="sv__marker"
            aria-hidden="true"
            style={{ '--mt': `${marker.top}px`, '--mh': `${marker.height}px` }}
          />

          {services.items.map((item, i) => (
            <Fragment key={item.title}>
              <Reveal as="h3" className="sv__rowHead" variant="rise-sm">
                <button
                  type="button"
                  ref={(el) => {
                    btnRefs.current[i] = el
                  }}
                  className={`sv__tab${i === active ? ' is-active' : ''}`}
                  aria-expanded={i === active}
                  aria-controls={`service-panel-${i}`}
                  id={`service-tab-${i}`}
                  onClick={() => setActive(i)}
                >
                  <Icon
                    name={item.icon}
                    className="sv__tabIcon"
                    size={17}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                  <span className="sv__tabLabel">{item.title}</span>
                  <ChevronRight
                    className="sv__tabChev"
                    size={15}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </button>
              </Reveal>

              <div
                className={`sv__view${i === active ? ' is-open' : ''}`}
                id={`service-panel-${i}`}
                role="region"
                aria-labelledby={`service-tab-${i}`}
              >
                <div className="sv__viewInner">
                  <div className="sv__viewBox">
                    <div className="sv__figure">
                      <Img
                        className="sv__img"
                        name={item.image.name}
                        alt={item.image.alt}
                        width={1600}
                        height={1200}
                        sizes="(max-width: 999px) 100vw, 44vw"
                      />
                      <span className="sv__meta">{item.meta}</span>
                    </div>
                    <div className="sv__copy">
                      <p className="sv__body">{item.body}</p>
                      <a className="sv__call" href={business.phoneHref}>
                        <Phone size={14} strokeWidth={2.1} aria-hidden="true" />
                        <span className="sweep">Call {business.phonePretty}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
