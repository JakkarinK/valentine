import { useContext, createContext, useRef } from "react";

// Prime react
import { Toast } from "primereact/toast";

const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const toast = useRef(null);
  return (
    <ToastContext.Provider value={{ toast }}>
      <Toast ref={toast} position="top-center" />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);

export default ToastProvider;
