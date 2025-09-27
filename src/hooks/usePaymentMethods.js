import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getPaymentMethods,
  createPaymentMethods,
  updatePaymentMethods,
  deletePaymentMethods,
} from "../api/modules/paymentMethod"; 

export function usePaymentMethods() {
  const queryClient = useQueryClient();

  const PaymentMethodsQuery = useQuery({
    queryKey: ["payment-methods"],
    queryFn: getPaymentMethods,
    staleTime: 1000 * 60, 
  });

  const createMutation = useMutation({
    mutationFn: createPaymentMethods,
    onSuccess: () => queryClient.invalidateQueries(["payment-methods"]),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => updatePaymentMethods(id, data),
    onSuccess: () => queryClient.invalidateQueries(["payment-methods"]),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deletePaymentMethods(id),
    onSuccess: () => queryClient.invalidateQueries(["payment-methods"]),
  });

  return {
    PaymentMethodsQuery,
    createMutation,
    updateMutation,
    deleteMutation,
  };
}
