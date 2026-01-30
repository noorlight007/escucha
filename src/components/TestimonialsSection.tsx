import TestimonialCard from "./TestimonialCard";

interface TestimonialsSectionProps {
  testimonials: Array<{
    quote: string;
    author: string;
  }>;
  columns?: 2 | 3;
}

const TestimonialsSection = ({ testimonials, columns = 3 }: TestimonialsSectionProps) => {
  const gridClass = columns === 2 
    ? "grid md:grid-cols-2 gap-6 max-w-4xl mx-auto" 
    : "grid md:grid-cols-3 gap-6 max-w-5xl mx-auto";

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className={gridClass}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
