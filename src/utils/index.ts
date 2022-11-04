export const shuffle = (array: string[]) => {
  const newArray = [...array];
  newArray.sort(() => Math.random() - 0.5);
  return newArray;
};

export const encodeString = (value: string) => {
  return window.btoa(value);
};

export const decodeString = (encodedString: string) => {
  return window.atob(encodedString);
};

const getPadNumberString = (value: number) => {
  return value < 10 ? String(value).padStart(2, "0") : value.toString();
};

export const convertTimeStampToTime = (
  timestamp: number,
  currentTimestamp: number
) => {
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;

  const diff = currentTimestamp - timestamp;
  const hours = Math.trunc(diff / HOUR);

  const minDiff = diff - HOUR * hours;
  const minutes = Math.trunc(minDiff / MINUTE);

  const secondDiff = minDiff - MINUTE * minutes;
  const seconds = Math.trunc(secondDiff / SECOND);

  return `${getPadNumberString(hours)}:${getPadNumberString(
    minutes
  )}:${getPadNumberString(seconds)}`;
};
