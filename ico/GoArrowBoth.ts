import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowBoth icon from Github Octicons icons
 * @module
 */
export function GoArrowBoth(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7.78 5.97a.75.75 0 0 0-1.06 0l-5.25 5.25a.75.75 0 0 0 0 1.06l5.25 5.25a.75.75 0 0 0 1.06-1.06L3.81 12.5h16.38l-3.97 3.97a.75.75 0 1 0 1.06 1.06l5.25-5.25a.75.75 0 0 0 0-1.06l-5.25-5.25a.75.75 0 1 0-1.06 1.06L20.19 11H3.81l3.97-3.97a.75.75 0 0 0 0-1.06Z"}}]})(props);
}
export default GoArrowBoth;
