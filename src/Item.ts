
export type Affect = "good" | "bad" | "neutral";
export type AffectVal<T> = [T, Affect];

export type RawItem = {
  name: string;
  url: string;
  signUpRequired: string;
  downloadRequired: string;
  openSource: string
  developerOriented: string
  consumerOriented: string
  freeOptions: string
  paidOptions: string
  primaryFocus: string
};

export type Item = {
  [T in keyof RawItem]: AffectVal<RawItem[T]>;
};
