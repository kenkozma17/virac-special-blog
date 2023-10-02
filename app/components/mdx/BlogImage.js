// components/mdx/Button.tsx
"use client";

import Image from "next/image";

export default function BlogImage({ src, alt, className, width, height }) {
  return (
    <Image
      className={`${className}`}
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  );
}
