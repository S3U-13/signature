"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";
import {
  Check,
  ChevronDown,
  FileText,
  PlusCircle,
  Save,
  Search,
  Slash,
} from "@deemlol/next-icons";
import { Tooltip } from "@heroui/tooltip";
import { Pagination } from "@heroui/pagination";
import ModalForm1 from "./create_form_1/page";
import ModalForm2 from "./create_form_2/page";
import ModalForm3 from "./create_form_3/page";
import useHook from "./useHook";
import { Input } from "@heroui/input";
import { div } from "framer-motion/client";

export default function page() {
  const {
    modalRef,
    modalForm1,
    setModalForm1,
    modalForm2,
    setModalForm2,
    modalForm3,
    setModalForm3,
  } = useHook();
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="w-full max-w-5xl border border-divider shadow-sm rounded-2xl p-4">
        {/* Title */}
        <div className="text-center mb-4">
          <h1 className="text-3xl font-semibold ">หน้าค้นหารายการ</h1>
          <p className=" text-sm mt-2">
            ค้นหาและจัดการข้อมูลแบบฟอร์มต่าง ๆ ภายในระบบ
          </p>
        </div>

        {/* Search Section */}
        <div className="flex flex-col sm:flex-row justify-end items-center px-2">
          <div className="flex items-center justify-end gap-2 w-full sm:w-1/2">
            <Input
              size="sm"
              label="ค้นหา"
              placeholder="กรอก HN ...."
              variant="flat"
              className="w-2/3"
            />
            <Button isIconOnly color="secondary" variant="solid">
              <Search size={16} color="#FFFFFF" />
            </Button>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto mt-2 rounded-lg p-2">
          <Table
            aria-label="ตารางรายการ"
            className="min-w-full text-sm"
            classNames={{
              th: "py-4 text-md font-semibold",
              td: "py-3",
            }}
          >
            <TableHeader>
              <TableColumn>ID</TableColumn>
              <TableColumn>HN</TableColumn>
              <TableColumn>ชื่อ-นามสกุล</TableColumn>
              <TableColumn>ประเภทรายการ</TableColumn>
              <TableColumn className="text-center">ACTION</TableColumn>
            </TableHeader>

            <TableBody emptyContent="ไม่พบข้อมูล">
              <TableRow key="1">
                <TableCell>1</TableCell>
                <TableCell>6815347</TableCell>
                <TableCell>Tony Reichert</TableCell>
                <TableCell>
                  ใบรับทราบข้อมูลเเละยินยอมรับการรักษาด้วยการฉายรังสี
                </TableCell>
                <TableCell className="flex justify-center">
                  <Tooltip color="default" content="แก้ไขข้อมูล">
                    <Button
                      size="sm"
                      isIconOnly
                      variant="flat"
                      className="hover:bg-gray-200 transition-colors"
                      onPress={() => setModalForm1(true)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </Button>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <ModalForm1
          openForm1={modalForm1}
          modalRef={modalRef}
          closeForm1={() => setModalForm1(false)}
        />
        <ModalForm2
          openForm2={modalForm2}
          modalRef={modalRef}
          closeForm2={() => setModalForm2(false)}
        />
        <ModalForm3
          openForm3={modalForm3}
          modalRef={modalRef}
          closeForm3={() => setModalForm3(false)}
        />
      </div>
    </div>
  );
}
