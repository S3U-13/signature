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

export default function page({ openForm1, closeForm1, modalRef }) {
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
                  <h2 className="text-blue-700 font-semibold mb-3 text-sm">
                    ข้อมูลผู้ป่วย
                  </h2>
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

                {/* ---------------- แบบสอบถาม ---------------- */}
                <section className="border border-gray-200 rounded-2xl p-4 bg-white shadow-sm">
                  <h2 className="text-blue-700 font-semibold mb-3 text-sm">
                    แบบสอบถามประวัติ
                  </h2>
                  <div className="space-y-4">
                    <p>1. ท่านมีโรคประจำตัวดังต่อไปนี้หรือไม่</p>
                    <div className="grid grid-cols-2 gap-3 w-5/6 mx-auto">
                      {[
                        "โรคภูมิแพ้",
                        "โรคหอบหืด",
                        "โรคไตวาย",
                        "โรคเบาหวาน",
                        "โรคหัวใจ",
                        "โรคลมชัก",
                      ].map((label) => (
                        <RadioGroup
                          key={label}
                          label={label}
                          orientation="horizontal"
                        >
                          <Radio value="y">มี</Radio>
                          <Radio value="n">ไม่มี</Radio>
                        </RadioGroup>
                      ))}
                    </div>

                    <RadioGroup
                      classNames={{ label: "text-black" }}
                      label="2. ท่านเคยได้รับการฉีดสารทึบรังสีมาก่อนหรือไม่"
                      orientation="horizontal"
                    >
                      <Radio value="y">เคย</Radio>
                      <Radio value="n">ไม่เคย</Radio>
                      <Radio value="r">จำไม่ได้</Radio>
                    </RadioGroup>

                    <RadioGroup
                      label="3. ถ้าเคยตรวจท่านแพ้สารทึบรังสีหรือไม่"
                      orientation="horizontal"
                    >
                      <Radio value="y">เคย</Radio>
                      <Radio value="n">ไม่เคย</Radio>
                      <Radio value="r">จำไม่ได้</Radio>
                      <Input label="ระบุอาการ" />
                    </RadioGroup>

                    <RadioGroup
                      label="4. ท่านมีประวัติแพ้อาหารทะเลหรือไม่"
                      orientation="horizontal"
                    >
                      <Radio value="y">มี</Radio>
                      <Radio value="n">ไม่มี</Radio>
                      <Input label="ระบุอาการ" />
                    </RadioGroup>

                    <RadioGroup
                      label="5. ท่านมีประวัติการแพ้ยาอื่นๆ หรือไม่"
                      orientation="horizontal"
                    >
                      <Radio value="y">มี</Radio>
                      <Radio value="n">ไม่มี</Radio>
                      <Radio value="r">จำไม่ได้</Radio>
                      <Input label="ระบุอาการ" />
                    </RadioGroup>

                    <div className="flex flex-col gap-2">
                      <span>
                        6. ข้าพเจ้าขอรับรองว่าไม่ได้อยู่ในระหว่างตั้งครรภ์
                      </span>
                      <DatePicker
                        isReadOnly
                        className="max-w-[284px]"
                        label="โดยประจำเดือนสุดท้ายมาวันที่"
                      />
                    </div>
                  </div>
                </section>

                {/* ---------------- ส่วนลงนาม ---------------- */}
                <section className="border border-gray-200 rounded-2xl p-4 bg-white shadow-sm space-y-2">
                  <h2 className="text-blue-700 font-semibold mb-3 text-sm">
                    การยินยอม
                  </h2>
                  <Input label="ข้าพเจ้า" />
                  <Input label="โดยเกี่ยวข้อง" />
                  <Input label="ชื่อ" />
                  <p className="text-sm leading-6">
                    ได้รับทราบคำอธิบายข้างต้น รวมทั้งผลแทรกซ้อนที่อาจเกิดขึ้น...
                  </p>
                  <RadioGroup orientation="horizontal">
                    <Radio value="y">ยินยอมให้ทำการตรวจ</Radio>
                    <Radio value="n">ไม่ยินยอมให้ทำการตรวจ</Radio>
                  </RadioGroup>
                  <span>จึงได้ลงลายมือชื่อไว้เป็นหลักฐาน</span>

                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <div>
                      <span>
                        ลงชื่อ.........................ผู้ป่วย/ตัวแทนผู้ป่วย
                      </span>
                      <span className="block">
                        (.............ชื่อ..............)
                      </span>
                    </div>
                    <div>
                      <span>ลงชื่อ.........................แพทย์</span>
                      <span className="block">
                        (.............ชื่อ..............)
                      </span>
                    </div>
                    <div>
                      <span>ลงชื่อ.........................นักรังสีแพทย์</span>
                      <span className="block">
                        (.............ชื่อ..............)
                      </span>
                    </div>
                    <div>
                      <span>ลงชื่อ.........................พยาบาล</span>
                      <span className="block">
                        (.............ชื่อ..............)
                      </span>
                    </div>
                  </div>
                  <DatePicker
                    isReadOnly
                    className="max-w-[284px]"
                    label="วันที่"
                  />
                </section>

                {/* ---------------- สำหรับเจ้าหน้าที่ ---------------- */}
                <section className="border border-gray-200 rounded-2xl p-4 bg-white shadow-sm space-y-2">
                  <h2 className="text-blue-700 font-semibold mb-3 text-sm">
                    สำหรับเจ้าหน้าที่
                  </h2>
                  <Textarea
                    isClearable
                    className="max-w-xs"
                    label="Description"
                    labelPlacement="outside"
                    placeholder="บันทึก"
                    variant="bordered"
                  />
                  <div>
                    <span>ลงชื่อ........................</span>
                    <span className="block">
                      (.............ชื่อ..............)
                    </span>
                    <span>ตำแหน่ง..............</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <Input label="Cr" />
                    <Input label="eGFR" />
                  </div>
                  <p className="text-xs text-gray-500">
                    (ต้องมี Cr ≤ 1.5 mg%, eGFR ≥ 45)
                  </p>
                  <Input label="Contrast media" />
                  <Input label="ปริมาณ (CC)" />
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
