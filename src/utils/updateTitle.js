/**
 * Updates the document title dynamically based on the current page.
 * @param {string} title - The title to set for the current page.
 */
export function updatePageTitle(title) {
    const baseTitle = "MegaBuy"; // Base title for the website
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;
};