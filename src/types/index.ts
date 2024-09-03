export type FieldErrors<T> = {
  [K in keyof T]?: string[] | undefined;
};

export type ActionState<TInput, TOutput> = {
  fieldErrors?: FieldErrors<TInput>;
  error?: string | null;
  data?: TOutput;
};
