import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ZoomOut icon from Github Octicons icons
 * @module
 */
export function GoZoomOut(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.5 11.25a.75.75 0 0 0 0-1.5h-8a.75.75 0 0 0 0 1.5h8Z"}},{tag:"path",attr:{d:"M0 10.5C0 4.701 4.701 0 10.5 0S21 4.701 21 10.5c0 2.63-.967 5.033-2.564 6.875l4.344 4.345a.749.749 0 1 1-1.06 1.06l-4.345-4.344A10.459 10.459 0 0 1 10.5 21C4.701 21 0 16.299 0 10.5Zm10.5-9a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Z"},child:[]}]})(props);
}
export default GoZoomOut;
