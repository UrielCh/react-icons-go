import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Grabber icon from Github Octicons icons
 * @module
 */
export function GoGrabber(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"}}]})(props);
}
export default GoGrabber;
