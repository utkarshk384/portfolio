const isHEX = (color: string) => {
  let hex = false;
  if (color.match(/#[0-9A-Fa-f]{6}/)) hex = true;
  return hex;
};

export function toRGB(color: string) {
  if (isHEX(color)) {
    color = color.replace("#", "");
    const r = parseInt(color.slice(0, 2), 16);
    const g = parseInt(color.slice(2, 4), 16);
    const b = parseInt(color.slice(4, 6), 16);
    return [r, g, b];
  }
  return null;
}
