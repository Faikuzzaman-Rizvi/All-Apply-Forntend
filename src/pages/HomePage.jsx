import HeroSection from '../components/sections/HeroSection'
import ServicesSection from '../components/sections/ServicesSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import RequiredVideos from '../components/sections/RequiredVideos'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import FAQSection from '../components/sections/FAQSection'
import PartnersSection from '../components/sections/PartnersSection'
import ImportantImages from '../components/sections/ImportantImages'

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <RequiredVideos />
      <ImportantImages />
      <TestimonialsSection />
      <PartnersSection />
      <FAQSection />
    </div>
  )
}
export default HomePage