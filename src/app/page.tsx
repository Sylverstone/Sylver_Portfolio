
import Image from "next/image";
import styles from "@/style/styles.module.css"
import { Metadata } from "next";
import GetDate from "./components/GetDate";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio of Sylvi",
};

export default function Home() {
  return (
	<>
		<header>
			<Image 
			src="/photo_cv.jpg"
			alt="jsp"
			layout="intrinsic"
			width={1000}
			height={1000}
			className={styles.ImageProfil}
			/>
			<p>BIENVENUE DANS MON PORTFOLIO</p>
		</header>
		<main>
			<GetDate preText="Guettez la date en vif : "/>
		</main>
	</>
    
  );
}
