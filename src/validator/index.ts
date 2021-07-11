import { z } from "zod";

import { RecursiveRequired } from "../type/util";

const ShopItemSchema = z.object({
  id: z.string(),
  name: z.string(),
  status: z.union([
    z.literal("販売中"),
    z.literal("商談中"),
    z.literal("売り切れ"),
  ]),
  images: z.array(
    z.object({
      image: z.object({ url: z.string() }),
    })
  ),
  price: z.number(),
  createdAt: z.string(),
  description: z.string(),
  categories: z.array(z.object({ id: z.string(), name: z.string() })),
});

const ShopItemsSchema = z.object({
  contents: z.array(ShopItemSchema),
});

const ShopItemIdsSchema = z.object({
  contents: z.array(
    z.object({
      id: z.string(),
    })
  ),
});

const schema = {
  ShopItemsSchema,
  ShopItemSchema,
  ShopItemIdsSchema,
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

export type ShopItems = RecursiveRequired<
  z.infer<Required<typeof schema.ShopItemsSchema>>
>;
export type ShopItem = RecursiveRequired<z.infer<typeof schema.ShopItemSchema>>;
