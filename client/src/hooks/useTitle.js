import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${title} - Espresso Emporium`;
  }, []);
};

export default useTitle;
