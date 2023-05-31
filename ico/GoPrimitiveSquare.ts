import { GenIcon, type IconBaseProps } from "https://deno.land/x/react_icons@1.0.0/mod.ts";

export function GoPrimitiveSquare(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 8 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 12H0V4h8v8z"}}]})(props);
}
export default GoPrimitiveSquare;
