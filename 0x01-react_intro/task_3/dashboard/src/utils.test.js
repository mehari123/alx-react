import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("returns current year", () => {
    expect(getFullYear()).toBe(2022);
});

test("correct footer copy", () => {
    expect(getFooterCopy(true)).toBe("Holberton Sch");
    expect(getFooterCopy(false)).toBe("Holberton School main ");
});

test("returns right notification", () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});