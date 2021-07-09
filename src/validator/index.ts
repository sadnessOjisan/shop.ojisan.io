import { z } from "zod";

const schema = {
    ShopItemsSchema: z.object({contents:z.array(z.object({
        id: z.string(),
        name: z.string(),
        image: z.object({
            url: z.string()
        }),
        createdAt: z.string()
    }))})
}

export const validator = {
    validateShopItems : (data:unknown) => {
        return schema.ShopItemsSchema.parse(data)
    }
}

export type ShopItems = z.infer<typeof schema.ShopItemsSchema>