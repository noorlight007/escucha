interface TestimonialCardProps {
  quote: string;
  author: string;
  subtle?: boolean;
}

const TestimonialCard = ({ quote, author, subtle = false }: TestimonialCardProps) => {
  if (subtle) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground italic text-lg max-w-xl mx-auto">
          "{quote}"
        </p>
        <p className="text-sm text-muted-foreground/70 mt-3">— {author}</p>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border/50 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      <p className="text-foreground/90 text-lg leading-relaxed mb-4">
        "{quote}"
      </p>
      <p className="text-muted-foreground text-sm font-medium">— {author}</p>
    </div>
  );
};

export default TestimonialCard;
