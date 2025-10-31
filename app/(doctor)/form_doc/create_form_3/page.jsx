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

export default function page({ openForm3, closeForm3, modalRef }) {
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
        isOpen={openForm3}
        onOpenChange={closeForm3}
        classNames={{
          body: "max-h-[calc(85vh-120px)] overflow-y-scroll bg-gray-50 dark:bg-[#1e1e1e]",
        }}
        placement="center"
      >
        <ModalContent ref={modalRef}>
          {(closeForm3) => (
            <>
              <ModalHeader className="text-center text-lg font-semibold text-blue-600">
                ใบรับทราบข้อมูลเเละยินยอมรับการรักษาด้วยการใส่เเร่โรงพยาบาลพระปกเกล้า
              </ModalHeader>

              <ModalBody className="space-y-4 text-gray-700 dark:text-gray-300">
                {/* 🩺 ส่วนข้อมูลผู้ยินยอม */}
                <section className="p-4 bg-white dark:bg-[#27272a] rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-2">
                  <h2 className="text-blue-500 font-semibold mb-2">
                    ข้อมูลผู้ยินยอม
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <DatePicker label="วันที่" />
                    <Input label="ข้าพเจ้า ชื่อ" />
                    <Input label="มีความสัมพันธ์เป็น" />
                    <span className="col-span-2 text-sm">
                      เกี่ยวข้องกับผู้ป่วย
                    </span>
                    <Input label="ชื่อ" />
                    <Input label="เจ็บป่วยด้วยโรคมะเร็ง ปากมดลูก / มดลูก" />
                    <span className="col-span-2 text-sm">
                      จะต้องเข้ารักษาด้วยการใส่เเร่
                    </span>
                  </div>
                </section>

                {/* 💬 ส่วนคำอธิบาย */}
                <section className="p-4 bg-white dark:bg-[#27272a] rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-3 leading-relaxed">
                  <h2 className="text-blue-500 font-semibold mb-2">
                    รายละเอียดการรักษา
                  </h2>
                  <p>
                    ข้าพเจ้าเเละผู้เเทนของข้าพเจ้า
                    เข้าใจถึงวิธีการรักษาด้วยรังสี คือ
                    การใส่อุปกรณ์เข้าทางช่องคลอด
                    เพื่อใส่เเร่รังสีเข้าทางอุปกรณ์สู่ภายในร่างกายผู้ป่วยในท่านอนโดยใช้เวลาในการรักษาทั้งสิ้นประมาณ
                    3 ชั่วโมง
                  </p>
                  <p>
                    ประโยชน์ที่คาดว่าจะได้รับจากการรักษาด้วยรังสี
                    คือเพิ่มโอกาสหายขาดจากโรคมะเร็งดังกล่าว
                  </p>
                  <p>
                    ภาวะเเทรกซ้อนที่อาจเกิดจากการรักษาด้วยรังสี
                    ทั้งที่อาจเกิดระหว่างการฉายรังสีได้เเก่ เลือดออกทางช่องคลอด
                    เบื่ออาหาร ปวดท้อง ปัสสาวะเเสบขัด
                    มีภาวะติดเชื้อในกระเพาะปัสสาวะ อุจจาระปนเลือด
                    ถ่ายเหลวท้องเสียเป็นต้น
                  </p>
                  <p>
                    ข้าพเจ้าเเละผู้เทนของข้าพเจ้าเข้าใจถึงข้อมูลอันเป็นประโยชน์ดังกล่าว
                    เเละซักถามข้อมูลอันเป็นประโยชน์ต่อการตัดสินใจได้ครบถ่วนเเล้ว
                    จึงตัดสินในเข้ารับการรักษาดังกล่าว เเละ จะไม่ฟ้องร้อง
                    เรียกร้องหรือเอาความผิดกับโรงพยาบาล
                    รวมทั้งเเพทย์เเละเจ้าหน้าที่ผู้เกี่ยวข้อง
                    ในผลอันไม่พึงประสงค์ที่อาจเกิดขึ้นจากการรักษาดังกล่าว
                  </p>
                </section>

                {/* ✍️ ส่วนลงชื่อ */}
                <section className="p-4 bg-white dark:bg-[#27272a] rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-2">
                  <h2 className="text-blue-500 font-semibold mb-2">
                    การลงชื่อและพยาน
                  </h2>
                  <div className="grid grid-cols-1 gap-2 text-sm">
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

              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={closeForm3}
                  className="rounded-lg"
                >
                  ปิด
                </Button>
                <Button
                  color="primary"
                  onPress={closeForm3}
                  className="bg-blue-600 text-white rounded-lg"
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
