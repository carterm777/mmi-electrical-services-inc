import { MapPin, Phone } from 'lucide-react'
import { business, coverage } from '../data/site.js'
import { Reveal, Stagger } from '../lib/motion.jsx'
import Img from './Img.jsx'
import './ServiceAreas.css'

/*
 * Service Area / Coverage
 * Layout ......... Service Area List or Coverage Zone Grid
 * Visual style ... Industrial Grid Coverage Map — hand-built, no embed and no
 *                  drawn geography. The coverage is expressed as a ruled
 *                  index of real cells, which is honest about what it knows
 *                  (the names) and makes no claim about where things sit.
 *                  Opens with Image as Section Divider carrying the page from
 *                  the light Services band into this dark one.
 * Animation ...... Coverage Zone Highlight on Hover, staggered cell entrance
 *                  in two groups (neighbourhoods, then towns)
 */

export default function ServiceAreas() {
  return (
    <section className="sa" id="coverage" aria-labelledby="coverage-title">
      <div className="sa__divider">
        <Img
          className="sa__dividerImg"
          name={coverage.image.name}
          alt={coverage.image.alt}
          width={1600}
          height={900}
          sizes="100vw"
        />
        <span className="sa__dividerScrim" aria-hidden="true" />
      </div>

      <div className="band band--dark sa__band">
        <span className="rulefield" aria-hidden="true" />
        <div className="shell sa__inner">
          <div className="sa__copy">
            <Stagger className="sa__stack" step={110}>
              <Reveal className="shead__rule sa__rule" variant="fade" duration={700}>
                <span className="shead__idx">{coverage.index}</span>
                <span className="shead__eyebrow">{coverage.eyebrow}</span>
              </Reveal>
              <Reveal as="h2" className="sa__title" id="coverage-title" variant="rise-sm">
                {coverage.title}
              </Reveal>
              <Reveal as="p" className="sa__intro" variant="rise-sm">
                {coverage.intro}
              </Reveal>
              <Reveal className="sa__base" variant="rise-sm">
                <MapPin size={15} strokeWidth={1.8} aria-hidden="true" />
                <span>{business.addressLine}</span>
              </Reveal>
              <Reveal variant="rise-sm">
                <a className="btn sa__cta" href={business.phoneHref}>
                  <Phone className="btn__icon" size={16} strokeWidth={2.2} aria-hidden="true" />
                  <span>Call {business.phonePretty}</span>
                </a>
              </Reveal>
            </Stagger>
          </div>

          <div className="sa__zones">
            <div className="sa__group">
              <h3 className="sa__groupTitle">{coverage.neighbourhoodsLabel}</h3>
              <Stagger className="sa__cells" step={34} as="ul">
                {coverage.neighbourhoods.map((place) => (
                  <Reveal as="li" className="sa__cell" key={place} variant="scale" duration={420}>
                    {place}
                  </Reveal>
                ))}
              </Stagger>
            </div>

            <div className="sa__group">
              <h3 className="sa__groupTitle">{coverage.townsLabel}</h3>
              <Stagger className="sa__cells sa__cells--wide" step={34} as="ul" base={140}>
                {coverage.towns.map((place) => (
                  <Reveal as="li" className="sa__cell" key={place} variant="scale" duration={420}>
                    {place}
                  </Reveal>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
