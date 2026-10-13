import { ViteReactSSG } from "vite-react-ssg/single-page";

import "./index.css";
import App from "./App";

// Pre-rendered to static HTML at build time, hydrated on the client
export const createRoot = ViteReactSSG(<App />);
