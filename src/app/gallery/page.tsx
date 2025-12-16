import { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "갤러리",
  description:
    "들꽃치유정원의 사계절 풍경과 아이들이 행복하게 체험하는 모습을 사진으로 만나보세요.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
