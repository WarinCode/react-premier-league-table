import { ReactElement, FC } from "react";
import { ReactAppContainerProps } from "../types";

const ReactAppContainer: FC<ReactAppContainerProps> = ({ children }): ReactElement => {
  return <div className="w-full bg-slate-50 p-8">{children}</div>;
};

export default ReactAppContainer;
