export const selectTwoRandom = (arr: string[]): [string, string] => {
  if (arr.length < 2) {
    throw new Error('배열의 길이가 2 이상이어야 합니다.');
  }

  const indexes = Array.from({ length: arr.length }, (_, i) => i);

  const randomIndex1 = Math.floor(Math.random() * indexes.length);
  const first = indexes.splice(randomIndex1, 1)[0]; // 제거하여 중복 피하기

  const randomIndex2 = Math.floor(Math.random() * indexes.length);
  const second = indexes[randomIndex2];

  return [arr[first], arr[second]];
};
