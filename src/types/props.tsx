import {
  ReactNode,
  HTMLAttributes,
  ImgHTMLAttributes,
  TdHTMLAttributes,
} from "react";
import PremierLeague from ".";

interface RootContainerProps<T extends HTMLElement = HTMLElement> {
  children: ReactNode;
  attributes?: HTMLAttributes<T>;
}

export interface ReactAppContainerProps<
  T extends HTMLDivElement = HTMLDivElement
> extends RootContainerProps<T> {}
export interface TableContainerProps<
  T extends HTMLTableElement = HTMLTableElement
> extends RootContainerProps<T> {}
export interface TableContentProps<
  T extends HTMLTableSectionElement = HTMLTableSectionElement
> extends RootContainerProps<T> {}
export interface TableRowProps<
  T extends HTMLTableRowElement = HTMLTableRowElement
> extends RootContainerProps<T> {}
export interface TableDataCellProps<
  T extends HTMLTableDataCellElement = HTMLTableDataCellElement
> extends Pick<RootContainerProps<T>, "children"> {
  attributes?: TdHTMLAttributes<T>;
}

export interface LoadingProps<T extends HTMLDivElement = HTMLDivElement>
  extends Pick<RootContainerProps<T>, "attributes"> {
  text?: string;
}
export interface PremierLeagueTableProps {
  teams: PremierLeague.Teams;
}
export interface TableHeaderProps<
  T extends HTMLTableSectionElement = HTMLTableSectionElement
> extends HTMLAttributes<T> {}
export interface CaptionProps<
  T extends HTMLTableCaptionElement = HTMLTableCaptionElement,
  D extends HTMLImageElement = HTMLImageElement
> {
  attributes?: HTMLAttributes<T>;
  imageAttributes?: ImgHTMLAttributes<D>;
}
export interface TableFooterProps<
  T extends HTMLTableSectionElement = HTMLTableSectionElement
> extends HTMLAttributes<T> {}
export interface SpaceProps<T extends HTMLTableRowElement = HTMLTableRowElement>
  extends HTMLAttributes<T> {}
