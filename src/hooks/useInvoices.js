import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getInvoices,
  createInvoice,
  updateInvoice,
  deleteInvoice,
} from "../api/modules/invoices"; 

export function useInvoices() {
  const queryInvoices = useQueryClient();

  const invoicesQuery = useQuery({
    queryKey: ["invoices"],
    queryFn: getInvoices,
    staleTime: 1000 * 60, // 1 دقيقة
  });

  const createMutation = useMutation({
    mutationFn: createInvoice,
    onSuccess: () => queryInvoices.invalidateQueries(["invoices"]),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => updateInvoice(id, data),
    onSuccess: () => queryInvoices.invalidateQueries(["invoices"]),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deleteInvoice(id),
    onSuccess: () => queryInvoices.invalidateQueries(["invoices"]),
  });

  return {
    invoicesQuery,
    createMutation,
    updateMutation,
    deleteMutation,
  };
}
