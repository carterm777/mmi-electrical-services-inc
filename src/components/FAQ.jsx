import { useState } from 'react'
import { Plus } from 'lucide-react'
import { faq } from '../data/site.js'
import { Reveal, Stagger } from '../lib/motion.jsx'
import SectionHead from './SectionHead.jsx'
import './FAQ.css'

/*
 * FAQ
 * Layout ......... Classic Accordion List
 * Visual style ... Numbered Question Treatment — the numerals are set in the
 *                  mono utility face at a distinctly different scale and
 *                  weight from the question text. Numbering is earned here:
 *                  an FAQ is a genuine reference index, unlike the why-us
 *                  reasons or the service list, which carry no numbers.
 * Animation ...... Accordion Expand and Collapse with Height Transition
 *                  (grid-template-rows 0fr -> 1fr), Icon Rotate on Expand,
 *                  Staggered Fade-In on Scroll for the row entrance
 */

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="band band--light fq" id="faq" aria-labelledby="faq-title">
      <span className="rulefield" aria-hidden="true" />
      <div className="shell">
        <SectionHead
          index={faq.index}
          eyebrow={faq.eyebrow}
          title={faq.title}
          titleId="faq-title"
        />

        <Stagger className="fq__list" step={90}>
          {faq.items.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal className={`fq__row${isOpen ? ' is-open' : ''}`} key={item.q} variant="rise-sm">
                <h3 className="fq__head">
                  <button
                    type="button"
                    className="fq__trigger"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span className="fq__num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="fq__q">{item.q}</span>
                    <span className="fq__icon" aria-hidden="true">
                      <Plus size={17} strokeWidth={2} />
                    </span>
                  </button>
                </h3>
                <div
                  className="fq__panel"
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                >
                  <div className="fq__panelInner">
                    <p className="fq__a">{item.a}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
