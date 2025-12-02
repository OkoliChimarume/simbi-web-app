import api from "../api";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => userService.createUser(data),

    // Optional: automatically update cached data
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },

    onError: (error) => {
      console.error("Create user failed:", error.response?.data || error);
    },
  });
}