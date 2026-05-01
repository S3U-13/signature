"use client";
import React, { useEffect, useState } from "react";
import { useApiRequest } from "@/hooks/useApi";

export default function useHook() {
  const { dataDashboard } = useApiRequest();
  const [data, setData] = useState(null);

  const loadData = async () => {
    try {
      const data = await dataDashboard();
      console.log(data);
      if (data) {
        setData(data);
      } else {
        setData(null);
      }
    } catch (error) {
      console.error(), setData(null);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    data,
  };
}
