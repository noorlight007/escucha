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
    /** Real profile photo URL/path */
    photoSrc?: string;
    /** Optional subtitle (role/location) */
    meta?: string;
  }>;
}

const TestimonialsCarousel = ({ testimonials }: TestimonialsCarouselProps) => {
  return (
    <section className="py-12 sm:py-16 bg-muted/25">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">

          <Carousel opts={{ align: "center", loop: true }} className="relative">
            <CarouselContent className="-ml-4">
              {testimonials.map((t, index) => (
                <CarouselItem key={index} className="pl-4 basis-full">
                  <div className="mx-auto w-full max-w-[720px]">
                    <TestimonialCard
                      quote={t.quote}
                      author={t.author}
                      meta={t.meta}
                      photoSrc={t.photoSrc}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              className={
                "left-2 sm:-left-12 top-1/2 -translate-y-1/2 " +
                "bg-white/70 backdrop-blur border-emerald-500/15 text-emerald-700 " +
                "hover:bg-white hover:border-emerald-500/25 shadow-sm"
              }
            />
            <CarouselNext
              className={
                "right-2 sm:-right-12 top-1/2 -translate-y-1/2 " +
                "bg-white/70 backdrop-blur border-emerald-500/15 text-emerald-700 " +
                "hover:bg-white hover:border-emerald-500/25 shadow-sm"
              }
            />
          </Carousel>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
