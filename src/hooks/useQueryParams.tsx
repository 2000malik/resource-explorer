"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useQueryParams = (path?: string) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (paramsToUpdate: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(paramsToUpdate).forEach(([key, value]) => {
        params.set(key, value);
      });

      return params.toString();
    },
    [searchParams]
  );

  const setQueryParams = (key: string, value: string) => {
    router.push(path ?? `${pathname}?${createQueryString({ [key]: value })}`);
  };

  const setMultipleQueryParams = (params: Record<string, string>) => {
    router.push(path ?? `${pathname}?${createQueryString(params)}`);
  };

  const getQueryParams = (key: string) => {
    return searchParams.get(key);
  };

  return { setQueryParams, setMultipleQueryParams, getQueryParams };
};
