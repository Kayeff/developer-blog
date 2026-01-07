import { verify } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useAuthCheck() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    verify(token)
      .then((data) => {
        router.push("/admin/articles");
      })
      .catch((error) => {
        localStorage.removeItem("token");
        console.log(error);
      });
  }, []);
}
