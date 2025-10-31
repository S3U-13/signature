"use client";
import { Button } from "@heroui/button";
import { DatePicker } from "@heroui/date-picker";
import { Input, Textarea } from "@heroui/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { Radio, RadioGroup } from "@heroui/radio";
import React from "react";
import useHook from "./useHook";
import { Search } from "@deemlol/next-icons";

export default function page({ openForm1, closeForm1, modalRef }) {
  const {
    modalRefSign,
    openSign01,
    openSign02,
    openSign03,
    setOpenSign01,
    setOpenSign02,
    setOpenSign03,
    signature,
    signature2,
    signature3,
    handleSaveSignature,
    handleSaveSignature2,
    handleSaveSignature3,
  } = useHook();
  return (
    <div>
      <Modal
        size="3xl"
        isOpen={openForm1}
        onOpenChange={closeForm1}
        classNames={{
          body: "max-h-[calc(85vh-120px)] overflow-y-scroll p-6 bg-gradient-to-b from-white to-blue-50",
        }}
        placement="center"
      >
        <ModalContent ref={modalRef}>
          {(closeForm1) => (
            <>
              <ModalHeader className="flex flex-col items-center gap-1 text-center text-lg font-semibold text-blue-700">
                หนังสืออธิบายและยินยอมให้ทำการจำลองการฉายรังสีโดยใช้รังสีเอกซเรย์และสารทึบรังสี
              </ModalHeader>

              <ModalBody className="space-y-6 text-gray-800">
                <div className="text-center">
                  <h1 className="font-medium text-blue-600">
                    หน่วยงานรังสีรักษา โรงพยาบาลพระปกเกล้า
                  </h1>
                </div>

                {/* ---------------- ข้อมูลผู้ป่วย ---------------- */}
                <section className="border border-gray-200 rounded-2xl p-4 bg-white shadow-sm">
                  <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
                    <h2 className="text-blue-700 font-semibold mb-3 text-sm">
                      ข้อมูลผู้ป่วย
                    </h2>
                    <div className="flex items-center gap-2 w-full sm:w-1/2">
                      <Input
                        size="sm"
                        label="ค้นหา"
                        placeholder="กรอก HN ...."
                        variant="flat"
                      />
                      <Button isIconOnly color="primary" variant="solid">
                        <Search size={20} color="#FFFFFF" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 gap-3">
                    <Input
                      size="sm"
                      className="col-span-3"
                      label="ชื่อ-สกุล ผู้ป่วย"
                    />
                    <Input size="sm" className="col-span-2" label="อายุ" />
                    <Input size="sm" className="col-span-2" label="HN" />
                    <DatePicker
                      size="sm"
                      isReadOnly
                      className="col-span-2"
                      label="วันที่"
                    />
                    <Input size="sm" className="col-span-1" label="น้ำหนัก" />
                  </div>
                </section>

                {/* ---------------- คำอธิบาย ---------------- */}
                <section className="border border-gray-200 rounded-2xl p-4 bg-white shadow-sm">
                  <h2 className="text-blue-700 font-semibold mb-3 text-sm">
                    คำอธิบายการตรวจ
                  </h2>
                  <div className="space-y-3 text-sm leading-6">
                    <p className="indent-8">
                      ท่านกำลังจะเข้ารับการตรวจทางรังสีโดยใช้รังสีเอกซเรย์
                      หรือการฉีดสารทึบรังสีร่วมกับการเอกซเรย์
                      ซึ่งในการตรวจนี้เเพทย์/เจ้าหน้าที่จะใช้สารทึบรังสีฉีดผ่านทางหลอดเลือดดำ
                      หลังจากนั้นจึงเอกซเรย์ ในการตรวจดังกล่าว
                      อาจมีโอกาสเกิดการเเพ้ต่อสารทึบรังสีได้ดังนี้
                    </p>
                    <p className="indent-8">
                      1. เเพ้เล็กน้อย ได้เเก่ คลื่นไส้/อาเจียน จาม ผื่นคัน มีไข้
                    </p>
                    <p className="indent-8">
                      2.เเพ้ปานกลางถึงมาก ได้เเก่ หายใจขัด ความดันโลหิตต่ำ
                      หัวใจเต้นช้า หน้าบวม ปากบวม กล่องเสียงบวม ไตวาย ชัก
                      หรืออาจเสียชีวิตได้
                      อย่างไรก็ตามทางหน่วยงานรังสีรักษาได้ตามมาตรการในการป้องกันเเละรักษาอาการเเพ้ที่เกิดจากการตรวจดังกล่าว
                      ทั้งนี้เพื่อป้องกันอันตรายที่อาจเกิดขึ้น
                      กรุณาตอบคำถามต่อไปนี้
                      เพื่อตรวจหาความเสี่ยงต่อการเอกซเรย์หรือฉีดสารทึบรังสี
                    </p>
                  </div>
                </section>

                {/* ---------------- ส่วนลงนาม ---------------- */}
                <section className="border border-gray-200 rounded-2xl p-4 bg-white shadow-sm space-y-2">
                  <div className="grid grid-cols-1 gap-y-3 p-2  rounded-lg ">
                    <span>แพทย์</span>
                    <span>ลงชื่อ.........................</span>
                    <span className="block">
                      (.............ชื่อ..............)
                    </span>
                  </div>
                </section>
              </ModalBody>

              <ModalFooter>
                <Button variant="light" color="danger" onPress={closeForm1}>
                  ปิด
                </Button>
                <Button color="primary" onPress={closeForm1}>
                  บันทึก
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
