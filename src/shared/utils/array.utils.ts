/**
 * Utility to shuffle an array using the Fisher–Yates algorithm.
 * This algorithm is efficient and ensures that each permutation of the array is equally likely.
 *
 * @param array The array to shuffle.
 * @returns A new array with the elements shuffled.
 *
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};
