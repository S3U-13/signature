"use client";
import React, { useEffect, useRef, useState } from "react";
import { useApiRequest } from "../../../hooks/useApi";

export default function useHook() {
  const { fetchForm } = useApiRequest();
  const modalRef = useRef(null);
  const [modalForm1, setModalForm1] = useState(false);
  const [modalForm2, setModalForm2] = useState(false);
  const [modalForm3, setModalForm3] = useState(false);

  const [form, setForm] = useState([]);
  const openForm1 = () => {
    setModalForm1((prev) => !prev);
  };
  const openForm2 = () => {
    setModalForm2((prev) => !prev);
  };
  const openForm3 = () => {
    setModalForm3((prev) => !prev);
  };
  useEffect(() => {
    fetchForm()
      .then((data) => setForm(data || []))
      .catch(console.error);
  }, [fetchForm]);
  return {
    modalRef,
    modalForm1,
    setModalForm1,
    modalForm2,
    setModalForm2,
    modalForm3,
    setModalForm3,
    form,
  };
}
