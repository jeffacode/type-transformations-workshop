import { Equal, Expect } from "../helpers/type-utils";

type FuncWithMaybePayload<T = undefined> = () => void;

const funcWithPayload: FuncWithMaybePayload<{
  id: string;
}> = (payload) => {
  type test = [Expect<Equal<typeof payload, { id: string }>>];
};

const funcWithNoPayload: FuncWithMaybePayload = () => {};

type test = [Expect<Equal<typeof funcWithNoPayload, () => void>>];