import { useEffect, useState } from "react";

export default function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      if (maxScroll <= 0) {
        setProgress(0);
        return;
      }

      setProgress(window.scrollY / maxScroll);
    };

    window.addEventListener("scroll", updateScroll);

    updateScroll();

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return progress;
}