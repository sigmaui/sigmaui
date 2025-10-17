export function getGradientColor(colors: string[]) {
  let stops = '';
  for (let i = 1; i < colors.length - 1; i += 1) {
    stops += `${colors[i]} ${(i / (colors.length - 1)) * 100}%, `;
  }
  return `${colors[0]} 0%, ${stops}${colors[colors.length - 1]} 100%`;
}

export function linearGradient(deg: number, ...colors: string[]) {
  return `linear-gradient(${deg}deg, ${getGradientColor(colors)})`;
}

export function radialGradient(...colors: string[]) {
  return `radial-gradient(circle, ${getGradientColor(colors)})`;
}
