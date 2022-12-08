import { useEffect } from "react";

export const useTitle = (title: string) => {
  useEffect(() => {
    if (title) {
      document.title = `CS Haven | ${title}`;
    } else {
      document.title = `CS Haven`;
    }
  }, [title]);
};
