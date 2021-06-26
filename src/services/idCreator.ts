/* eslint-disable no-plusplus */
export function* idCreator(): Generator<number> {
  let i = 0;
  while (true) yield i++;
}
