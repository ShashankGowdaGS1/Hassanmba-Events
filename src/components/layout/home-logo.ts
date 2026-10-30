import type React from "react";

export function scrollHomeOnCurrentPage(event: React.MouseEvent<HTMLAnchorElement>) {
  if (
    window.location.pathname !== "/" ||
    event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey
  ) return;

  event.preventDefault();
  requestAnimationFrame(() => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  });
}
