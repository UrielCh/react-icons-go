import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Cloud icon from Github Octicons icons
 * @module
 */
export function GoCloud(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3.103 10.107c0-4.244 3.445-7.607 7.733-7.607 3.19 0 5.912 1.858 7.099 4.563l.01.022.001.006C21.348 7.345 24 10.095 24 13.536 24 17.148 21.076 20 17.431 20H5.017C2.23 20 0 17.83 0 15.06a4.899 4.899 0 0 1 3.112-4.581 7.696 7.696 0 0 1-.009-.372ZM10.836 4c-3.485 0-6.233 2.717-6.233 6.107 0 .284.022.602.052.756a.75.75 0 0 1-.552.869c-1.52.385-2.603 1.712-2.603 3.328 0 1.917 1.532 3.44 3.517 3.44h12.414c2.843 0 5.069-2.206 5.069-4.964 0-2.759-2.226-4.965-5.069-4.965a.75.75 0 0 1-.696-.47l-.179-.446C15.606 5.5 13.424 4 10.836 4Z"}}]})(props);
}
export default GoCloud;
