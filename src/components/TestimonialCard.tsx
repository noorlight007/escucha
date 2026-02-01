import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  quote: string;
  author: string;
  /** Real profile photo (URL/path). Put images in /public and pass "/..." */
  photoSrc?: string;
  /** Optional subtitle (e.g., role/location) */
  meta?: string;
}

const initialsFromName = (name: string) => {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts
    .map((p) => p[0]?.toUpperCase())
    .join("")
    .slice(0, 2);
};

const TestimonialCard = ({ quote, author, photoSrc, meta }: TestimonialCardProps) => {
  return (
    <Card
      className={
        "group relative overflow-hidden rounded-2xl border bg-background/80 backdrop-blur " +
        "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      }
    >
      {/* subtle gradient + sparkle */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-24 bg-gradient-to-tr from-emerald-200/20 via-transparent to-emerald-200/20 blur-2xl" />
        <div className="absolute inset-0 opacity-[0.25] [background-image:radial-gradient(circle_at_1px_1px,rgba(16,185,129,0.22)_1px,transparent_0)] [background-size:24px_24px]" />
      </div>

      <CardContent className="relative p-5 sm:p-6">
        <div className="flex items-start gap-4">
          {/* Real photo avatar (bigger + nicer) */}
          <Avatar className="h-12 w-12 sm:h-14 sm:w-14 overflow-hidden ring-2 ring-emerald-500/15 transition-transform duration-300 group-hover:scale-[1.04]">
            <AvatarImage
              src={photoSrc}
              alt={author}
              className="object-cover"
            />
            {/* Only used if photo is missing or fails to load */}
            <AvatarFallback className="bg-emerald-50 text-emerald-700 font-medium">
              {initialsFromName(author)}
            </AvatarFallback>
          </Avatar>

          <div className="min-w-0 flex-1">
            <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
              <span className="text-emerald-600/90">“</span>
              {quote}
              <span className="text-emerald-600/90">”</span>
            </p>

            <div className="mt-3 flex items-center gap-2">
              <p className="truncate text-sm font-medium text-foreground">{author}</p>
              {meta ? (
                <>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                  <p className="truncate text-xs text-muted-foreground">{meta}</p>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
