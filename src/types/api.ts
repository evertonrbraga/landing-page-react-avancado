export type Concept = {
  id: string
  title: string
}

export type Image = {
  alternativeText: string
  url: string
}

export type LogoProps = Image

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: Image
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: Image
}

export type SectionTechProps = {
  title: string
  techIcons: [
    {
      icon: {
        url: string
        name: string
      }
      title: string
    }
  ]
}

export type SectionConceptsProps = {
  title: string
  concepts: Concept[]
}

export type SectionModulesProps = {
  title: string
  modules: Array<{
    title: string
    subtitle: string
    description: string
  }>
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SocialLink = {
  title: string
  url: string
}

export type Author = {
  photo: Image
  name: string
  role: string
  socialLinks: SocialLink[]
  description: string
}

export type SectionAboutUsProps = {
  title: string
  authors: Author[]
}

export type Review = {
  name: string
  text: string
  photo: {
    url: string
  }
}

export type Question = {
  question: string
  answer: string
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
