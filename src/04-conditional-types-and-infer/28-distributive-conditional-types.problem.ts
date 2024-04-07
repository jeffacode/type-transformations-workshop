import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type AppleOrBanana = Fruit extends "orange" | infer R ? R : never;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
