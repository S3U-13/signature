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
        classNames={{ body: "max-h-[calc(85vh-120px)] overflow-y-scroll" }}
      >
        <ModalContent ref={modalRef}>
          {(closeForm1) => (
            <>
              <ModalHeader className="flex flex-col text-md gap-1">
                หนังสืออธิบายเเละยินยอมให้ทำการจำลองการฉายรังสีโดยใช้รังสีเอกซเรย์เเละสารทึบรังสี
              </ModalHeader>
              <ModalBody>
                <h1>หน่วยงานรังสีรักษา โรงพยาบาลพระปกเกล้า</h1>
                <div>
                  <Input label="ชื่อ-สกุล ผู้ป่วย" />
                  <Input label="อายุ" />
                  <Input label="HN" />
                  <Input label="HN" />
                  <DatePicker
                    isReadOnly
                    className="max-w-[284px]"
                    label="Birth date"
                  />
                  <Input label="น้ำหนัก" />
                </div>
                <div>
                  <p>
                    ท่านกำลังจะเข้ารับการตรวจทางรังสีโดยใช้รังสีเอกซเรย์
                    หรือการฉีดสารทึบรังสีร่วมกับการเอกซเรย์
                    ซึ่งในการตรวจนี้เเพทย์/เจ้าหน้าที่จะใช้สารทึบรังสีฉีดผ่านทางหลอดเลือดดำ
                    หลังจากนั้นจึงเอกซเรย์ ในการตรวจดังกล่าว
                    อาจมีโอกาสเกิดการเเพ้ต่อสารทึบรังสีได้ดังนี้
                  </p>
                  <span>
                    1.เเพ้เล็กน้อย ได้เเก่ คลื่นไส้/อาเจียน จาม ผื่นคัน มีไข้
                  </span>
                  <span>
                    2.เเพ้ปานกลางถึงมาก ได้เเก่ หายใจขัด ความดันโลหิตต่ำ
                    หัวใจเต้นช้า หน้าบวม ปากบวม กล่องเสียงบวม ไตวาย ชัก
                    หรืออาจเสียชีวิตได้
                    อย่างไรก็ตามทางหน่วยงานรังสีรักษาได้ตามมาตรการในการป้องกันเเละรักษาอาการเเพ้ที่เกิดจากการตรวจดังกล่าว
                    ทั้งนี้เพื่อป้องกันอันตรายที่อาจเกิดขึ้น
                    กรุณาตอบคำถามต่อไปนี้
                    เพื่อตรวจหาความเสี่ยงต่อการเอกซเรย์หรือฉีดสารทึบรังสี
                  </span>
                </div>
                <div>
                  <span>1.ท่านมีโรคประจำตัวดังต่อไปนี้หรือไม่</span>
                  <div className="grid grid-cols-2 gap-2">
                    <RadioGroup label="โรคภูมิเเพ้" orientation="horizontal">
                      <Radio value="y">มี</Radio>
                      <Radio value="n">ไม่มี</Radio>
                    </RadioGroup>
                    <RadioGroup label="โรคหอบหืด" orientation="horizontal">
                      <Radio value="y">มี</Radio>
                      <Radio value="n">ไม่มี</Radio>
                    </RadioGroup>
                    <RadioGroup label="โรคไตวาย" orientation="horizontal">
                      <Radio value="y">มี</Radio>
                      <Radio value="n">ไม่มี</Radio>
                    </RadioGroup>
                    <RadioGroup label="โรคเบาหวาน" orientation="horizontal">
                      <Radio value="y">มี</Radio>
                      <Radio value="n">ไม่มี</Radio>
                    </RadioGroup>
                    <RadioGroup label="โรคหัวใจ" orientation="horizontal">
                      <Radio value="y">มี</Radio>
                      <Radio value="n">ไม่มี</Radio>
                    </RadioGroup>
                    <RadioGroup label="โรคลมชัก" orientation="horizontal">
                      <Radio value="y">มี</Radio>
                      <Radio value="n">ไม่มี</Radio>
                    </RadioGroup>
                  </div>
                  <RadioGroup
                    classNames={{ label: "text-black" }}
                    label="2.ท่านเคยได้รับการฉีดสารทึบรังสีมาก่อนหรือไม่"
                    orientation="horizontal"
                  >
                    <Radio value="y">เคย</Radio>
                    <Radio value="n">ไม่เคย</Radio>
                    <Radio value="r">จำไม่ได้</Radio>
                  </RadioGroup>
                  <RadioGroup
                    classNames={{ label: "text-black" }}
                    label="3.ถ้าเคยตรวจท่านเเพ้สารทึบรังสีหรือไม่"
                    orientation="horizontal"
                  >
                    <Radio value="y">เคย</Radio>
                    <Radio value="n">ไม่เคย</Radio>
                    <Radio value="r">จำไม่ได้</Radio>
                    <Input label="ระบุอาการ" />
                  </RadioGroup>
                  <RadioGroup
                    classNames={{ label: "text-black" }}
                    label="4.ท่านมีประวัติเเพ้อาหารทะเลหรือไม่"
                    orientation="horizontal"
                  >
                    <Radio value="y">มี</Radio>
                    <Radio value="n">ไม่มี</Radio>
                    <Input label="ระบุอาการ" />
                  </RadioGroup>
                  <RadioGroup
                    classNames={{ label: "text-black" }}
                    label="5.ท่านมีประวัติการเเพ้ยาอื่นๆอีกหรีอไม่"
                    orientation="horizontal"
                  >
                    <Radio value="y">มี</Radio>
                    <Radio value="n">ไม่มี</Radio>
                    <Radio value="r">จำไม่ได้</Radio>
                    <Input label="ระบุอาการ" />
                  </RadioGroup>
                  <span>
                    6.ข้าพเจ้าขอรับรองว่าไม่ได้อยู่ในระหว่างตั้งครรภ์
                    ขณะได้รับการตรวจด้วยวิธีดังกล่าว
                  </span>
                  <DatePicker
                    isReadOnly
                    className="max-w-[284px]"
                    label="โดยประจำเดินสุดท้ายมาวันที่"
                  />
                </div>
                <div>
                  <Input label="ข้าพเจ้า" />
                  <Input label="โดยเกี่ยวข้อง" />
                  <Input label="ชื่อ" />
                  <span>
                    ได้รับทราบคำอธิบายข้องต้น
                    รวมทั้งผลเเทรกซ้อนที่อาจเกิดขึ้นจะเกิดขึ้นจากการตรวจดังกล่าว
                    โดยข้าพเจ้า
                  </span>
                  <RadioGroup label="" orientation="horizontal">
                    <Radio value="y">ยินยอมให้ทำการตรวจ</Radio>
                    <Radio value="n">ไม่ยินยอมให้ทำการตรวจ</Radio>
                  </RadioGroup>
                  <span>จีงได้ลงลายมือชื่อไว้เป็นหลักฐาน</span>
                  <div className="gird grid-cols-1 gap-2">
                    <span>
                      ลงชื่อ.........................ผู้ป่วย/ตัวเเทนผู้ป่วย
                      ปุ่มเพิ่มลานเซ็น
                    </span>
                    <span>(.............ชื่อ..............)</span>
                    <span>
                      ลงชื่อ.........................เเพทย์ เรียกมาจาก db
                    </span>
                    <span>(.............ชื่อ..............)</span>
                    <span>
                      ลงชื่อ.........................นักรังสีเเพทย์
                      ปุ่มเพิ่มลานเซ็น
                    </span>
                    <span>(.............ชื่อ..............)</span>
                    <span>
                      ลงชื่อ.........................พยาบาล ปุ่มเพิ่มลานเซ็น
                    </span>
                    <span>(.............ชื่อ..............)</span>
                    <span>
                      ลงชื่อ.........................พยาน ปุ่มเพิ่มลานเซ็น
                    </span>
                    <span>(.............ชื่อ..............)</span>
                    <DatePicker
                      isReadOnly
                      className="max-w-[284px]"
                      label="วันที่"
                    />
                  </div>
                </div>
                <div>
                  <span>สำหรับเจ้าหน้าที่</span>
                  <Textarea
                    isClearable
                    className="max-w-xs"
                    label="Description"
                    labelPlacement="outside"
                    placeholder="บันทึก"
                    variant="bordered"
                    // eslint-disable-next-line no-console
                    onClear={() => console.log("textarea cleared")}
                  />
                  <span>ลงชื่อ........................ ปุ่มเพิ่มลานเซ็น</span>
                  <span>(.............ชื่อ..............)</span>
                  <span>ตำเเหน่ง..............</span>
                </div>
                <div>
                  <span>สำหรับเจ้าหน้าที่</span>

                  <Input label="Cr" />
                  <Input label="eGFR" />
                  <span>(ต้องมี Cr ≤ 1.5 mg%, eGFR ≥ 45)</span>
                  <Input label="Contrast media" />
                  <Input label="ปริมาณ CC" />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={closeForm1}>
                  Close
                </Button>
                <Button color="primary" onPress={closeForm1}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
