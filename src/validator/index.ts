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

const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
});

const CategoriesSchema = z.object({
  contents: z.array(CategorySchema),
});

const schema = {
  ShopItemsSchema,
  ShopItemSchema,
  ShopItemIdsSchema,
  CategorySchema,
  CategoriesSchema,
};

export const validator = {
  validateShopItems: (data: unknown): ShopItems => {
    return schema.ShopItemsSchema.parse(data) as ShopItems;
  },
  validateShopItem: (data: unknown) => {
    return schema.ShopItemSchema.parse(data) as ShopItem;
  },
  validateShopItemIds: (data: unknown) => {
    return schema.ShopItemIdsSchema.parse(data);
  },
  validateCategory: (data: unknown) => {
    return schema.CategorySchema.parse(data);
  },
  validateCategories: (data: unknown) => {
    return schema.CategoriesSchema.parse(data);
  },
};

export type ShopItems = RecursiveRequired<
  z.infer<Required<typeof schema.ShopItemsSchema>>
>;
export type ShopItem = RecursiveRequired<z.infer<typeof schema.ShopItemSchema>>;
export type Tag = RecursiveRequired<z.infer<typeof schema.CategorySchema>>;
