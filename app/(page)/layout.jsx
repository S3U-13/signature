"use client"; // ✅
import React from "react";
import Sidebar from "@/components/sidebar";

export default function Layout({ children }) {
  return (
    <div className=" min-h-screen grid grid-cols-12 gap-4 p-4">
      <Sidebar />
      {/* max-h-[calc(100vh-20px)] overflow-y-scroll */}
      <main className="col-span-10 mx-auto w-full">{children}</main>
    </div>
  );
}
