export const data = [];

for (let idx = 0; idx < 10000; idx++) {
    data.push({
        value: Math.floor(Math.random() * 100) + 1,
        category: new Date(2000, 0, idx)
    });
}
data.push({ value: -10, category: "1999-12-01T23:00:00.000Z"})
