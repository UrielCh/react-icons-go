import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Rows icon from Github Octicons icons
 * @module
 */
export function GoRows(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22 3.75v5.5A1.75 1.75 0 0 1 20.25 11H3.75A1.75 1.75 0 0 1 2 9.25v-5.5C2 2.784 2.784 2 3.75 2h16.5c.966 0 1.75.784 1.75 1.75Zm0 11v5.5A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25v-5.5c0-.966.784-1.75 1.75-1.75h16.5c.966 0 1.75.784 1.75 1.75ZM20.25 3.5H3.75a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25Zm0 11H3.75a.25.25 0 0 0-.25.25v5.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25Z"}}]})(props);
}
export default GoRows;
