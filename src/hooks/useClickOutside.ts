"use client";

import React from "react";

export const useClickOutside = (callback: () => void) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
        document.querySelector("body")?.classList.remove("hidden");
      }
    };

    document.addEventListener("mouseup", handleClickOutside);
    document.addEventListener("touchmove", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("touchmove", handleClickOutside);
    };
  }, [callback]);

  return ref;
};
