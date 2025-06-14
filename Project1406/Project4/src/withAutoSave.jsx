// withAutoSave.js
import React, { useEffect } from "react";

const withAutoSave = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      const interval = setInterval(() => {
        console.log("Auto-saving survey data...");
      }, 3000);

      return () => clearInterval(interval);
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAutoSave;
