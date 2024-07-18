import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Heading icon from Github Octicons icons
 * @module
 */
export function GoHeading(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.25 4a.75.75 0 0 1 .75.75V11h10V4.75a.75.75 0 0 1 1.5 0v14.5a.75.75 0 0 1-1.5 0V12.5H7v6.75a.75.75 0 0 1-1.5 0V4.75A.75.75 0 0 1 6.25 4Z"}}]})(props);
}
export default GoHeading;
