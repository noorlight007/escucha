import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TestimonialCard from "@/components/TestimonialCard";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import NatureSection from "@/components/NatureSection";
import PricingSection from "@/components/PricingSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

// Testimonial data
const heroTestimonial = {
  quote: "For the first time, I feel like I can just be without needing to explain myself.",
  author: "Ana M."
};

const postHowItWorksTestimonials = [
  {
    quote: "It's like having a calm friend who listens without trying to solve everything. I didn't know I needed this.",
    author: "Carlos R."
  },
  {
    quote: "The daily check-ins have become my favorite part of the morning. Simple, gentle, grounding.",
    author: "Lucía P."
  },
  {
    quote: "I was skeptical, but after two weeks I noticed I was sleeping better and worrying less.",
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
      <section className="py-8 bg-muted/20">
        <div className="container mx-auto px-6">
          <TestimonialCard 
            quote={heroTestimonial.quote}
            author={heroTestimonial.author}
            subtle
          />
        </div>
      </section>
      
      {/* How It Works */}
      <HowItWorks />
      
      {/* 3 Testimonials after How It Works */}
      <TestimonialsSection testimonials={postHowItWorksTestimonials} columns={3} />
      
      {/* Full-width Nature Background Section */}
      <NatureSection />
      
      {/* 2 Testimonials before Pricing */}
      <TestimonialsSection testimonials={prePricingTestimonials} columns={2} />
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* Final Testimonial near CTA */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <TestimonialCard 
            quote={finalTestimonial.quote}
            author={finalTestimonial.author}
            subtle
          />
        </div>
      </section>
      
      {/* Final CTA */}
      <FinalCTA />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
