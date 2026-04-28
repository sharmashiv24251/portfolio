"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { projects } from "@/data/portfolio";

const warmRoutes = ["/blogs", ...projects.map((project) => project.href)];

export function RoutePreloader() {
  const router = useRouter();

  useEffect(() => {
    for (const href of warmRoutes) {
      router.prefetch(href);
    }
  }, [router]);

  return null;
}
