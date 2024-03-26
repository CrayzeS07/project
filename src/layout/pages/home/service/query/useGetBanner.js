import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../../config/request";

export const useGetBanner = () => {
  return useQuery({
    queryKey: ["banner"],
    queryFn: () => request.get("/banners").then((res) => res.data),
  });
};

export const useSliderCard = () => {
  return useQuery({
    queryKey: ["catalog"],
    queryFn: () => request.get("/catalog").then((res) => res.data),
  });
};

export const Phones1 = () => {
  return useQuery({
    queryKey: ["phones"],
    queryFn: () => request.get("/phones").then((res) => res.data),
  });
};
