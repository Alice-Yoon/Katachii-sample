export const getTmrDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const toLocalTime = tomorrow.toLocaleDateString('ko-KR');
    return toLocalTime;
}