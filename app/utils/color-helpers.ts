function hexToRgb(hex: string) {
  hex = hex.replace("#", "");
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

function getYIQ([r, g, b]: number[]) {
  return (r * 299 + g * 587 + b * 114) / 1000;
}

export function getTextColor(hex: string) {
  const rgb = hexToRgb(hex);
  const yiq = getYIQ(rgb);
  return yiq >= 128 ? "fg.base" : "fg.light";
}
