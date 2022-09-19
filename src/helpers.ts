export function returnRandomColor(array: string[]) {
  return array[Math.floor(Math.random() * array.length)];
}
