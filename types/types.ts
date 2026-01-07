import { ReactNode } from "react";

export type BackendDataObj = {
  metadata: {
    title: string;
    slug: string;
    date: string;
  };
  content: string;
};

export type DisplayArticles = {
  data?: BackendDataObj[];
  children?: ReactNode;
};
