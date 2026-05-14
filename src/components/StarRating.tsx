import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md";
  showNumber?: boolean;
}

export const StarRating = ({ rating, size = "sm", showNumber = true }: StarRatingProps) => {
  const starSize = size === "sm" ? "h-3 w-3" : "h-4 w-4";
  const textSize = size === "sm" ? "text-[10px]" : "text-sm";

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => {
          const pct = Math.min(100, Math.max(0, (rating - (star - 1)) * 100));
          return (
            <span key={star} className="relative inline-block flex-shrink-0">
              <Star className={`${starSize} fill-amber-200 text-amber-200`} />
              {pct > 0 && (
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${pct}%` }}
                >
                  <Star className={`${starSize} fill-amber-400 text-amber-400`} />
                </span>
              )}
            </span>
          );
        })}
      </div>
      {showNumber && (
        <span className={`${textSize} text-muted-foreground font-medium`}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};
