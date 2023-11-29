export function choosePastelColor(): string {
    const color = Array.from({ length: 3 }, () => Math.floor(Math.random() * 256 / 3) * 3);
    return `#${color.map(c => c.toString(16).padStart(2, '0')).join('')}`;
  }