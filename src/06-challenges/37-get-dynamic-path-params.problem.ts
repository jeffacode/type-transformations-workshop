import { Equal, Expect } from "../helpers/type-utils";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

type SplitPath<Path> = Path extends `/${infer Route}/${infer SubPath}`
  ? Route | SplitPath<`/${SubPath}`>
  : Path extends `/${infer Route}`
  ? Route
  : never;
type ExtractPathParams<T> = {
  [K in SplitPath<T> as K extends `:${infer P}` ? P : never]: string;
};

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >
];
