export type ProductCardProps = {
  id: number,
  name: string,
  description: string,
  price: number,
  imageUrl: string,
  inStock: number,
  quantity?: number
}

export type ProductType = {
  product: ProductCardProps
}