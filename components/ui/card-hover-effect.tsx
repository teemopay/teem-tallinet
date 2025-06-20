import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { DirectionAwareHover } from "./direction-aware-hover";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    id: number;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative  gap-x-[18px] gap-y-[21px]",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group  block rounded-[12px] p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Card>
            <div className="w-full h-full lg:max-w-[287px] lg:max-h-[217]">
              <DirectionAwareHover imageUrl={`/img/card-${item.id}.png`}>
                <span className="font-normal text-sm"></span>
              </DirectionAwareHover>
            </div>

            <CardTitle>{item.title}</CardTitle>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-[12px] h-full w-full p-0 overflow-hidden bg-white  group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">{children}</div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-left text-[18px] text-[#333333] pt-[17px] pb-[25px] px-[32px]",
        className
      )}
    >
      {children}
    </h4>
  );
};
