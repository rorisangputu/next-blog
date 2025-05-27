import { formatDate } from "@/app/blog/utils";
import React from "react";

type Props = {
  title: string;
  summary: string;
  publishedAt: string;
};
const CardCategory = ({ title, summary, publishedAt }: Props) => {
  return (
    <div className="border flex flex-col p-4 h-[40vh] gap-4 rounded-md shadow-lg border-gray-200 overflow-hidden">
      <h1 className="font-bold leading-6 text-gray-700 text-xl">{title}</h1>
      <p className="text-gray-700">{summary}</p>
      <p className="text-xs text-gray-400">{formatDate(publishedAt, false)}</p>
    </div>
  );
};

export default CardCategory;
