import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Iterations icon from Github Octicons icons
 * @module
 */
export function GoIterations(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M2.5 10.5a8 8 0 1 1 16 0 .75.75 0 0 0 1.5 0 9.5 9.5 0 1 0-9.5 9.5h10.94l-2.72 2.72a.75.75 0 1 0 1.06 1.06l3.735-3.735c.44-.439.44-1.151 0-1.59L19.78 14.72a.75.75 0 0 0-1.06 1.06l2.72 2.72H10.5a8 8 0 0 1-8-8Z"}}]})(props);
}
export default GoIterations;
