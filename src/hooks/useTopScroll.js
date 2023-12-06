import { useEffect, useState } from "react";

const useTopScroll = () => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.scrollY < 1);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    console.log(top);
  }, [top]);

  return top;
};

export default useTopScroll;
