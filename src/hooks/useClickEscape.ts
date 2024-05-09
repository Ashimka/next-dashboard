"use client";

import React from "react";

export const touchEscape = (callback: () => void) => {
  document.addEventListener(
    "keydown",
    (event: KeyboardEvent | React.KeyboardEvent) => {
      if (event.key === "Escape") {
        callback();
      }
    }
  );
};
