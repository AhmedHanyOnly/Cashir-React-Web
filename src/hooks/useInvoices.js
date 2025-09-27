import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getInvoices,
  createInvoices,
  updateInvoices,
  deleteInvoices,
} from "../api/modules/invoices"; 

export function useInvoices() {
  const queryInvoices = useQueryClient();

  const invoicesQuery = useQuery({
    queryKey: ["invoices"],
    queryFn: getInvoices,
    staleTime: 1000 * 60, // 1 دقيقة
  });

  const createMutation = useMutation({
    mutationFn: createInvoices,
    onSuccess: () => queryInvoices.invalidateQueries(["invoices"]),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => updateInvoices(id, data),
    onSuccess: () => queryInvoices.invalidateQueries(["invoices"]),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deleteInvoices(id),
    onSuccess: () => queryInvoices.invalidateQueries(["invoices"]),
  });

  return {
    invoicesQuery,
    createMutation,
    updateMutation,
    deleteMutation,
  };
}
