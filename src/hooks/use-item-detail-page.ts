import { useState } from "react";
import { ShopItem } from "../validator";

export const useItemDetailPage = (props: ShopItem["images"]) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  return { selectedImage: props[selectedImageIdx], setSelectedImageIdx };
};
