import { useEffect, useState } from "react";

export default function useMediaType() {
  const [mediaType, setMediaType] = useState("desktop");
  useEffect(() => {
    const updateMediaType = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setMediaType("mobile");
      } else if (width >= 768 && width < 1024) {
        setMediaType("tablet");
      } else {
        setMediaType("desktop");
      }
    };
    updateMediaType();
    window.addEventListener("resize", updateMediaType);
    return () => window.removeEventListener("resize", updateMediaType);
  }, []);
  return mediaType;
}
