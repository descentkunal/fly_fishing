import React from "react";

interface ThinChevronIconProps {
  size?: number;
  color?: string;
  direction?: "down" | "up" | "left" | "right";
}

const rotationMap = {
  down: "rotate(0deg)",
  up: "rotate(180deg)",
  left: "rotate(90deg)",
  right: "rotate(-90deg)",
};

const ThinChevronIcon: React.FC<ThinChevronIconProps> = ({
  size = 24,
  color = "#1C1812",
  direction = "down",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: rotationMap[direction] }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
};

export default ThinChevronIcon;
