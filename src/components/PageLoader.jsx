import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageLoader = ({ children, onLoadingStart, onLoadingStop }) => {
  const location = useLocation();

  useEffect(() => {
    onLoadingStart();
    const timer = setTimeout(() => {
      onLoadingStop();
    }, 800); // Simulasi delay loading

    return () => clearTimeout(timer); // Bersihkan timer saat komponen di-unmount
  }, [location, onLoadingStart, onLoadingStop]);

  return <>{children}</>;
};

export default PageLoader;
