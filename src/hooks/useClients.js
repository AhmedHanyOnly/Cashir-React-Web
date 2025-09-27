import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getClients,
  createClient,
  updateClient,
  deleteClient,
} from "../api/modules/clients"; 

export function useClients() {
  const queryClient = useQueryClient();

  const clientsQuery = useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
    staleTime: 1000 * 60,
  });

  const createMutation = useMutation({
    mutationFn: createClient,
    onSuccess: () => queryClient.invalidateQueries(["clients"]),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => updateClient(id, data),
    onSuccess: () => queryClient.invalidateQueries(["clients"]),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deleteClient(id),
    onSuccess: () => queryClient.invalidateQueries(["clients"]),
  });

  return {
  clientsQuery,
    createMutation,
    updateMutation,
    deleteMutation,
  };
}

// export function useClient(id) {
//   return useQuery({
//     queryKey: ["clients", id],
//     queryFn: () => getClient(id),
//     enabled: !!id,
//   });
// }
