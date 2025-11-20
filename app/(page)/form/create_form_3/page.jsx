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
import Sign01 from "./signature01/page";
import Sign02 from "./signature02/page";
import Sign03 from "./signature03/page";
import { Edit3 } from "@deemlol/next-icons";
import { Checkbox, CheckboxGroup } from "@heroui/checkbox";

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
    choice,
  } = useHook();
  return (
    <div>
      <Modal
        size="3xl"
        isOpen={openForm3}
        onOpenChange={closeForm3}
        classNames={{
          body: "max-h-[calc(85vh-120px)] overflow-y-scroll py-6",
          header: "border-b border-divider py-6",
          footer: "border-t border-divider",
        }}
        placement="center"
      >
        <ModalContent ref={modalRef}>
          {(closeForm3) => (
            <>
              <ModalHeader className="flex flex-col items-center gap-1 text-center text-lg font-semibold text-gray-800">
                <h1>ใบรับทราบข้อมูลเเละยินยอมรับการรักษาด้วยการใส่เเร่</h1>
                <h1>โรงพยาบาลพระปกเกล้า</h1>
              </ModalHeader>

              <ModalBody className="space-y-4 text-gray-700 dark:text-gray-300">
                <section className="p-4 bg-white dark:bg-[#27272a] rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-4">
                  <h2 className="text-gray-700 font-semibold text-base flex items-center gap-2 mb-4">
                    <span className="w-1 h-5 bg-violet-500 rounded-full"></span>
                    ข้อมูลผู้ยินยอม
                  </h2>
                  <div className="flex justify-end ">
                    <DatePicker
                      classNames={{ label: "text-gray-600" }}
                      className="w-2/7"
                      label="วันที่"
                      size="md"
                      radius="sm"
                      labelPlacement="outside-left"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-6 gap-2 gap-y-3 border-t border-gray-200 pt-4">
                    <Input
                      classNames={{ label: "text-gray-600" }}
                      className="col-span-3"
                      label="ข้าพเจ้า ชื่อ"
                      size="md"
                      radius="sm"
                      labelPlacement="outside-left"
                    />
                    <div className="flex items-center gap-2 col-span-3">
                      <Input
                        classNames={{ label: "text-gray-600" }}
                        label="มีความสัมพันธ์เป็น"
                        size="md"
                        radius="sm"
                        className="w-[210px]"
                        labelPlacement="outside-left"
                      />
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        เกี่ยวข้องกับผู้ป่วย
                      </p>
                    </div>

                    <Input
                      classNames={{ label: "text-gray-600" }}
                      className="col-span-2"
                      label="ชื่อ"
                      size="md"
                      radius="sm"
                      labelPlacement="outside-left"
                    />
                    <div className="col-span-4 flex items-center gap-2">
                      <Input
                        classNames={{ label: "text-gray-600" }}
                        className=""
                        label="เจ็บป่วยด้วยโรคมะเร็ง ปากมดลูก/มดลูก/"
                        size="md"
                        radius="sm"
                        labelPlacement="outside-left"
                      />
                    </div>
                    <h1 className="text-sm text-gray-600 dark:text-gray-400 col-span-6">
                      จะต้องเข้าการรักษาด้วยการใส่น้ำเเร่
                    </h1>
                  </div>
                </section>

                {/* 💬 ส่วนคำอธิบาย */}
                <section className="p-4 bg-white dark:bg-[#27272a] rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-3 leading-relaxed">
                  <h2 className="text-gray-700 font-semibold text-base flex items-center gap-2 mb-4">
                    <span className="w-1 h-5 bg-violet-500 rounded-full"></span>
                    รายละเอียดการรักษา
                  </h2>
                  <div className="space-y-1 text-sm leading-6">
                    <p className="indent-8">
                      ข้าพเจ้าเเละผู้เเทนของข้าพเจ้า
                      เข้าใจถึงวิธีการรักษาด้วยรังสี คือ
                      การใส่อุปกรณ์เข้าทางช่องคลอด
                      เพื่อใส่เเร่รังสีเข้าทางอุปกรณ์สู่ภายในร่างกายผู้ป่วยในท่านอนโดยใช้เวลาในการรักษาทั้งสิ้นประมาณ
                      3 ชั่วโมง
                    </p>
                    <p className="indent-8">
                      ประโยชน์ที่คาดว่าจะได้รับจากการรักษาด้วยรังสี
                      คือเพิ่มโอกาสหายขาดจากโรคมะเร็งดังกล่าว
                    </p>
                    <p className="indent-8">
                      ภาวะเเทรกซ้อนที่อาจเกิดจากการรักษาด้วยรังสี
                      ทั้งที่อาจเกิดระหว่างการฉายรังสีได้เเก่
                      เลือดออกทางช่องคลอด เบื่ออาหาร ปวดท้อง ปัสสาวะเเสบขัด
                      มีภาวะติดเชื้อในกระเพาะปัสสาวะ อุจจาระปนเลือด
                      ถ่ายเหลวท้องเสียเป็นต้น
                    </p>
                    <p className="indent-8">
                      ข้าพเจ้าเเละผู้เทนของข้าพเจ้าเข้าใจถึงข้อมูลอันเป็นประโยชน์ดังกล่าว
                      เเละซักถามข้อมูลอันเป็นประโยชน์ต่อการตัดสินใจได้ครบถ่วนเเล้ว
                      จึงตัดสินในเข้ารับการรักษาดังกล่าว เเละ จะไม่ฟ้องร้อง
                      เรียกร้องหรือเอาความผิดกับโรงพยาบาล
                      รวมทั้งเเพทย์เเละเจ้าหน้าที่ผู้เกี่ยวข้อง
                      ในผลอันไม่พึงประสงค์ที่อาจเกิดขึ้นจากการรักษาดังกล่าว
                    </p>
                  </div>
                </section>

                {/* SECTION 4: ลายเซ็นและพยาน */}
                <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md p-6 space-y-5 text-sm text-gray-700 dark:text-gray-300">
                  <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-800 dark:text-gray-100">
                    <span className="w-1 h-6 bg-violet-500 rounded-full"></span>
                    การลงชื่อและพยาน
                  </h2>

                  <div className="space-y-4">
                    {/* ผู้ให้ข้อมูล */}
                    <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700  dark:bg-gray-800/50 space-y-2">
                      <h3 className="font-medium text-gray-800 dark:text-gray-100">
                        ผู้ให้ข้อมูล แพทย์ / พยาบาล
                      </h3>
                      <p>
                        ลงชื่อ....................................................
                      </p>
                      <p>(..............................................)</p>
                    </div>

                    {/* ผู้รับข้อมูล */}
                    <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700  dark:bg-gray-800/50 space-y-3">
                      <h3 className="font-medium text-gray-800 dark:text-gray-100">
                        ผู้ให้คำยินยอม
                      </h3>
                      <div className="flex flex-wrap gap-3 items-center">
                        <span className="flex items-center gap-2">
                          ลงชื่อ{" "}
                          {!signature ? (
                            <span className="italic text-gray-400">
                              .............................
                            </span>
                          ) : (
                            <img
                              src={signature}
                              alt="signature"
                              className="border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm w-[200px] h-[55px] object-contain bg-white"
                            />
                          )}
                        </span>
                        <Button
                          size="sm"
                          color="secondary"
                          variant="flat"
                          isIconOnly
                          onPress={() => setOpenSign01(true)}
                        >
                          <Edit3 className="size-5" />
                        </Button>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-1 max-w-lg items-center">
                        <Input
                          size="md"
                          radius="sm"
                          labelPlacement="outside-left"
                          label="ชื่อ"
                          className="max-w-sm"
                          type="text"
                        />
                        <h1>ผู้ป่วย หรือ ผู้เเทนโดยชอบธรรมด้วยกฏหมาย</h1>
                      </div>
                    </div>

                    {/* พยานฝ่ายผู้ป่วย */}
                    <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700  dark:bg-gray-800/50 space-y-3">
                      <h3 className="font-medium text-gray-800 dark:text-gray-100">
                        พยานฝ่ายผู้ป่วย
                      </h3>

                      <div className="flex flex-wrap gap-3 items-center">
                        <span className="flex items-center gap-2">
                          ลงชื่อ{" "}
                          {!signature2 ? (
                            <span className="italic text-gray-400">
                              .............................
                            </span>
                          ) : (
                            <img
                              src={signature2}
                              alt="signature2"
                              className="border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm w-[200px] h-[55px] object-contain bg-white"
                            />
                          )}
                        </span>
                        <Button
                          size="sm"
                          color="secondary"
                          variant="flat"
                          isIconOnly
                          onPress={() => setOpenSign02(true)}
                        >
                          <Edit3 className="size-5" />
                        </Button>
                      </div>

                      <CheckboxGroup orientation="horizontal">
                        {choice
                          .filter((ch) => ch.choice_type_id === "5")
                          .map((c) => (
                            <Checkbox size="sm" key={c.id} value={c.id}>
                              <p className="text-sm">{c.choice_name}</p>
                            </Checkbox>
                          ))}
                      </CheckboxGroup>

                      <Input
                        size="md"
                        radius="sm"
                        labelPlacement="outside-left"
                        label="ชื่อ"
                        className="max-w-sm"
                        type="text"
                      />
                    </div>

                    {/* พยานฝ่ายเจ้าหน้าที่ */}
                    <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700  dark:bg-gray-800/50 space-y-3">
                      <h3 className="font-medium text-gray-800 dark:text-gray-100">
                        พยานฝ่ายเจ้าหน้าที่
                      </h3>

                      <div className="flex flex-wrap gap-3 items-center">
                        <span className="flex items-center gap-2">
                          ลงชื่อ{" "}
                          {!signature3 ? (
                            <span className="italic text-gray-400">
                              .............................
                            </span>
                          ) : (
                            <img
                              src={signature3}
                              alt="signature3"
                              className="border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm w-[200px] h-[55px] object-contain bg-white"
                            />
                          )}
                        </span>
                        <Button
                          size="sm"
                          color="secondary"
                          variant="flat"
                          isIconOnly
                          onPress={() => setOpenSign03(true)}
                        >
                          <Edit3 className="size-5" />
                        </Button>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-2 max-w-lg">
                        <Input
                          size="md"
                          radius="sm"
                          labelPlacement="outside-left"
                          label="ชื่อ"
                          type="text"
                        />
                        <Input
                          size="md"
                          radius="sm"
                          labelPlacement="outside-left"
                          label="ตำแหน่ง"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                <Sign01
                  modalRefSign={modalRefSign}
                  isOpen={openSign01}
                  onClose={() => {
                    setOpenSign01(false);
                  }}
                  onSave={handleSaveSignature}
                />
                <Sign02
                  modalRefSign={modalRefSign}
                  isOpen={openSign02}
                  onClose={() => {
                    setOpenSign02(false);
                  }}
                  onSave={handleSaveSignature2}
                />
                <Sign03
                  modalRefSign={modalRefSign}
                  isOpen={openSign03}
                  onClose={() => {
                    setOpenSign03(false);
                  }}
                  onSave={handleSaveSignature3}
                />
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
