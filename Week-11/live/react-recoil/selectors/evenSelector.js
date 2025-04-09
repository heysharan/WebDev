import { selector } from "recoil";
import { counterAtom } from "../store/atoms/counter";

export const evenSelector = selector({
    key: "isEvenSelector",
    get: ({ get }) => {
        const currentCount = get(counterAtom)
        return currentCount % 2 === 0;
    }
})