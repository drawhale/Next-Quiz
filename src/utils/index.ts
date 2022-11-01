export const shuffle = (array: string[]) => {
  const newArray = [...array];
  newArray.sort(() => Math.random() - 0.5);
  return newArray;
};

export const decodeString = (encodedString: string) => {
  return window.atob(encodedString);
};
