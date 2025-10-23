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

export default function page({ openForm3, closeForm3, modalRef }) {
  return (
    <div>
      <Modal
        size="3xl"
        isOpen={openForm3}
        onOpenChange={closeForm3}
        classNames={{ body: "max-h-[calc(85vh-120px)] overflow-y-scroll" }}
      >
        <ModalContent ref={modalRef}>
          {(closeForm3) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                ใบรับทราบข้อมูลเเละยินยอมรับการรักษาด้วยการใส่เเร่โรงพยาบาลพระปกเกล้า
              </ModalHeader>
              <ModalBody>
                <div>
                  <DatePicker label="วันที่" />
                  <Input label="ข้าพเจ้า ชื่อ" />
                  <Input label="มีความสัมพันธ์เป็น" />
                  <span>เกี่ยวข้องกับผู้ป่วย</span>
                  <Input label="ชื่อ" />
                  <Input label="เจ็บป่วยด้วยโรคมะเร็ง ปากมดลูก / มดลูก" />
                  <span>จะต้องเข้ารักษาด้วยการใส่เเร่</span>
                </div>
                <p>
                  ข้าพเจ้าเเละผู้เเทนของข้าพเจ้า เข้าใจถึงวิธีการรักษาด้วยรังสี
                  คือ การใส่อุปกรณ์เข้าทางช่องคลอด
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

                <div className="gird grid-cols-1 gap-2">
                  <span>
                    ผู้ให้ข้อมูล..........................ตำเเหน่ง เเพทย์ /
                    พยาบาล ปุ่มเพิ่มลานเซ็น
                  </span>
                  <span>(.............ชื่อ..............)</span>
                  <span>
                    ผู้ให้ข้อมูล..........................ผู้ป่วย หรือ
                    ผู้เเทนโดยชอบธรรมด้วยกฏหมาย
                  </span>
                  <span>(.............ชื่อ..............)</span>
                  <span>
                    พยานฝ่ายผู้ป่วย......................... ปุ่มเพิ่มลานเซ็น
                  </span>
                  <RadioGroup label="" orientation="horizontal">
                    <Radio value="y">
                      ไม่มีพยานฝ่ายผู้ป่วย (เนื่องจากผู้ป่วยมาคนเดียว)
                    </Radio>
                  </RadioGroup>
                  <span>(.............ชื่อ..............)</span>
                  <span>พยานฝ่ายเจ้าหน้าที่.........................</span>
                  <span>(.............ชื่อ..............)ตำเเหน่ง</span>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={closeForm3}>
                  Close
                </Button>
                <Button color="primary" onPress={closeForm3}>
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
