import { trust } from '../data/site.js'
import { Reveal, Stagger } from '../lib/motion.jsx'
import { Icon } from './icons.jsx'
import './TrustBadges.css'

/*
 * Trust Badges Banner — fixed position, directly below the reviews section.
 * Layout ......... Insurance, Bonding, and Licensing Detail Block
 * Visual style ... Badge or Seal Bold Treatment, on the page's slate band
 * Animation ...... Badge Fade and Scale-In on Scroll (4 badges, 110ms apart)
 *
 * All four marks come from the business's own stated facts. Each carries one
 * distinct, meaning-matched Lucide icon at identical size and stroke weight.
 */

export default function TrustBadges() {
  return (
    <section className="band band--slate band--tight tb" aria-labelledby="trust-title">
      <span className="rulefield" aria-hidden="true" />
      <img className="tb__tex" src="/images/tex-steel-800.webp" alt="" aria-hidden="true" />
      <div className="shell">
        <div className="tb__head">
          <span className="shead__idx">{trust.index}</span>
          <h2 className="tb__title" id="trust-title">
            {trust.title}
          </h2>
          <span className="tb__rule" aria-hidden="true" />
        </div>

        <Stagger className="tb__row" step={110} as="ul">
          {trust.items.map((item) => (
            <Reveal as="li" className="tb__item" key={item.label} variant="scale" duration={560}>
              <span className="tb__seal">
                <Icon name={item.icon} size={22} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <span className="tb__text">
                <h3 className="tb__label">{item.label}</h3>
                <span className="tb__note">{item.note}</span>
              </span>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
