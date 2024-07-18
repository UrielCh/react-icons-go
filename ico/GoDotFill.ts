import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DotFill icon from Github Octicons icons
 * @module
 */
export function GoDotFill(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"}}]})(props);
}
export default GoDotFill;
