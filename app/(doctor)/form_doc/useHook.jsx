"use client";
import React, { useRef, useState } from "react";

export default function useHook() {
  const modalRef = useRef(null);
  const [modalForm1, setModalForm1] = useState(false);
  const [modalForm2, setModalForm2] = useState(false);
  const [modalForm3, setModalForm3] = useState(false);
  const openForm1 = () => {
    setModalForm1((prev) => !prev);
  };
  const openForm2 = () => {
    setModalForm2((prev) => !prev);
  };
  const openForm3 = () => {
    setModalForm3((prev) => !prev);
  };
  return {
    modalRef,
    modalForm1,
    setModalForm1,
    modalForm2,
    setModalForm2,
    modalForm3,
    setModalForm3,
  };
}
