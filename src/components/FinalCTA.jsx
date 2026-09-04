import { MessageSquare, Phone } from 'lucide-react'
import { business, finalCta } from '../data/site.js'
import { Reveal, Stagger } from '../lib/motion.jsx'
import './FinalCTA.css'

/*
 * Final CTA
 * Layout ......... Urgent or Emergency CTA Banner
 * Visual style ... Bold Color-Blocked Banner — the page's one full copper
 *                  block, deepened to --accent-block so ivory type on it
 *                  clears AA (4.9:1) rather than sitting at 3.9:1.
 * Animation ...... Grouped entrance (rule -> headline -> supporting line ->
 *                  actions), then Bordered Frame Draw on the emergency panel
 *                  as the closing beat, and a small magnetic lift on the
 *                  buttons via the shared .btn hover.
 */

export default function FinalCTA() {
  return (
    <section className="band band--accent cta" id="contact" aria-labelledby="cta-title">
      <span className="rulefield" aria-hidden="true" />
      <div className="shell cta__inner">
        <Stagger className="cta__stack" step={120}>
          <Reveal className="shead__rule cta__rule" variant="fade" duration={700}>
            <span className="shead__idx">{finalCta.index}</span>
            <span className="shead__eyebrow">{finalCta.eyebrow}</span>
          </Reveal>

          <Reveal as="h2" className="cta__title" id="cta-title" variant="rise-sm">
            {finalCta.headline}
          </Reveal>

          <Reveal as="p" className="cta__body" variant="rise-sm">
            {finalCta.supporting}
          </Reveal>

          <Reveal className="cta__actions" variant="rise-sm">
            <a className="btn btn--ink cta__btn" href={business.phoneHref}>
              <Phone className="btn__icon" size={16} strokeWidth={2.2} aria-hidden="true" />
              <span>{finalCta.callLabel}</span>
            </a>
            <a className="btn cta__btn cta__btnText" href={business.smsHref}>
              <MessageSquare className="btn__icon" size={16} strokeWidth={2.2} aria-hidden="true" />
              <span>{finalCta.textLabel}</span>
            </a>
          </Reveal>
        </Stagger>

        <div className="cta__side">
          <Reveal className="cta__frameTop" variant="frame-x" duration={480} delay={420} />
          <Reveal className="cta__panel" variant="rise-sm" delay={520}>
            <p className="cta__figure">24/7</p>
            <p className="cta__figureLabel">Emergency line, day or night</p>
            <p className="cta__figureNote">
              Dead panel, sparking outlet, no power at all — call and we will walk you through what
              to do until someone arrives.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
