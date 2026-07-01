"use client";

import { useEffect, useState } from "react";

const frames = ["t", "to", "tom", "tomo", "tomor", "tomorr", "tomorro", "tomorrow"];

export default function AnimatedWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIndex((prev) => (prev + 1) % frames.length);
    }, 180);

    return () => window.clearTimeout(timer);
  }, [index]);

  return (
    <span className="animated-word" aria-label={frames[frames.length - 1]}>
      {frames[index]}
    </span>
  );
}
