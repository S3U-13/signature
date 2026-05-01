"use client";
import React from "react";
import { Button } from "@heroui/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { PenSquare } from "lucide-react";

export default function ModalApprove({
  isOpen,
  onClose,
  handleApproveSignature,
  loading,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onClose}
      size="sm"
      classNames={{
        base: "dark:bg-[#18181B]",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 items-center pb-0 pt-6">
              <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300 mb-4 border border-neutral-200 dark:border-neutral-700">
                <PenSquare size={24} />
              </div>
              <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                ยืนยันการใช้ลายเซ็น
              </p>
            </ModalHeader>
            <ModalBody className="text-center pb-6">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                คุณต้องการอนุญาตให้ใช้ลายเซ็นของคุณในแบบฟอร์มนี้หรือไม่?
              </p>
            </ModalBody>
            <ModalFooter className="flex justify-center gap-3 w-full pb-6 border-none">
              <Button
                variant="flat"
                className="font-medium flex-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                onPress={() => handleApproveSignature("N")}
                isDisabled={loading}
              >
                ไม่อนุญาต
              </Button>
              <Button
                className="font-medium flex-1 shadow-sm bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                onPress={() => handleApproveSignature("Y")}
                isLoading={loading}
              >
                อนุญาต
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
