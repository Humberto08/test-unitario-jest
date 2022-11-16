const sum = (a, b) => {
    return a + b;
}

const inOneHour = () => {
    const now = Date.now();
    const inOneHourInMilli = 1 * 60 * 60 * 1000;
    return now + inOneHourInMilli
}

module.exports = { sum, inOneHour }

