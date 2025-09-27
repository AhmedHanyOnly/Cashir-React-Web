import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getPurchases,
  createPurchases,
  updatePurchases,
  deletePurchases,
} from "../api/modules/purchases";

export function usePurchases() {
  const queryClient = useQueryClient();

  const purchasesQuery = useQuery({
    queryKey: ["purchases"],
    queryFn: getPurchases,
    staleTime: 1000 * 60,
  });

  const createMutation = useMutation({
    mutationFn: createPurchases,
    onSuccess: () => queryClient.invalidateQueries(["purchases"]),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => updatePurchases(id, data),
    onSuccess: () => queryClient.invalidateQueries(["purchases"]),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deletePurchases(id),
    onSuccess: () => queryClient.invalidateQueries(["purchases"]),
  });

  return {
    purchasesQuery,
    createMutation,
    updateMutation,
    deleteMutation,
  };
}
