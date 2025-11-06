import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Features from '@/components/Features'
import TechStack from '@/components/TechStack'
import Architecture from '@/components/Architecture'
import Roadmap from '@/components/Roadmap'
import FAQ from '@/components/FAQ'
import Community from '@/components/Community'
import Documentation from '@/components/Documentation'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <>
      {/* Space background effects */}
      <div className="space-bg" />
      <div className="shooting-star" />
      <div className="shooting-star s2" />
      <div className="shooting-star s3" />

      <Header />
      
      <main className="relative z-10">
        <Hero />
        <Stats />
        <Features />
        <TechStack />
        <Architecture />
        <Roadmap />
        <FAQ />
        <Community />
        <Documentation />
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
