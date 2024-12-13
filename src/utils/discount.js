/**
 * Calculates a discount percentage if applicable.
 * @param {number} price - The original price of the product.
 * @param {number} discountedPrice - The discounted price of the product.
 * @returns {number | null} - The discount percentage, or null if no discount.
 */
export function calculateDiscount(price, discountedPrice) {
    if (price > discountedPrice) {
        return Math.round(((price - discountedPrice) / price) * 100);
    }
    return null;
};