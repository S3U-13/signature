"use client";
import { Button } from "@heroui/button";
import { DatePicker } from "@heroui/date-picker";
import { Input } from "@heroui/input";
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

export default function page({ openForm2, closeForm2, modalRef }) {
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
        isOpen={openForm2}
        onOpenChange={closeForm2}
        classNames={{
          base: "bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700",
          body: "max-h-[calc(85vh-120px)] overflow-y-auto px-6 py-8 space-y-6 text-gray-700 dark:text-gray-300",
        }}
        placement="center"
      >
        <ModalContent ref={modalRef}>
          {(closeForm2) => (
            <>
              {/* Header */}
              <ModalHeader className="flex flex-col items-center text-center border-b border-gray-200 dark:border-gray-700 pb-3">
                <h2 className="text-2xl font-semibold text-sky-700 dark:text-sky-400">
                  ใบรับทราบข้อมูลเเละยินยอมรับการรักษาด้วยการฉายรังสี
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  โรงพยาบาลพระปกเกล้า
                </p>
              </ModalHeader>

              {/* Body */}
              <ModalBody className="space-y-6">
                {/* SECTION 1: ข้อมูลทั่วไป */}
                <section className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm p-5 space-y-4">
                  <h3 className="text-sky-700 font-semibold text-lg border-b border-gray-200 pb-1">
                    ข้อมูลทั่วไปของผู้ป่วย
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <DatePicker label="วันที่" />
                    <Input label="ข้าพเจ้า ชื่อ" />
                    <Input label="มีความสัมพันธ์เป็น" />
                    <div className="col-span-2 text-sm text-gray-600 dark:text-gray-400">
                      เกี่ยวข้องกับผู้ป่วย
                    </div>
                    <Input label="ชื่อ" />
                    <Input label="เจ็บป่วยด้วยโรค" />
                    <div className="col-span-2 text-sm text-gray-600 dark:text-gray-400">
                      จะต้องเข้ารักษาด้วยการฉายรังสี
                    </div>
                  </div>
                </section>

                {/* SECTION 2: คำอธิบาย */}
                <section className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm p-5 space-y-3 leading-relaxed text-justify">
                  <h3 className="text-sky-700 font-semibold text-lg border-b border-gray-200 pb-1">
                    คำอธิบายเกี่ยวกับการรักษา
                  </h3>

                  <p>
                    ข้าพเจ้าเเละผู้เเทนของข้าพเจ้า
                    เข้าใจถึงวิธีการรักษาด้วยรังสี คือ
                    การฉายรังสีด้วยเครื่องฉายภาพนอกร่างกายผ่านตัวผู้ป่วยในท่านอนบนเตียงเฉพาะ
                    โดยต้องสามารถนอนได้อย่างสงบเป็นเวลาอย่างน้อยประมาณ 15 นาที
                  </p>
                  <p>
                    ข้าพเจ้าได้ทราบถึงประโยชน์ที่คาดว่าจะได้รับจากการรักษาด้วยรังสี
                    เเละ ภาวะเเทรกซ้อนที่อาจเกิดจากการรักษาด้วยรังสี
                    ทั้งที่อาจเกิดระหว่างการฉายรังสี
                  </p>
                  <p>
                    ข้าพเจ้าเเละผู้เทนของข้าพเจ้าเข้าใจถึงข้อมูลอันเป็นประโยชน์ดังกล่าว
                    เเละซักถามข้อมูลอันเป็นประโยชน์ต่อการตัดสินใจได้ครบถ่วนเเล้ว
                  </p>
                </section>

               

                {/* SECTION 4: ลายเซ็นและพยาน */}
                <section className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm p-5 space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <h3 className="text-sky-700 font-semibold text-lg border-b border-gray-200 pb-1">
                    ลายเซ็นและพยาน
                  </h3>

                  <div className="space-y-1">
                    <div className="grid grid-cols-1 gap-y-3 p-2  rounded-lg border border-divider">
                      <span>ผู้ให้ข้อมูล แพทย์ / พยาบาล</span>
                      <span>ลงชื่อ.........................</span>
                      <span className="block">
                        (.............ชื่อ..............)
                      </span>
                    </div>
                  </div>
                </section>
              </ModalBody>

              {/* Footer */}
              <ModalFooter className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-b-2xl flex justify-end gap-3 py-4">
                <Button
                  color="danger"
                  variant="light"
                  radius="sm"
                  className="font-medium"
                  onPress={closeForm2}
                >
                  ปิด
                </Button>
                <Button
                  color="primary"
                  radius="sm"
                  className="font-medium"
                  onPress={closeForm2}
                >
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
