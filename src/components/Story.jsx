import { story } from '../data/site.js'
import { Reveal, useScrub } from '../lib/motion.jsx'
import Img from './Img.jsx'
import './Story.css'

/*
 * Our Story
 * Layout ......... Split Story with Sticky Photo — DEVIATION from the
 *                  assigned Chronological Timeline Narrative. The story copy
 *                  carries no dates or ordered milestones ("twenty years",
 *                  "the 2000s", "three years running"), and the project's
 *                  timeline rule forbids inventing any, so the assignment's
 *                  own fallback applies.
 * Visual style ... Minimal Line Timeline, kept from the assignment but used
 *                  as an undated narrative spine beside the three paragraphs
 *                  rather than a dated axis — no year is asserted anywhere.
 * Animation ...... Story Section Sticky Scroll Progress (photo pins, text
 *                  sequences past it) + Progressive Reveal Scrub driving the
 *                  spine's draw, so the line tracks the read rather than
 *                  firing once and finishing early.
 */

export default function Story() {
  const scrubRef = useScrub({ maxWidth: 900 })

  return (
    <section className="band band--light st" id="story" aria-labelledby="story-title">
      <span className="rulefield" aria-hidden="true" />
      <div className="shell st__inner">
        <div className="st__aside">
          <Reveal className="shead__rule" variant="fade" duration={700}>
            <span className="shead__idx">{story.index}</span>
            <span className="shead__eyebrow">{story.eyebrow}</span>
          </Reveal>

          <Reveal as="h2" className="st__title" id="story-title" variant="rise-sm" delay={110}>
            {story.title}
          </Reveal>

          <Reveal className="st__figure" variant="settle" duration={880} delay={180}>
            <Img
              className="st__img"
              name={story.image.name}
              alt={story.image.alt}
              width={1600}
              height={900}
              sizes="(max-width: 999px) 100vw, 40vw"
            />
          </Reveal>
          <Reveal className="st__figNote" variant="fade" delay={280}>
            <span className="cap">St. Albert crew, shop bay</span>
          </Reveal>
        </div>

        <div className="st__main" ref={scrubRef}>
          <div className="st__spine">
            <span className="st__spineRail" aria-hidden="true" />
            <span className="st__spineFill" aria-hidden="true" />
            <div className="st__beats">
              {story.paragraphs.map((text, i) => (
                <Reveal className="st__beat" key={i} variant="rise" delay={i * 40}>
                  <span className="st__marker" aria-hidden="true" />
                  <p className="st__para">{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
