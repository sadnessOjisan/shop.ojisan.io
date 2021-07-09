import { z } from "zod";

const schema = {
  ShopItemsSchema: z.object({
    contents: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        images: z.array(
          z.object({
            image: z.object({ url: z.string() }),
          })
        ),
        createdAt: z.string(),
      })
    ),
  }),
  ShopItemSchema: z.object({
    id: z.string(),
    name: z.string(),
    images: z.array(
      z.object({
        image: z.object({ url: z.string() }),
      })
    ),
    createdAt: z.string(),
  }),
  ShopItemIdsSchema: z.object({
    contents: z.array(
      z.object({
        id: z.string(),
      })
    ),
  }),
};

export const validator = {
  validateShopItems: (data: unknown) => {
    return schema.ShopItemsSchema.parse(data);
  },
  validateShopItem: (data: unknown) => {
    return schema.ShopItemSchema.parse(data);
  },
  validateShopItemIds: (data: unknown) => {
    return schema.ShopItemIdsSchema.parse(data);
  },
};

export type ShopItems = z.infer<typeof schema.ShopItemsSchema>;
export type ShopItem = z.infer<typeof schema.ShopItemSchema>;
