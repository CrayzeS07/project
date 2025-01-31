import { QueryClient } from "@tanstack/react-query";

export const Client = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});
