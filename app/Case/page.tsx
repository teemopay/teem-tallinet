"use client";
import Image from "next/image";
import { DirectionAwareHover } from "../../components/ui/direction-aware-hover";
import { NavbarDemo } from "../../components/custom/Navbar";
export default function Case() {
  const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div>
      <NavbarDemo />
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-normal text-sm"></p>
      </DirectionAwareHover>
    </div>
  );
}
