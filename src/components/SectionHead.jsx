import { Reveal, Stagger } from '../lib/motion.jsx'

/*
 * The running page index. Every section opens with the same three-part rule:
 * a section number, an eyebrow, and a hairline that spans the column. The
 * numbers are a document index, not a claim that the content is a sequence.
 */
export default function SectionHead({ index, eyebrow, title, titleId, lead, split = false }) {
  return (
    <Stagger className={`shead${split ? ' shead--split' : ''}`} step={110}>
      <Reveal className="shead__rule" variant="fade" duration={700}>
        <span className="shead__idx">{index}</span>
        <span className="shead__eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal as="h2" className="shead__title" id={titleId} variant="rise-sm">
        {title}
      </Reveal>
      {lead ? (
        <Reveal as="p" className="shead__lead" variant="rise-sm">
          {lead}
        </Reveal>
      ) : null}
    </Stagger>
  )
}
