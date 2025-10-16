"use client";
import { CheckSquare, Edit, FileText } from "@deemlol/next-icons";
import { Card } from "@heroui/card";
import { Tab, Tabs } from "@heroui/tabs";
import React from "react";
import { ThemeSwitch } from "@/components/theme-switch";

export default function Sidebar() {
  return (
    <div className="col-span-2 border border-divider rounded-xl px-4">
      <div className="mb-[20px] pt-6 flex items-center gap-2">
        <div className="w-[80px] h-[80px] border border-divider rounded-full"></div>
        <div>
          <h1 className="text-sm">ชื่อ</h1>
          <p className="text-[12px]">ตำเเหน่ง</p>
          <p className="text-[12px]">กลุ่มงาน</p>
        </div>
        <div className="ml-25 mb-12 dark:text-white">
          <ThemeSwitch />
        </div>
      </div>
      <Tabs
        aria-label="Options"
        placement="start"
        classNames={{
          base: "w-full",
          tabList: "w-full p-2",
          tabContent: "w-full",
        }}
        size="lg"
        radius="sm"
      >
        <Tab
          key="photos"
          title={
            <div className="flex items-center justify-none space-x-2.5">
              <FileText size={24} />
              <span>หน้าเพิ่มรายการ</span>
            </div>
          }
        ></Tab>
        <Tab
          key="music"
          title={
            <div className="flex items-center justify-none space-x-2.5">
              <Edit size={24} />
              <span>หน้าสถานะเเละการตรวจสอบ</span>
            </div>
          }
        ></Tab>
        <Tab
          key="videos"
          title={
            <div className="flex items-center justify-none space-x-2.5">
              <CheckSquare size={24} />
              <span>หน้ารายการเสร็จสมบูรณ์</span>
            </div>
          }
        ></Tab>
      </Tabs>
    </div>
  );
}
