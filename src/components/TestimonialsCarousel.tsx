import TestimonialCard from "./TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialsCarouselProps {
  testimonials: Array<{
    quote: string;
    author: string;
  }>;
}

const TestimonialsCarousel = ({ testimonials }: TestimonialsCarouselProps) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/1 lg:basis-1/1">
                  <div className="p-2">
                    <TestimonialCard
                      quote={testimonial.quote}
                      author={testimonial.author}
                      showAvatar
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12 bg-primary/10 border-primary/20 text-primary hover:bg-primary/20" />
            <CarouselNext className="right-0 md:-right-12 bg-primary/10 border-primary/20 text-primary hover:bg-primary/20" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
