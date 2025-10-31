"use client";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { Link } from "@heroui/link";
import React from "react";

import { GithubIcon } from "@/components/icons";

export default function page({ isOpen, onClose, LoginRef }) {
  return (
    <div>
      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent ref={LoginRef}>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <div className="p-4">
                  <h1>Login</h1>
                  <Input size="sm" label="ID CARD" variant="flat" />
                  <Input size="sm" label="PASSWORD" variant="flat" />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Link isExternal href="/form_doc">
                  <GithubIcon size={20} />
                  GitHub
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
