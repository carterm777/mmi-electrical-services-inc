import {
  Award,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  CreditCard,
  Facebook,
  Gauge,
  Globe,
  HardHat,
  Instagram,
  Lightbulb,
  PhoneCall,
  PlugZap,
  Receipt,
  ShieldCheck,
  Trophy,
  Users,
  Wrench,
} from 'lucide-react'

/* Every icon used on the page, resolved by name from data/site.js. Each one
   is meaning-matched to its label — no two items in the same row share one. */
export const icons = {
  Award,
  BadgeCheck,
  Building2,
  ClipboardCheck,
  CreditCard,
  Facebook,
  Gauge,
  Globe,
  HardHat,
  Instagram,
  Lightbulb,
  PhoneCall,
  PlugZap,
  Receipt,
  ShieldCheck,
  Trophy,
  Users,
  Wrench,
}

export function Icon({ name, ...rest }) {
  const Cmp = icons[name]
  if (!Cmp) return null
  return <Cmp {...rest} />
}
