import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "소개",
  description:
    "들꽃치유정원의 설립 철학, 역사, 그리고 우리가 추구하는 자연 치유의 가치를 소개합니다.",
};

export default function AboutPage() {
  return <AboutClient />;
}
