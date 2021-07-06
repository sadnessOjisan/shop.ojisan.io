export const repository = {
    getAllItems:async () => {
       const res =await fetch("https://ojisan-store.microcms.io/api/v1/products", {
       headers: {
         "X-API-KEY": "4d39ec51-66d8-4fe9-a37a-31058c10742a"
       }
     })
     const data = await res.json()
     console.log(data)
    }
}