import {
  convertTimeStampToTime,
  shuffle,
  encodeString,
  decodeString,
} from "utils";

describe("utils", () => {
  test("shuffle(array) - should be equal length", () => {
    const array = ["a", "b", "c"];
    const newArray = shuffle(array);
    expect(newArray.length).toBe(array.length);
  });

  test("convertTimeStampToTime(timestamp)) - should be convert hh:mm:ss", () => {
    const timestamp1 = new Date("2022-11-01 18:00:00").getTime();
    const timestamp2 = new Date("2022-11-01 19:02:31").getTime();

    const result = convertTimeStampToTime(timestamp1, timestamp2);
    expect(result).toBe("01:02:31");
  });

  test("decode(encodedString) - should be equal encode(value)", () => {
    const value = "TEST string";
    const encodedString = encodeString(value);
    const decodedString = decodeString(encodedString);

    expect(decodedString).toBe(value);
  });
});
