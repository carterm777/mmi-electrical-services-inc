import { whyUs } from '../data/site.js'
import { Reveal, Stagger } from '../lib/motion.jsx'
import { Icon } from './icons.jsx'
import Img from './Img.jsx'
import './WhyUs.css'

/*
 * Why Us
 * Layout ......... Icon + Blurb Grid, four reasons on one ruled row
 * Visual style ... Filled Icon Badges
 *                  + Overlapping/Bleeding Image (the header photo runs past
 *                    the right page edge so the section is not flat colour)
 * Animation ...... Sequential Reveal on Scroll (headline, then one group per
 *                  reason: badge + heading + body move together)
 */

export default function WhyUs() {
  return (
    <section className="band band--light wu" id="why" aria-labelledby="why-title">
      <span className="rulefield" aria-hidden="true" />
      <div className="shell wu__shell">
        <div className="wu__head">
          <Stagger className="wu__headCopy" step={110}>
            <Reveal className="shead__rule" variant="fade" duration={700}>
              <span className="shead__idx">{whyUs.index}</span>
              <span className="shead__eyebrow">{whyUs.eyebrow}</span>
            </Reveal>
            <Reveal as="h2" className="wu__title" id="why-title" variant="rise-sm">
              {whyUs.title}
            </Reveal>
            <Reveal as="p" className="wu__lead" variant="rise-sm">
              {whyUs.lead}
            </Reveal>
          </Stagger>

          <Reveal className="wu__figure" variant="settle" duration={860}>
            <Img
              className="wu__img"
              name={whyUs.image.name}
              alt={whyUs.image.alt}
              width={1600}
              height={1200}
              sizes="(max-width: 999px) 100vw, 52vw"
            />
            <span className="wu__figCap">Load check before a service upgrade</span>
          </Reveal>
        </div>

        <Stagger className="wu__row" step={120} as="ul">
          {whyUs.items.map((item) => (
            <Reveal as="li" className="wu__item" key={item.title} variant="rise">
              <span className="wu__badge">
                <Icon name={item.icon} size={20} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <h3 className="wu__itemTitle">{item.title}</h3>
              <p className="wu__itemBody">{item.body}</p>
            </Reveal>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
