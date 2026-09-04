import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import GoogleReviews from './components/GoogleReviews.jsx'
import TrustBadges from './components/TrustBadges.jsx'
import WhyUs from './components/WhyUs.jsx'
import Services from './components/Services.jsx'
import ServiceAreas from './components/ServiceAreas.jsx'
import Story from './components/Story.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'
import StickyCallBar from './components/StickyCallBar.jsx'

export default function App() {
  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <GoogleReviews />
        <TrustBadges />
        <WhyUs />
        <Services />
        <ServiceAreas />
        <Story />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
      <div className="page__pad" aria-hidden="true" />
      <StickyCallBar />
    </div>
  )
}
