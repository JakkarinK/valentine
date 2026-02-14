import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "/node_modules/primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import { PrimeReactProvider } from "primereact/api";
import ToastProvider from "./provider/ToastProvider.jsx";
import { ConfirmPopup } from "primereact/confirmpopup";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
  <PrimeReactProvider value={{ ripple: true, unstyled: false }}>
    <ConfirmPopup />

    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/valentine" element={<App />} />
        </Routes>
      </BrowserRouter>
      ,
    </ToastProvider>
  </PrimeReactProvider>,
);
