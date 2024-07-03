"use client"

import { useModalStore } from "@/hooks/use-store-modal";
import Modal from "@/components/ui/modal"

/** @format */

interface IProps {}

const StoreModal = ({}: IProps) => {
    const StoreModal = useModalStore();
  return (
    <>
      ,
      <Modal
        title="modal"
        description="modal descriptionn"
        isOpen={StoreModal.isOpen}
        onClose={StoreModal.closeModal}
      >
        Future create store{" "}
      </Modal>
    </>
  );
}
export default StoreModal