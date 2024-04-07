// Might come in handy!
// import { S } from "ts-toolbelt";
// https://millsp.github.io/ts-toolbelt/modules/string_split.html

import { Equal, Expect } from "../helpers/type-utils";

type Path = "Users/John/Documents/notes.txt";

type Split<T> = T extends `${infer Element}/${infer SubString}`
  ? [Element, ...Split<SubString>]
  : [T];

type SplitPath = Split<Path>;

type tests = [
  Expect<Equal<SplitPath, ["Users", "John", "Documents", "notes.txt"]>>
];
