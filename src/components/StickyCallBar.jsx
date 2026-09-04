import { Phone } from 'lucide-react'
import { business } from '../data/site.js'
import { useScrolled } from '../lib/motion.jsx'
import './StickyCallBar.css'

/*
 * Sticky mobile call bar — call only, no hamburger, no second action.
 * Animation: Sticky Bar Slide-In on Scroll Threshold. It stays out of the way
 * until the visitor has scrolled past the hero, so it never eats into the
 * above-the-fold budget the hero has to satisfy at 390x844.
 */

export default function StickyCallBar() {
  const shown = useScrolled(520)

  return (
    <div className={`scb${shown ? ' is-shown' : ''}`} aria-hidden={!shown}>
      <a className="scb__link" href={business.phoneHref} tabIndex={shown ? 0 : -1}>
        <span className="scb__icon" aria-hidden="true">
          <Phone size={17} strokeWidth={2.2} />
        </span>
        <span className="scb__text">
          <span className="scb__kicker">Tap to call · 24/7</span>
          <span className="scb__num">{business.phonePretty}</span>
        </span>
      </a>
    </div>
  )
}
