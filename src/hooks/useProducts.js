import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../api/modules/products"; 

export function useProducts() {
  const queryClient = useQueryClient();

  // جلب المنتجات
  const productsQuery = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 1000 * 60, 
  });

  const createMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => updateProduct(id, data),
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deleteProduct(id),
    onSuccess: () => queryClient.invalidateQueries(["products"]),
  });

  return {
    productsQuery,
    createMutation,
    updateMutation,
    deleteMutation,
  };
}
