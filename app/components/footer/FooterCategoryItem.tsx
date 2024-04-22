"use client";
import React, { useCallback } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

interface FooterCategoryItemProp {
  label: string;
  selected?: boolean;
}

const FooterCategoryItem: React.FC<FooterCategoryItemProp> = ({
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    if (label === "All") {
      router.push("/");
    } else {
      let currentQuery = {};

      if (params) {
        currentQuery = queryString.parse(params.toString());
      }

      const updatedQuery: any = {
        ...currentQuery,
        category: label,
      };

      const url = queryString.stringifyUrl(
        {
          url: "/",
          query: updatedQuery,
        },
        {
          skipNull: true,
        }
      );

      router.push(url);
    }
  }, [label, params, router]);
  return (
    <div onClick={handleClick} className={`${selected && "text-sky-400"} cursor-pointer`}>
      {label}
    </div>
  );
};

export default FooterCategoryItem;
