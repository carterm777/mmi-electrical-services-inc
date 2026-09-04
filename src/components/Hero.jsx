import { useEffect, useState } from 'react'
import { ArrowDownRight, Phone } from 'lucide-react'
import { business, hero } from '../data/site.js'
import { Reveal, WordReveal } from '../lib/motion.jsx'
import { Icon } from './icons.jsx'
import Img from './Img.jsx'
import PhotoDiagnosis from './PhotoDiagnosis.jsx'
import './Hero.css'

/*
 * Hero
 * Layout ......... Hero with Embedded Quote/Booking Form
 * Visual style ... Raw Industrial Grid Overlay
 *                  + Layered Depth Composition (photo ground -> ink scrim ->
 *                    column rules -> solid terminal panel)
 * Animation ...... Staggered Load-In, Weighted Word Reveal (H1, once per
 *                  page), Depth Settle on the panel, CTA Micro-Interaction
 *
 * Mandatory: eyebrow rule and the terminal panel share the same top edge, and
 * everything down to the widget clears the fold at 390x844 and 1440x900.
 */

export default function Hero() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className="hero band--dark" id="top" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <Img
          className="hero__photo"
          name={hero.image.name}
          alt=""
          width={1600}
          height={900}
          sizes="100vw"
          priority
        />
        <span className="hero__scrim" />
        <span className="hero__rules" />
      </div>

      <div className="shell shell--wide hero__inner">
        <div className="hero__copy">
          <Reveal className="hero__eyebrow" variant="fade" delay={40} duration={640}>
            <span className="hero__eyebrowText">{hero.eyebrow}</span>
          </Reveal>

          <h1 className="hero__title" id="hero-title">
            <WordReveal text={hero.headline} trigger={ready} delay={130} step={64} />
          </h1>

          <Reveal className="hero__sub" variant="rise-sm" delay={440} duration={660}>
            {hero.subheadline}
          </Reveal>

          <ul className="hero__badges">
            {hero.badges.map((badge, i) => (
              <Reveal
                as="li"
                key={badge.label}
                className="hero__badge"
                variant="rise-sm"
                delay={540 + i * 62}
                duration={560}
              >
                <Icon
                  name={badge.icon}
                  className="hero__badgeIcon"
                  size={17}
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span className="hero__badgeLabel">{badge.label}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal className="hero__ctas" variant="rise-sm" delay={780} duration={600}>
            <a className="btn hero__cta" href={business.phoneHref}>
              <Phone className="btn__icon" size={16} strokeWidth={2.2} aria-hidden="true" />
              <span>Call {business.phonePretty}</span>
            </a>
            <a className="btn btn--ghost-invert hero__cta" href="#services">
              <span>See Services</span>
              <ArrowDownRight className="btn__icon" size={16} strokeWidth={2.2} aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="hero__panel">
          <Reveal variant="settle" delay={200} duration={800}>
            <PhotoDiagnosis />
          </Reveal>
          <Reveal className="hero__reassure" variant="fade" delay={700} duration={640}>
            Photos go straight to the shop, not a call centre. No account, no obligation — we call
            you back with a real number.
          </Reveal>
        </div>
      </div>

      {/* Part of the hero's load-in, not a scroll reveal: it sits right on the
          fold line, so the project's "fire late enough to be seen" rootMargin
          would hold it invisible until the visitor scrolled past it. */}
      <Reveal
        className="hero__rail"
        variant="fade"
        delay={840}
        duration={680}
        threshold={0}
        rootMargin="0px"
      >
        <div className="shell shell--wide hero__railInner">
          <span className="hero__railLabel">Serving</span>
          <ul className="hero__railList">
            {[
              'St. Albert',
              'Edmonton',
              'Sherwood Park',
              'Fort Saskatchewan',
              'Morinville',
              'Spruce Grove',
            ].map((place) => (
              <li className="hero__railItem" key={place}>
                {place}
              </li>
            ))}
          </ul>
          <span className="hero__railTail">Master electrician overseen · WCB covered</span>
        </div>
      </Reveal>
    </section>
  )
}
