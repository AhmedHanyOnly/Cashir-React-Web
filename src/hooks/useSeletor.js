import { useQuery } from "@tanstack/react-query";
import {
  accountsSelect,
  categoriesSelect,
  clientsSelect,
  paymentMethodsSelect,
  suppliersSelect,
  productsSelect,
} from "../api/modules/seletor";

export function useSelector() {
  const accountsQuery = useQuery({
    queryKey: ["accountsSelect"],
    queryFn: accountsSelect,
    staleTime: 1000 * 60,
  });

  const categoriesQuery = useQuery({
    queryKey: ["categoriesSelect"],
    queryFn: categoriesSelect,
    staleTime: 1000 * 60,
  });

  const clientsQuery = useQuery({
    queryKey: ["clientsSelect"],
    queryFn: clientsSelect,
    staleTime: 1000 * 60,
  });

  const paymentMethodsQuery = useQuery({
    queryKey: ["paymentMethodsSelect"],
    queryFn: paymentMethodsSelect,
    staleTime: 1000 * 60,
  });

  const suppliersQuery = useQuery({
    queryKey: ["suppliersSelect"],
    queryFn: suppliersSelect,
    staleTime: 1000 * 60,
  });
  const productsQuery = useQuery({
    queryKey: ["productsSelect"],
    queryFn: productsSelect,
    staleTime: 1000 * 60,
  });

  return {
    accountsQuery,
    categoriesQuery,
    clientsQuery,
    paymentMethodsQuery,
    suppliersQuery,
    productsQuery,
  };
}
