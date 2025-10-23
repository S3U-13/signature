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

export default function page({ openForm2, closeForm2, modalRef }) {
  return (
    <div>
      <Modal
        size="3xl"
        isOpen={openForm2}
        onOpenChange={closeForm2}
        classNames={{ body: "max-h-[calc(85vh-120px)] overflow-y-scroll" }}
      >
        <ModalContent ref={modalRef}>
          {(closeForm2) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                ใบรับทราบข้อมูลเเละยินยอมรับดารรักษาด้วยการฉายรังสี
                โรงพยาบาลพระปกเกล้า
              </ModalHeader>
              <ModalBody>
                <div>
                  <DatePicker label="วันที่" />
                  <Input label="ข้าพเจ้า ชื่อ" />
                  <Input label="มีความสัมพันธ์เป็น" />
                  <span>เกี่ยวข้องกับผู้ป่วย</span>
                  <Input label="ชื่อ" />
                  <Input label="เจ็บป่วยด้วยโรค" />
                  <span>จะต้องเข้ารักษาด้วยการฉายรังสี</span>
                </div>
                <p>
                  ข้าพเจ้าเเละผู้เเทนของข้าพเจ้า เข้าใจถึงวิธีการรักษาด้วยรังสี
                  คือ
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
                <RadioGroup label="" orientation="horizontal">
                  <Radio value="y">
                    ตัดสินใจเข้ารับการรักษาดังกล่าว เเละ จะไม่ฟ้องร้อง
                    เรียกร้องหรือเอาความผิดกับโรงพยาบาล
                    รวมทั้งเเพทย์เเละเจ้าหน้าที่ผู้เกี่ยวข้อง
                    ในผลอันไม่พึงประสงค์ที่อาจเกิดขึ้นจากการรักษาดังกล่าว
                  </Radio>
                  <Radio value="n">ปฏิเสธการรักษา</Radio>
                </RadioGroup>
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
                <Button color="danger" variant="light" onPress={closeForm2}>
                  Close
                </Button>
                <Button color="primary" onPress={closeForm2}>
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
