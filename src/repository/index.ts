import { validator } from "../validator";

export const repository = {
  getAllItems: async () => {
    const res = await fetch(
      "https://ojisan-store.microcms.io/api/v1/products&limit=1000",
      {
        headers: {
          "X-API-KEY": "4d39ec51-66d8-4fe9-a37a-31058c10742a",
        },
      }
    );
    const data = await res.json();
    const validated = validator.validateShopItems(data);
    return validated;
  },
  getAllShopItemIds: async () => {
    const res = await fetch(
      "https://ojisan-store.microcms.io/api/v1/products?fields=id&limit=1000",
      {
        headers: {
          "X-API-KEY": "4d39ec51-66d8-4fe9-a37a-31058c10742a",
        },
      }
    );
    const data = await res.json();
    const validated = validator.validateShopItemIds(data);
    return validated;
  },
  getItemById: async (id: string) => {
    const res = await fetch(
      `https://ojisan-store.microcms.io/api/v1/products/${id}`,
      {
        headers: {
          "X-API-KEY": "4d39ec51-66d8-4fe9-a37a-31058c10742a",
        },
      }
    );
    const data = await res.json();
    const validated = validator.validateShopItem(data);
    return validated;
  },
};
