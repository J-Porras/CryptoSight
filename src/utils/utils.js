export function formatCurrency(digit, language = "en-US", currency = "USD") {
  const currencyFormatter = Intl.NumberFormat(language, {
    style: "currency",
    currency: currency,
    maximumSignificantDigits: 13,
  });
  return currencyFormatter.format(digit);
}

export function trimString(value) {
  return value.trim();
}

export function getCurrentUserID() {
  return localStorage.getItem("uid");
}
