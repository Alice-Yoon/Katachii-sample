export const millisecToDate = (milliSec) => {
    const now = new Date(milliSec);
    const date = now.toLocaleString();
    return date
}