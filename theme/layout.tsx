import { FadeInDown, FadeOut, LinearTransition } from "react-native-reanimated";

export const _spacing = 10;
export const _color = "#ececec";
export const _borderRadius = 16;

export const _entering = FadeInDown.springify().damping(14).stiffness(100);
export const _exiting = FadeOut.springify().damping(14).stiffness(100);
export const _layout = LinearTransition.springify().damping(14).stiffness(100);
