import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DeviceDesktop icon from Github Octicons icons
 * @module
 */
export function GoDeviceDesktop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.954 17H2.75A1.75 1.75 0 0 1 1 15.25V3.75C1 2.784 1.784 2 2.75 2h18.5c.966 0 1.75.784 1.75 1.75v11.5A1.75 1.75 0 0 1 21.25 17h-6.204c.171 1.375.805 2.652 1.769 3.757A.752.752 0 0 1 16.25 22h-8.5a.75.75 0 0 1-.565-1.243c.964-1.105 1.598-2.382 1.769-3.757ZM21.5 3.75a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v11.5c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25ZM13.537 17h-3.074c-.126 1.266-.564 2.445-1.223 3.5h5.52c-.659-1.055-1.098-2.234-1.223-3.5Z"}}]})(props);
}
export default GoDeviceDesktop;
