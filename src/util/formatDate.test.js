import formatDate from "./formatDate";

test("more than one week ago", () => {
    const testDate = new Date("2022-01-01T12:05:00");
    const result = formatDate(testDate);
    expect(result).toBe("12:05 pm on 1/1/2022");
});

const sixDaysAgo = Date.now() - (6 * 24 * 60 * 60 * 1000);

test("less than a week ago", () =>{
    const testDate = new Date(sixDaysAgo);
    const result = formatDate(testDate);
    expect(result).toBe("6 days ago");
})

const fiveMinutesAgo = Date.now() - (5 * 60 * 1000);

test("5 minutes ago", () =>{
    const testDate = new Date(fiveMinutesAgo);
    const result = formatDate(testDate);
    expect(result).toBe("5 minutes ago");
})