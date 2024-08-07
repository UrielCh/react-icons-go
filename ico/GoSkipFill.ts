import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SkipFill icon from Github Octicons icons
 * @module
 */
export function GoSkipFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm16.333-4.167a.825.825 0 0 0-1.166-1.166l-9.5 9.5a.825.825 0 0 0 1.166 1.166Z"}}]})(props);
}
export default GoSkipFill;
