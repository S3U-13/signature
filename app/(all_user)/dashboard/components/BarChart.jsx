"use client";
import React from "react";
import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function BarChart({ barData }) {
  const isDark =
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false;

  const thaiMonths = [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
  ];

  const categories = barData?.map((item) => thaiMonths[item.month - 1]);
  const chartData = barData?.map((item) => item.total);
  const successData = barData?.map((item) => item.success_total);

  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      fontFamily: "inherit",
      background: "transparent",
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: "80%",
        distributed: false,
        dataLabels: {
          position: "top", // 👈 ตรงนี้สำคัญ
        },
      },
    },
    dataLabels: {
      enabled: true,

      formatter: (val) => {
        if (!val || val === 0) return ""; // 👈 ซ่อน 0
        return val;
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: categories,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: isDark ? "#a1a1aa" : "#71717a", // neutral-400 or neutral-500
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: isDark ? "#a1a1aa" : "#71717a",
          fontSize: "12px",
        },
      },
    },
    grid: {
      borderColor: isDark ? "#262626" : "#f4f4f5",
      strokeDashArray: 4,
      yaxis: {
        lines: { show: true },
      },
    },
    fill: {
      opacity: 1,
      colors: ["#3b82f6", "#34d399"], // blue-500
    },
    tooltip: {
      theme: isDark ? "dark" : "light",
      y: {
        formatter: function (val) {
          return val + " ฟอร์ม";
        },
      },
    },
  };

  const series = [
    {
      name: "ทั้งหมด",
      data: chartData,
    },
    {
      name: "สำเร็จ",
      data: successData,
    },
  ];

  return (
    <div className="w-full h-full min-h-[200px]">
      <ApexChart
        options={options}
        series={series}
        type="bar"
        height="100%"
        width="100%"
      />
    </div>
  );
}
