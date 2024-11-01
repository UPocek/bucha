export function getLinkFromName(productName) {
    return productName
        .toLowerCase()
        .replace(/ć/g, 'c')
        .replace(/č/g, 'c')
        .replace(/đ/g, 'd')
        .replace(/š/g, 's')
        .replace(/ž/g, 'z')
        .replace(/-/g, '')
        .replace(/  /g, ' ')
        .replace(/ /g, '-')
        .replace(/[^a-z0-9-]/g, '');
}

export function getCountryFromCode(countryCode) {
    switch (countryCode) {
        case "RS":
            return "Srbija";
        default:
            return "Srbija";
    }
}

export function generateSKUFromName(productName) {
    // Step 1: Extract the first 3 letters of the product name, make them uppercase
    const prefix = productName.replace(/\s+/g, "").substring(0, 3).toUpperCase();

    // Step 2: Generate a hash code based on the product name for a consistent 4-digit number
    let hash = 0;
    for (let i = 0; i < productName.length; i++) {
        hash = productName.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Convert the hash to a positive 4-digit number
    const uniqueNumber = Math.abs(hash % 10000).toString().padStart(4, '0');

    // Combine the prefix and unique number to form the SKU
    return `${prefix}-${uniqueNumber}`;
}
