"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  sub?: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full border-b-[1px] border-[#E6E6E6]",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <div
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative  py-[12px] mr-[49px] rounded-full ",
              tabClassName
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                animate={{ bottom: 0 }}
                transition={{
                  type: "spring",
                  bounce: 0.3,
                  duration: 0.6,
                }}
                className={cn(
                  "absolute h-[2px] bg-[#2243FF] bottom-[-1px] w-full z-[12]  rounded-none ",
                  activeTabClassName
                )}
              />
            )}

            <span
              className={`relative block  font-bold text-[12px] md:text-[16px] cursor-pointer text-center  ${
                active.value === tab.value ? "text-[#2243FF]" : "text-[#999999]"
              }`}
            >
              {tab.title} <br /> {tab.sub}
            </span>
          </div>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-[60px]", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
  active,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };

  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => {
        if (tab.value !== active.value) return null;
        return (
          <motion.div
            key={tab.value}
            layoutId={tab.value}
            style={{
              zIndex: -idx,
            }}
            animate={{
              y: isActive(tab) ? [0, 40, 0] : 0,
            }}
            className={cn("w-full h-full", className)}
          >
            {tab.content}
          </motion.div>
        );
      })}
    </div>
  );
};
