import { createRoot } from "react-dom/client";
import ReactApplication from "./ReactApplication.tsx";
import "@fontsource/roboto/400.css";
import "./style/tailwind.css";
import "./style/style.css";

const rootElement: HTMLDivElement = document.querySelector("#root")!;
createRoot(rootElement).render(<ReactApplication />);
