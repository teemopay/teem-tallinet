"use client";
import { DirectionAwareHover } from "../../components/ui/direction-aware-hover";
export default function About() {
  const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const handle = async () => {
    const o = {
      fullName: "4353534",
      phone: "4353535",
      work: "3435345",
      type: "34543534",
      numbers: "345543",
    };
    if (window.confirm("Please confirm?")) {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: o }),
      });
    }
  };
  return (
    <div>
      <button onClick={handle}>联系我们</button>
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-normal text-sm"></p>
      </DirectionAwareHover>
    </div>
  );
}
