import { ReactNode } from "react";

export type BackendDataObj = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type DisplayArticles = {
  title: string;
  data?: BackendDataObj[];
  children?: ReactNode;
};
