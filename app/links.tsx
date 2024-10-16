"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowDown,
  ArrowDown01,
  ArrowDownIcon,
  ChevronDown,
} from "lucide-react";

export const Links = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center border border-gray-200 text-gray-200 hover:border-white hover:text-white px-2 rounded-lg">
        <p className="hidden sm:flex">More API Tools</p>{" "}
        <p className="sm:hidden">More Tools</p>{" "}
        <ChevronDown className="w-4 h-4 ml-1" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => {
            window.open("https://zudoku.dev/", "_blank");
          }}
        >
          Zudoku: API Docs
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            window.open("https://mockbin.io/", "_blank");
          }}
        >
          Mockbin: API Mocking
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            window.open("https://ratemyopenapi.com/", "_blank");
          }}
        >
          RateMyOpenAPI: API Linting
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            window.open("https://zuplo.com/", "_blank");
          }}
        >
          Zuplo: API Gateway
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
