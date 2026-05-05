"use client";
import React, { useEffect, useState } from "react";
import { useApiRequest } from "../hooks/useApi";

export default function loadStaff() {
  const { staffList } = useApiRequest();
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await staffList();
      if (data) {
        setStaff(data);
      } else {
        setStaff([]);
      }
    } catch (error) {
      console.log(error);
      setStaff([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    staff,
  };
}
