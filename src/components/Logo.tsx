import React from "react";

export default function Logo() {
  return (
    <div className="relative w-[500px] h-[500px]">
      <img
        src="/01011010 ring.png"
        className="invert dark:invert-0 animate-custom-spin fixed center-xy w-[500px] h-[500px]"
        alt="01011010 ring"
      />
      <img
        src="/circle.png"
        className="invert dark:invert-0 animate-[spin_90s_linear_infinite] fixed center-xy w-[500px] h-[500px] direction-reverse"
        alt="Circle"
      />
      <img
        src="/z90 text.png"
        className="invert dark:invert-0 fixed center-xy w-[500px] h-[500px]"
        alt="Z90"
      />
    </div>
  );
}
