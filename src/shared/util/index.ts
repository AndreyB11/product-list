export const delay = (ms: number) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

export const prefix = (prefix: string, str: string) => `${prefix}${str}`;
