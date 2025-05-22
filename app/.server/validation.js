export function validateText(text) {
  if (text.length < 3) {
    return "Invalid input";
  }
  return null;
}

export function validateNumber(num) {
  if (Number(num) <= 0) {
    return "Value cannot be zero";
  }
}
