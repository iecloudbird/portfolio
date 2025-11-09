"use client";

import React, { useEffect, useState } from "react";

export const ShootingStars = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#cca300",
  trailColor = "#ffd700",
  starWidth = 10,
  starHeight = 1,
  className = "",
}: {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}) => {
  const [star, setStar] = useState<{
    id: number;
    x: number;
    y: number;
    angle: number;
    scale: number;
    speed: number;
    distance: number;
  } | null>(null);
  const [nextStarTimeout, setNextStarTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    const createStar = () => {
      const yPosition = Math.random() * window.innerHeight;
      const xPosition = Math.random() * window.innerWidth;
      const angle = Math.random() * 60 - 30;
      const scale = Math.random() * 1 + 0.5;
      const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
      const distance = Math.random() * 200 + 300;

      setStar({
        id: Date.now(),
        x: xPosition,
        y: yPosition,
        angle,
        scale,
        speed,
        distance,
      });

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      const timeout = setTimeout(createStar, randomDelay);
      setNextStarTimeout(timeout);
    };

    const initialDelay = Math.random() * (maxDelay - minDelay) + minDelay;
    const timeout = setTimeout(createStar, initialDelay);

    return () => {
      if (nextStarTimeout) clearTimeout(nextStarTimeout);
      clearTimeout(timeout);
    };
  }, [minSpeed, maxSpeed, minDelay, maxDelay]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {star && (
        <div
          key={star.id}
          style={{
            position: "absolute",
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${starWidth}px`,
            height: `${starHeight}px`,
            borderRadius: "50%",
            background: `linear-gradient(90deg, ${starColor}, transparent)`,
            transform: `rotate(${star.angle}deg) scale(${star.scale})`,
            animation: `shooting ${star.speed}s linear forwards`,
            boxShadow: `0 0 10px ${trailColor}`,
          }}
          onAnimationEnd={() => setStar(null)}
        />
      )}
      <style jsx>{`
        @keyframes shooting {
          0% {
            transform: rotate(${star?.angle || 0}deg) translateX(0)
              scale(${star?.scale || 1});
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: rotate(${star?.angle || 0}deg)
              translateX(${star?.distance || 300}px) scale(${star?.scale || 1});
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
