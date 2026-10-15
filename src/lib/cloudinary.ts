/** Preserve existing Cloudinary transforms while providing browser-selected widths. */
export const cloudinarySrcSet = (url: string, widths: number[]) =>
  widths.map((width) => `${url.replace(/w_\d+/, `w_${width}`)} ${width}w`).join(', ');