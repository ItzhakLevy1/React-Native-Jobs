export const checkImageURL = (url) => {
  if (!url) {
    console.log("❌ Image URL is missing or undefined:", url);
    return false;
  }

  // Check if the URL is a valid HTTP/HTTPS link
  const pattern = new RegExp("^https?:\\/\\/.+", "i"); // Removes file extension check

  const isValid = pattern.test(url);
  console.log(`🔍 Checking URL: ${url} → Valid: ${isValid}`);
  return isValid;
};
