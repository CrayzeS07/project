import { Client } from "../config/queryClient";

export const useValidate = () => {
  const invalidate = (key) => {
    Client.invalidateQueries({ queryKey: [key] });
  };
  return invalidate;
};
