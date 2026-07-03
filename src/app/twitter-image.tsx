import { renderOgImage, OG_SIZE } from "../components/ogImage";

export const runtime = "edge";
export const alt = "Harish Chaurasia - AI Engineer";
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage();
}
