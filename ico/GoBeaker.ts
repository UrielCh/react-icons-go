import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Beaker icon from Github Octicons icons
 * @module
 */
export function GoBeaker(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8 8.807V3.5h-.563a.75.75 0 0 1 0-1.5h9.125a.75.75 0 0 1 0 1.5H16v5.307l5.125 9.301c.964 1.75-.302 3.892-2.299 3.892H5.174c-1.998 0-3.263-2.142-2.3-3.892ZM4.189 18.832a1.123 1.123 0 0 0 .985 1.668h13.652a1.123 1.123 0 0 0 .985-1.668L17.7 15H6.3ZM14.5 3.5h-5V9a.75.75 0 0 1-.093.362L7.127 13.5h9.746l-2.28-4.138A.75.75 0 0 1 14.5 9Z"}}]})(props);
}
export default GoBeaker;
