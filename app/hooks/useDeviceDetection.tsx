import { useState, useEffect } from "react";

function useDevice() {
  const [device, setDevice] = useState<string>();

  const handleResize = () => {
    setDevice(getDevice(window.innerWidth));
  };

  useEffect(() => {
    handleResize(); // Set initial device type
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return device;
}

function getDevice(width: number) {
  if (width < 768) {
    return "mobile";
  } else if (width < 1024) {
    return "tablet";
  } else {
    return "desktop";
  }
}

export default useDevice;
