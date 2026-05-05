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

import React, { useEffect, useState } from "react";
import useHook from "./hook/useHook";
import useConfirmSignature from "./hook/confirmSignatureHook";
import { Edit3, Info, Search } from "@deemlol/next-icons";
import Sign01 from "./signature01/page";
import { Select, SelectItem } from "@heroui/select";
import { parseDate } from "@internationalized/date";
import ModalApprove from "../../apporve_modal/modalApprove";

export default function BrachytherapyCreateModal({
  openForm3,
  closeForm3,
  modalRef,
  selectForm,
}) {
  const {
    hnInput,
    setHnInput,
    handleSearchHn,
    form,
    handleSubmit,
    isSubmitting,
    modalRefSign,
    openSign01,
    setOpenSign01,
    handleSaveSignature,
    signature,
    staff,
    doctor,
    selectDoctor,
    user,
    setIsSign,
  } = useHook({ closeForm3, selectForm });

  const {
    handleConfirmSignature,
    setField,
    signatureData,
    setSignatureData,
    loading: confirmLoading,
  } = useConfirmSignature();

  const [doctorSign, setDoctorSign] = useState(null);

  useEffect(() => {
    if (signatureData && signatureData.type) {
      if (signatureData.type === "doctor") {
        setDoctorSign(signatureData.signature || null);
        setIsSign(true);
      }
    } else if (signatureData) {
      setDoctorSign(null);
      setIsSign(false);
    }
  }, [signatureData]);

  useEffect(() => {
    if (!openForm3 && setSignatureData) {
      setSignatureData(null);
    }
  }, [openForm3, setSignatureData]);

  const [confirmSignModal, setConfirmSignModal] = useState({
    isOpen: false,
    role: null,
  });

  const handleApproveSignature = async (confirmValue) => {
    const success = await handleConfirmSignature(confirmValue);
    if (success) {
      setConfirmSignModal({ isOpen: false, role: null });
      // if (typeof fetchData === "function") {
      //   fetchData();
      // }
    }
  };

  const getFieldNameByRole = (role) => {
    const map = {
      staff: "staff_sign_id",
      nurse: "nurse_sign_id",
      doctor: "doctor_sign_id",
    };
    return map[role] || "";
  };

  useEffect(() => {
    if (signatureData && user?.role) {
      const fieldName = getFieldNameByRole(user.role);

      if (fieldName) {
        form.setFieldValue(fieldName, signatureData.id);
      }
    }
  }, [signatureData, user?.role]);

  const fieldName = getFieldNameByRole(user?.role);

  const isApprove = selectDoctor === user?.doctorid ? true : false;
  return (
    <div>
      <ModalApprove
        isOpen={confirmSignModal.isOpen}
        onClose={() => setConfirmSignModal({ isOpen: false, role: null })}
        handleApproveSignature={handleApproveSignature}
        loading={confirmLoading}
      />
      <Modal
        size="5xl"
        isOpen={openForm3}
        onOpenChange={closeForm3}
        classNames={{
          body: "max-h-[calc(80vh-145px)] overflow-y-scroll py-6 bg-[#f1f1f1] dark:bg-[#1f1e1e]",
          header: "border-b border-divider py-6 bg-[#e6e6e6] dark:bg-[#181818]",
          footer: "border-t border-divider bg-[#e6e6e6] dark:bg-[#181818]",
          base: "dark:border dark:border-divider",
        }}
        placement="center"
        backdrop="blur"
      >
        <ModalContent ref={modalRef}>
          {(closeForm3) => (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
              }}
            >
              <ModalHeader className="flex flex-col items-center gap-1 text-center text-lg font-semibold text-gray-800 dark:text-white">
                <h1>ใบรับทราบข้อมูลเเละยินยอมรับการรักษาด้วยการใส่เเร่</h1>
                <h1>โรงพยาบาลพระปกเกล้า</h1>
              </ModalHeader>

              <ModalBody className="space-y-4 text-gray-700 dark:text-gray-300">
                <Sign01
                  modalRefSign={modalRefSign}
                  isOpen={openSign01}
                  onClose={() => {
                    setOpenSign01(false);
                  }}
                  onSave={handleSaveSignature}
                />
                {/* 🩺 ส่วนข้อมูลผู้ยินยอม */}

                <section className="light:border light:border-gray-200 rounded-2xl p-6 bg-white shadow-sm dark:bg-[#181818] space-y-4">
                  <div className="flex justify-between items-center">
                    <h2 className="text-gray-700 font-semibold text-base flex items-center gap-2 mb-4 dark:text-white">
                      <span className="w-1 h-5 bg-neutral-600 rounded-full"></span>
                      ข้อมูลผู้ยินยอม
                    </h2>
                  </div>
                  <div className="w-1/4">
                    <form.Field name="form_type_id">
                      {(field) => (
                        <Input
                          size="sm"
                          radius="sm"
                          label="FORM ID :"
                          value={field.state.value ?? ""}
                          onChange={(e) => field.handleChange(e.target.value)}
                          type="hidden"
                        />
                      )}
                    </form.Field>
                  </div>
                  <form.Field name="hn">
                    {(field) => (
                      <Input
                        size="sm"
                        radius="sm"
                        className="col-span-2"
                        label="hn"
                        type="hidden"
                        value={field.state.value ?? ""}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    )}
                  </form.Field>

                  <div className="flex justify-between items-center  ">
                    <form.Field name="date_form">
                      {(field) => (
                        <DatePicker
                          className="w-2/7"
                          label="วันที่"
                          size="sm"
                          radius="sm"
                          value={
                            field.state.value
                              ? parseDate(field.state.value.split("T")[0])
                              : null
                          }
                          onChange={(value) => {
                            if (!value) return field.handleChange(null);

                            const now = new Date();
                            const time = now.toTimeString().slice(0, 8); // HH:mm:ss

                            const dateTime = `${value.toString()}T${time}`;

                            field.handleChange(dateTime);
                          }}
                        />
                      )}
                    </form.Field>
                    <div className="flex items-center gap-2 sm:max-w-sx">
                      <Input
                        size="sm"
                        radius="sm"
                        label="ค้นหา"
                        value={hnInput}
                        onChange={(e) => setHnInput(e.target.value)}
                        placeholder="กรอก HN ...."
                        variant="flat"
                        className=""
                      />
                      <Button
                        size="sm"
                        isIconOnly
                        onPress={handleSearchHn}
                        className="bg-neutral-900 text-white dark:bg-neutral-800 dark:hover:bg-neutral-700"
                      >
                        <Search size={18} />
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-6 gap-2 gap-y-3 border-t border-gray-200 dark:border-divider pt-4">
                    <Input
                      className="col-span-3"
                      label="ข้าพเจ้า ชื่อ"
                      size="sm"
                      radius="sm"
                    />
                    <div className="flex items-center gap-2 col-span-3">
                      <Input
                        label="มีความสัมพันธ์เป็น"
                        size="sm"
                        radius="sm"
                        className="max-w-xs"
                      />
                      <p className="text-sm text-gray-600 dark:text-default-400">
                        เกี่ยวข้องกับผู้ป่วย
                      </p>
                    </div>

                    <form.Field name="pat_name">
                      {(field) => (
                        <Input
                          className="col-span-2"
                          label="ชื่อ"
                          size="sm"
                          radius="sm"
                          value={field.state.value ?? ""}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                      )}
                    </form.Field>
                    <div className="col-span-4 flex items-center gap-2">
                      <Input
                        className="max-w-xs"
                        label="เจ็บป่วยด้วยโรคมะเร็ง ปากมดลูก/มดลูก/"
                        size="sm"
                        radius="sm"
                      />
                      <h1 className="text-sm text-gray-600 dark:text-default-400">
                        จะต้องเข้าการรักษาด้วยการใส่น้ำเเร่
                      </h1>
                    </div>
                  </div>
                </section>

                {/* 💬 ส่วนคำอธิบาย */}
                <section className="light:border light:border-gray-200 rounded-2xl p-6 bg-white shadow-sm dark:bg-[#181818] space-y-4">
                  <h2 className="text-gray-700 font-semibold text-base flex items-center gap-2 mb-4 dark:text-white">
                    <span className="w-1 h-5 bg-neutral-600 rounded-full"></span>
                    รายละเอียดการรักษา
                  </h2>
                  <div className="space-y-1 text-sm leading-6 text-gray-600 dark:text-white">
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

                {/* ✍️ ส่วนลงชื่อ */}
                <section className="rounded-2xl bg-white p-6 shadow-sm space-y-6 dark:bg-[#181818]">
                  {/* ลายเซ็น */}
                  <div className="grid gap-5 mt-4">
                    <span className="text-gray-700 dark:text-white text-md font-semibold">
                      จึงได้ลงลายมือชื่อไว้เป็นหลักฐาน
                    </span>

                    {/* แพทย์ */}
                    <div className="rounded-xl border border-gray-200/80 dark:border-neutral-800/80 bg-white dark:bg-[#131317]/50 p-5 sm:p-6 space-y-4 shadow-sm hover:border-gray-300 dark:hover:border-neutral-700 transition-all relative">
                      <div className="pb-3 border-b border-gray-100 dark:border-neutral-800/80 flex items-center justify-between">
                        <span className="font-semibold text-gray-800 dark:text-gray-200 text-[15px] flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
                          แพทย์
                        </span>
                        {isApprove && (
                          <div className="flex items-center justify-end gap-3">
                            <div className="w-8 h-8 rounded-full bg-white dark:bg-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-300 shadow-sm border border-neutral-200 dark:border-neutral-600">
                              <Info size={16} />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                                คุณต้องการใช้ลายเซ็นของคุณเลยหรือไม่
                              </p>
                              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                                (ถ้าคุณต้องการใช้ลายเซ็นของคุณ ให้กดปุ่มตรวจสอบ)
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="w-full flex justify-between items-center">
                        <form.Field name="doctor_id">
                          {(field) => (
                            <Select
                              label="กรุณาเลือกแพทย์เพื่อขออนุญาตใช้ลายเซ็น"
                              className="w-full max-w-[500px]"
                              size="sm"
                              radius="sm"
                              placeholder=""
                              selectedKeys={
                                field.state.value ? [field.state.value] : []
                              }
                              onSelectionChange={(keys) => {
                                const value = Array.from(keys)[0];
                                field.handleChange(value);
                              }}
                              classNames={{
                                trigger:
                                  "shadow-none border border-gray-200/80 dark:border-neutral-700/80 bg-gray-50/50 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-neutral-800",
                              }}
                            >
                              {doctor?.map((item) => (
                                <SelectItem key={String(item.doctorid)}>
                                  {`${item?.name} ${item?.location_name}`}
                                </SelectItem>
                              ))}
                            </Select>
                          )}
                        </form.Field>
                        {isApprove && (
                          <div className="w-full flex justify-end items-center gap-4">
                            <div className="flex-shrink-0 flex items-center gap-3">
                              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mr-2">
                                ลงลายมือชื่อ
                              </span>
                              {!doctorSign ? (
                                <div className="w-[180px] h-[50px] rounded-lg border-2 border-dashed border-gray-300 dark:border-neutral-700 flex items-center justify-center text-gray-400 dark:text-neutral-500 text-xs bg-gray-50 dark:bg-neutral-800/30">
                                  รอการลงนาม
                                </div>
                              ) : (
                                <img
                                  src={doctorSign}
                                  alt="doctor_signature"
                                  className="border border-gray-200 dark:border-neutral-700 rounded-lg shadow-sm w-[180px] h-[50px] object-contain bg-white dark:bg-transparent"
                                />
                              )}
                            </div>
                            <Button
                              size="sm"
                              className="bg-neutral-900 text-white shadow-sm hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white font-medium"
                              onPress={() => {
                                setField({
                                  userid: user?.userid,
                                  doctorid: user?.doctorid,
                                  role: "doctor",
                                });
                                setConfirmSignModal({
                                  isOpen: true,
                                  role: "doctor",
                                });
                              }}
                            >
                              ตรวจสอบ
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* นักรังสีแพทย์ */}
                    <div className="rounded-xl border border-gray-200/80 dark:border-neutral-800/80 bg-white dark:bg-[#131317]/50 p-5 sm:p-6 space-y-4 shadow-sm hover:border-gray-300 dark:hover:border-neutral-700 transition-all relative">
                      <div className="pb-3 border-b border-gray-100 dark:border-neutral-800/80 flex items-center justify-between">
                        <span className="font-semibold text-gray-800 dark:text-gray-200 text-[15px] flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
                          นักรังสีแพทย์
                        </span>
                      </div>
                      <div className="w-full">
                        <form.Field name="staff_id">
                          {(field) => (
                            <Select
                              label="กรุณาเลือกนักรังสีแพทย์เพื่อขออนุญาตใช้ลายเซ็น"
                              className="w-full max-w-[500px]"
                              size="sm"
                              radius="sm"
                              placeholder=""
                              selectedKeys={
                                field.state.value ? [field.state.value] : []
                              }
                              onSelectionChange={(keys) => {
                                const value = Array.from(keys)[0];
                                field.handleChange(value);
                              }}
                              classNames={{
                                trigger:
                                  "shadow-none border border-gray-200/80 dark:border-neutral-700/80 bg-gray-50/50 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-neutral-800",
                              }}
                            >
                              {staff?.map((item) => (
                                <SelectItem key={String(item.userid)}>
                                  {`${item?.person_name} ${item?.position}`}
                                </SelectItem>
                              ))}
                            </Select>
                          )}
                        </form.Field>
                      </div>
                    </div>

                    {/* พยาน */}
                    {/* <div className="rounded-xl light:border light:border-gray-200 bg-[#f9f9f9] p-6 space-y-3 shadow-sm dark:bg-[#1f1e1e]">
                      <span className="font-medium text-gray-700 dark:text-white text-sm">
                        พยาน
                      </span>

                      <Input
                        className="max-w-xs"
                        size="sm"
                        radius="sm"
                        placeholder="ชื่อ-นามสกุล"
                      />
                    </div> */}

                    {/* พยาบาล */}
                    <div className="rounded-xl border border-gray-200/80 dark:border-neutral-800/80 bg-white dark:bg-[#131317]/50 p-5 sm:p-6 space-y-4 shadow-sm hover:border-gray-300 dark:hover:border-neutral-700 transition-all relative">
                      <div className="pb-3 border-b border-gray-100 dark:border-neutral-800/80 flex items-center justify-between">
                        <span className="font-semibold text-gray-800 dark:text-gray-200 text-[15px] flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
                          พยาบาล
                        </span>
                      </div>
                      <div className="w-full">
                        <form.Field name="nurse_id">
                          {(field) => (
                            <Select
                              label="กรุณาเลือกพยาบาลเพื่อขออนุญาตใช้ลายเซ็น"
                              className="w-full max-w-[500px]"
                              size="sm"
                              radius="sm"
                              placeholder=""
                              selectedKeys={
                                field.state.value ? [field.state.value] : []
                              }
                              onSelectionChange={(keys) => {
                                const value = Array.from(keys)[0];
                                field.handleChange(value);
                              }}
                              classNames={{
                                trigger:
                                  "shadow-none border border-gray-200/80 dark:border-neutral-700/80 bg-gray-50/50 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-neutral-800",
                              }}
                            >
                              {staff?.map((item) => (
                                <SelectItem key={String(item.userid)}>
                                  {`${item?.person_name} ${item?.position}`}
                                </SelectItem>
                              ))}
                            </Select>
                          )}
                        </form.Field>
                      </div>
                    </div>
                    <div className="rounded-xl border border-gray-200/80 dark:border-neutral-800/80 bg-white dark:bg-[#131317]/50 p-5 sm:p-6 space-y-4 shadow-sm hover:border-gray-300 dark:hover:border-neutral-700 transition-all relative">
                      <div className="pb-3 border-b border-gray-100 dark:border-neutral-800/80 flex items-center justify-between">
                        <span className="font-semibold text-gray-800 dark:text-gray-200 text-[15px] flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>
                          ผู้ตรวจสอบ
                        </span>
                      </div>
                      <div className="w-full">
                        <form.Field name="viewer">
                          {(field) => (
                            <Select
                              label="กรุณาเลือกผู้ตรวจสอบ"
                              className="w-full max-w-[500px]"
                              size="sm"
                              radius="sm"
                              placeholder=""
                              selectedKeys={
                                field.state.value ? [field.state.value] : []
                              }
                              onSelectionChange={(keys) => {
                                const value = Array.from(keys)[0];
                                field.handleChange(value);
                              }}
                              classNames={{
                                trigger:
                                  "shadow-none border border-gray-200/80 dark:border-neutral-700/80 bg-gray-50/50 dark:bg-neutral-900/50 hover:bg-white dark:hover:bg-neutral-800",
                              }}
                            >
                              {staff?.map((item) => (
                                <SelectItem key={String(item.userid)}>
                                  {`${item?.person_name} ${item?.position}`}
                                </SelectItem>
                              ))}
                            </Select>
                          )}
                        </form.Field>
                      </div>
                    </div>
                    <form.Field name={fieldName}>
                      {(field) => (
                        <Input
                          type="hidden"
                          value={field.state.value ?? ""}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                      )}
                    </form.Field>
                  </div>
                </section>
              </ModalBody>

              <ModalFooter>
                <Button color="default" variant="flat" sonPress={closeForm3}>
                  ปิด
                </Button>
                <Button
                  className="bg-neutral-900 text-white dark:bg-neutral-800 dark:hover:bg-neutral-700"
                  // onPress={closeForm1}
                  type="submit"
                  isDisabled={isSubmitting}
                >
                  {isSubmitting ? "กำลังบันทึก..." : "บันทึก"}
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
