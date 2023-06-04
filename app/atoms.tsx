import { atom } from "recoil";

export const isBlackBackgroundAtom = atom({
    key: 'isBlackBackgroundAtom', // unique ID (with respect to other atoms/selectors)
    default: false as boolean, // default value (aka initial value)
  });
  