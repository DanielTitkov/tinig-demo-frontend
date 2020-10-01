export const validateNumberInBounds = (n, min, max) => {
    if (n < min || n > max) {
        return `must be between ${min} and ${max}`;
    }
};
