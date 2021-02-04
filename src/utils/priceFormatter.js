export const priceFormatter = (price) => {
    const formatted = new Intl.NumberFormat().format(price);
    return formatted;
}