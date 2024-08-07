import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SidebarCollapse icon from Github Octicons icons
 * @module
 */
export function GoSidebarCollapse(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7.22 14.47 9.69 12 7.22 9.53a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l3 3a.75.75 0 0 1 0 1.06l-3 3a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Z"}},{tag:"path",attr:{d:"M3.75 2h16.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25V3.75C2 2.784 2.784 2 3.75 2ZM3.5 3.75v16.5c0 .138.112.25.25.25H15v-17H3.75a.25.25 0 0 0-.25.25Zm13 16.75h3.75a.25.25 0 0 0 .25-.25V3.75a.25.25 0 0 0-.25-.25H16.5Z"},child:[]}]})(props);
}
export default GoSidebarCollapse;
