"use client";
import { useRef, useState } from "react";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { title, subtitle } from "@/components/primitives";

import LoginModal from "./login/page";
import { Button } from "@heroui/button";

export default function Home() {
  const LoginRef = useRef(null);
  const [openLogin, setOpenLogin] = useState(false);
  const openModal = () => {
    setOpenLogin((prev) => !prev);
  };
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50 text-center px-4">
      <div className="inline-block max-w-xl">
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 mt-2">

        <Button
          size="lg"
          color="default"
          variant="bordered"
          radius="full"
          className="text-gray-700"
          onPress={() => setOpenLogin(true)}
        >
          สำหรับคนไข้
        </Button>

        <Button
          size="lg"
          color="primary"
          variant="solid"
          onPress={() => setOpenLogin(true)}
          radius="full"
        >
          สำหรับออกใบยินยอม
        </Button>
      </div>

      <LoginModal
        isOpen={openLogin}
        onClose={() => setOpenLogin(false)}
        LoginRef={LoginRef}
      />
    </section>
  );
}
