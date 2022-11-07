export type ActionTypes<T extends Record<string, (...args: any) => any>> =
  ReturnType<T[keyof T]>;

export interface Action<T, P> {
  readonly type: T;
  readonly payload?: P;
}
