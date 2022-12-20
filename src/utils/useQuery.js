import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export const useQuery = (query) => {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
};