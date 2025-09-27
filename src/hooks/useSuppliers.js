import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getSuppliers,
  createSuppliers,
  updateSuppliers,
  deleteSuppliers,
} from "../api/modules/suppliers"; 

export function useSuppliers() {
  const queryClient = useQueryClient();

  const suppliersQuery = useQuery({
    queryKey: ["suppliers"],
    queryFn: getSuppliers,
    staleTime: 1000 * 60, 
  });

  const createMutation = useMutation({
    mutationFn: createSuppliers,
    onSuccess: () => queryClient.invalidateQueries(["suppliers"]),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => updateSuppliers(id, data),
    onSuccess: () => queryClient.invalidateQueries(["suppliers"]),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deleteSuppliers(id),
    onSuccess: () => queryClient.invalidateQueries(["suppliers"]),
  });

  return {
    suppliersQuery,
    createMutation,
    updateMutation,
    deleteMutation,
  };
}
