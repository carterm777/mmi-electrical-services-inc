import { Star } from 'lucide-react'
import { reviews } from '../data/site.js'
import { CountUp, Reveal, Stagger } from '../lib/motion.jsx'
import SectionHead from './SectionHead.jsx'
import './GoogleReviews.css'

/*
 * Google Reviews — fixed position, directly below the hero.
 * Layout ......... Testimonial Card Grid
 * Visual style ... Star Rating Bold Color Accent
 *                  + Large Numeral Statistic Display on the aggregate panel
 * Animation ...... Star Rating Fill Animation on Scroll, Count-Up Stat
 *                  Numbers on Scroll, Magnetic Lift on hover
 *
 * The reviews are fabricated placeholder content and are labelled as such in
 * the aggregate panel, quietly rather than with a banner.
 *
 * The star sweep is driven off the enclosing <Reveal>'s own `is-in` class
 * rather than nested <Reveal>s — a Reveal inside a <Stagger> subtree would
 * consume the parent's stagger slots and stretch the card cascade.
 */

function Stars({ size = 15, base = 0 }) {
  return (
    <span className="gr__stars" role="img" aria-label="Rated 5 out of 5">
      {[0, 1, 2, 3, 4].map((i) => (
        <span className="gr__star" key={i} style={{ '--d': `${base + i * 70}ms` }}>
          <Star size={size} strokeWidth={0} fill="currentColor" aria-hidden="true" />
        </span>
      ))}
    </span>
  )
}

export default function GoogleReviews() {
  return (
    <section className="band band--light gr" id="reviews" aria-labelledby="reviews-title">
      <span className="rulefield" aria-hidden="true" />
      <div className="shell">
        <SectionHead
          index={reviews.index}
          eyebrow={reviews.eyebrow}
          title={reviews.title}
          titleId="reviews-title"
        />

        <div className="gr__grid">
          <Reveal className="gr__agg" variant="settle" duration={820}>
            <p className="gr__aggKicker">Google Reviews</p>
            <p className="gr__aggNum">
              <CountUp end={reviews.rating} decimals={1} duration={1500} />
            </p>
            <div className="gr__aggStack">
              <Stars size={20} base={260} />
              <p className="gr__aggLine">
                out of 5 — from <CountUp end={reviews.count} duration={1600} />+ Google reviews
              </p>
            </div>
            <p className="gr__aggNote">{reviews.aggregateNote}</p>
          </Reveal>

          <Stagger className="gr__cards" step={110} as="ul">
            {reviews.items.map((item) => (
              <Reveal as="li" className="gr__card" key={item.name} variant="rise">
                <span className="tick tick--tl" aria-hidden="true" />
                <span className="tick tick--br" aria-hidden="true" />
                <Stars base={180} />
                <blockquote className="gr__quote">{item.quote}</blockquote>
                <footer className="gr__meta">
                  <cite className="gr__name">{item.name}</cite>
                  <span className="gr__focus">{item.focus}</span>
                </footer>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
