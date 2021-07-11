import { useState } from "react";

import { ShopItem } from "../validator";

export const useItemDetailPage = (props: ShopItem["images"]) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [isConfirmed, setConfirmState] = useState(false);
  const handleChangeConfirmCheckBox = () => {
    setConfirmState(!isConfirmed);
  };
  return {
    selectedImage: props[selectedImageIdx],
    setSelectedImageIdx,
    handleChangeConfirmCheckBox,
    isConfirmed,
  };
};
