"use client"

import Image from "next/image";

interface EmptyProps {
  label: string;
  image: string;
}

export const Empty: React.FC<EmptyProps> = ({
  label,
  image
}) => {
  return (
    <div className="h-full p-20 pb-0 flex flex-col justify-center items-center">
      <div className="relative h-72 w-72">
        <Image 
          alt="Empty"
          key={image}
          fill
          priority
          sizes="(max-width: 768px) 100vw"
          src={image}
        />
      </div>
      <p className="text-muted-foreground text-sm text-center">
        {label}
      </p>
    </div>
  );
}