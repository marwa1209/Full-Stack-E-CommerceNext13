/** @format */
"use client";
import { useModalStore } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {
  const onOpen = useModalStore((state) => state.openModal);
  const isOpen = useModalStore((state) => state.isOpen);
  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen,onOpen]);
  return (
    <div className="p-4">
      <h2>root</h2>
    </div>
  );
};
export default SetupPage;
