import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { reduxStore } from "./redux/store.ts";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/route";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={reduxStore}>
        <RouterProvider router={routes} />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
