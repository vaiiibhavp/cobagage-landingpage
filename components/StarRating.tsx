import React from "react";

interface StarRatingProps {
  rating: number; // value from 0 to 5 (can be fractional optionally)
  maxStars?: number;
  size?: number; // pixel size for each star
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  size = 24,
  className = "",
}) => {
  const stars = [];
  const normalizedRating = Math.min(Math.max(rating, 0), maxStars);

  const filledSrc = "/File_icon/SVG-6.svg";
  const emptySrc = "/File_icon/SVG-5.svg";

  for (let i = 0; i < maxStars; i++) {
    const isFilled = i < normalizedRating;
    stars.push(
      <img
        key={i}
        src={isFilled ? filledSrc : emptySrc}
        width={size}
        height={size}
        alt={isFilled ? "filled star" : "empty star"}
        className="object-contain"
      />,
    );
  }

  return (
    <div className={`star-rating flex items-center ${className}`}>{stars}</div>
  );
};

export default StarRating;
