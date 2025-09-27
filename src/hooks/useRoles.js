import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getRoles,
  createRoles,
  updateRoles,
  deleteRoles,
} from "../api/modules/roles";

export function useRoles() {
  const queryRoles = useQueryClient();

  const rolesQuery = useQuery({
    queryKey: ["roles"],
    queryFn: getRoles,
    staleTime: 1000 * 60,
  });

  const createMutation = useMutation({
    mutationFn: createRoles,
    onSuccess: () => rolesQuery.invalidateQueries(["roles"]),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => updateRoles(id, data),
    onSuccess: () => rolesQuery.invalidateQueries(["roles"]),
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deleteRoles(id),
    onSuccess: () => rolesQuery.invalidateQueries(["roles"]),
  });

  return {
    queryRoles,
    createMutation,
    updateMutation,
    deleteMutation,
  };
}
