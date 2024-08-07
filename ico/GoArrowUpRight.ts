import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowUpRight icon from Github Octicons icons
 * @module
 */
export function GoArrowUpRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"}}]})(props);
}
export default GoArrowUpRight;
