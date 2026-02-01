import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyWhatsApp from "@/components/WhyWhatsApp";
import TestimonialCard from "@/components/TestimonialCard";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import NatureSection from "@/components/NatureSection";
import PricingSection from "@/components/PricingSection";
import CreatorSection from "@/components/CreatorSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

import juliaImage from "@/assets/julia-creator.png";
import luciap from "@/assets/lucia_p.jpg";
import carlos from "@/assets/carlos.jpg";
import miguel from "@/assets/miguel.jpg";

// Testimonial data
const heroTestimonial = {
  quote: "For the first time, I feel like I can just be without needing to explain myself.",
  author: "Ana M."
};

const postHowItWorksTestimonials = [
  {
    quote: "Es como tener un amigo tranquilo que escucha sin intentar resolverlo todo.",
    photoSrc: carlos,
    author: "Carlos R."
  },
  {
    quote: "Las revisiones diarias se han convertido en mi parte favorita de la mañana. Simple, suave, que me ancla.",
    photoSrc: luciap,
    author: "Lucía P."
  },
  {
    quote: "Era escéptico, pero tras dos semanas noté que dormía mejor y me preocupaba menos.",
    photoSrc: miguel,
    author: "Miguel A."
  }
];

const prePricingTestimonials = [
  {
    quote: "The guided meditations feel so personal. It's like Escucha knows exactly what I need to hear.",
    author: "Elena S."
  },
  {
    quote: "I use it at night when my mind won't stop racing. The nature sounds are incredibly soothing.",
    author: "David F."
  }
];

const finalTestimonial = {
  quote: "Escucha helped me realize that listening to myself is the first step to feeling whole again.",
  author: "María L."
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Subtle testimonial under hero */}
      {/* <section className="py-8 bg-muted/20">
        <div className="container mx-auto px-6">
          <TestimonialCard 
            quote={heroTestimonial.quote}
            author={heroTestimonial.author}
            subtle
          />
        </div>
      </section> */}
      
      {/* Why WhatsApp Section */}
      <WhyWhatsApp />

      {/* How It Works */}
      <HowItWorks />
      
      {/* 3 Testimonials after How It Works */}
      <TestimonialsCarousel testimonials={postHowItWorksTestimonials} />
      
      {/* Full-width Nature Background Section */}
      <NatureSection />
      
      {/* 2 Testimonials before Pricing */}
      {/* <TestimonialsSection testimonials={prePricingTestimonials} columns={2} /> */}
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* Final Testimonial near CTA */}
      {/* <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <TestimonialCard 
            quote={finalTestimonial.quote}
            author={finalTestimonial.author}
            subtle
          />
        </div>
      </section> */}

      {/* Who's behind ESCUCHA */}
      <CreatorSection />

      {/* FAQ Section */}
      <FAQSection />
      
      {/* Final CTA */}
      <FinalCTA />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
