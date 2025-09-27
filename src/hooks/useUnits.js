import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getUnits,
  // createUnit,
  // updateUnit,
  // deleteUnit,
} from "../api/modules/units"; 

export function useUnits() {
  // const queryClient = useQueryClient();

  // جلب الوحدات
  const unitsQuery = useQuery({
    queryKey: ["units"],
    queryFn: getUnits,
    staleTime: 1000 * 60, 
  });

  // const createMutation = useMutation({
  //   mutationFn: createUnit,
  //   onSuccess: () => queryClient.invalidateQueries(["units"]),
  // });

  // const updateMutation = useMutation({
  //   mutationFn: ({ id, data }) => updateUnit(id, data),
  //   onSuccess: () => queryClient.invalidateQueries(["units"]),
  // });

  // const deleteMutation = useMutation({
  //   mutationFn: (id) => deleteUnit(id),
  //   onSuccess: () => queryClient.invalidateQueries(["units"]),
  // });

  return {
    unitsQuery,
    // createMutation,
    // updateMutation,
    // deleteMutation,
  };
}
