"use client";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import React from "react";
import SignatureCanvas from "react-signature-canvas";
import useHook from "./useHook";

export default function page({ isOpen, onClose, modalRefSign, onSave }) {
  const { sigRef, signatureData, setSignatureData, handleClear, handleSave } =
    useHook({ onSave, isOpen, onClose });
  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent ref={modalRefSign}>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                เพิ่มลายเซน พยานฝ่ายผู้ป่วย
              </ModalHeader>
              <ModalBody>
                <div className="border rounded-xl shadow-inner bg-gray-50">
                  <SignatureCanvas
                    ref={sigRef}
                    penColor="black"
                    minWidth={0.8}
                    maxWidth={2.5}
                    velocityFilterWeight={0.6}
                    canvasProps={{
                      width: 1000, // 👈 เดิมอาจใช้แค่ 500
                      height: 400, // 👈 เดิมอาจใช้แค่ 200
                      className: "w-full h-[200px] rounded-lg cursor-crosshair",
                    }}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button variant="flat" color="danger" onPress={handleClear}>
                  ล้าง
                </Button>
                <Button color="primary" onPress={handleSave}>
                  บันทึกลายเซ็น
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
