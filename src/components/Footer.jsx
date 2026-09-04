import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react'
import { business, footer } from '../data/site.js'
import { Reveal, Stagger } from '../lib/motion.jsx'
import { Icon } from './icons.jsx'
import Mark from './Mark.jsx'
import './Footer.css'

/*
 * Footer
 * Layout ......... Mega Footer, four columns as specified
 * Visual style ... Dark Contrast Footer Band
 * Animation ...... Link Column Staggered Fade-In on Scroll (one group per
 *                  column: heading + its links move together), Underline
 *                  Sweep on every link
 *
 * No verifiable social profile URLs were published by the business, so the
 * social icons point at the company's own site rather than an invented
 * handle. Noted in the README.
 */

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="ft" id="site-footer">
      <span className="rulefield" aria-hidden="true" />
      <div className="shell">
        <Stagger className="ft__cols" step={120}>
          <Reveal className="ft__col ft__col--brand" variant="rise-sm">
            <a className="ft__brand" href="#top" aria-label={`${business.name} — back to top`}>
              <Mark className="ft__mark" size={30} />
              <span className="ft__word">
                <span className="ft__wordMain">{business.mark}</span>
                <span className="ft__wordSub">Electrical Services</span>
              </span>
            </a>
            <p className="ft__mission">{footer.mission}</p>
            <ul className="ft__social">
              {footer.socials.map((s) => (
                <li key={s.label}>
                  <a
                    className="ft__socialLink"
                    href={business.site}
                    aria-label={`${business.name} on ${s.label}`}
                  >
                    <Icon name={s.icon} size={16} strokeWidth={1.8} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="ft__socialNote">
              Social links point to the main site — profile URLs to be confirmed before launch.
            </p>
          </Reveal>

          <Reveal className="ft__col" variant="rise-sm">
            <h3 className="ft__head">{footer.servicesHeading}</h3>
            <ul className="ft__links">
              {footer.services.map((label) => (
                <li key={label}>
                  <a className="ft__link" href="#services">
                    <span className="sweep">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="ft__col" variant="rise-sm">
            <h3 className="ft__head">{footer.quickHeading}</h3>
            <ul className="ft__links">
              {footer.quick.map((item) => (
                <li key={item.label}>
                  <a className="ft__link" href={item.href}>
                    <span className="sweep">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="ft__col" variant="rise-sm">
            <h3 className="ft__head">{footer.contactHeading}</h3>
            <address className="ft__address">
              <span className="ft__name">{business.name}</span>
              <span className="ft__line">
                <MapPin size={13} strokeWidth={1.9} aria-hidden="true" />
                {business.addressLine}
              </span>
              <a className="ft__line ft__link" href={business.phoneHref}>
                <Phone size={13} strokeWidth={1.9} aria-hidden="true" />
                <span className="sweep">{business.phoneDisplay}</span>
              </a>
              <a className="ft__line ft__link" href={business.smsHref}>
                <MessageSquare size={13} strokeWidth={1.9} aria-hidden="true" />
                <span className="sweep">Text {business.phoneDisplay}</span>
              </a>
              <a className="ft__line ft__link" href={business.emailHref}>
                <Mail size={13} strokeWidth={1.9} aria-hidden="true" />
                <span className="sweep">{business.email}</span>
              </a>
            </address>
          </Reveal>
        </Stagger>

        <div className="ft__base">
          <p className="ft__copy">
            © {year} {footer.copyrightTail}
          </p>
          <p className="ft__demo">
            Unsolicited design concept · not affiliated with the business · noindex
          </p>
        </div>
      </div>
    </footer>
  )
}
