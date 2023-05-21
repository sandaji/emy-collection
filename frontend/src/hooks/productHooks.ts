import { useQuery } from '@tanstack/react-query'
import apiClient from '../apiClient'
import { Product } from '../types/Product'
import { Category } from '../types/Category'

export const useGetProductsQuery = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: async () => (await apiClient.get<Product[]>(`api/products`)).data,
  })

export const useGetProductDetailsBySlugQuery = (slug: string) =>
  useQuery({
    queryKey: ['products', slug],
    queryFn: async () =>
      (await apiClient.get<Product>(`api/products/slug/${slug}`)).data,
  })

export const useGetCategoryImages = () =>
  useQuery<Category[], Error>(["categoryImages"], async () => {
    const categories = ["category1", "category2", "category3"]; // Replace with your category names
    const categoryImages: Category[] = [];

    for (const category of categories) {
      const response = await apiClient.get<Product[]>(
        `api/products/category/${category}`
      );
      const products = response.data;
      if (products.length > 0) {
        const firstProduct = products[0];
        const categoryImage: Category = {
          id: category, // Assign a unique identifier for the category
          name: category, // Assign a meaningful name for the category
          image: firstProduct.image,
        };
        categoryImages.push(categoryImage);
      }
    }

    return categoryImages;
  });
