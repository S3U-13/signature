"use client";
import React, { useState } from "react";

export default function useHook() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return {
    toggleVisibility,
    isVisible,
  };
}
