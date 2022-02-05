import Image from "next/image";
import styles from "../static/css/Home.module.css";
import { useTranslations } from "next-intl";

const Home = () => {
	const t = useTranslations("Home");
	const changeLanguage = (lng) => {
		console.log("lng >>", lng);
		// i18n.changeLanguage(lng);
	};
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				{t("hello")}
				<a href="https://nextjs.org">Next.js!</a>
			</h1>

			<h1>{t("hello")}</h1>
			<div>
				<button type="button" onClick={() => changeLanguage("th")}>
					TH
				</button>
				<button type="button" onClick={() => changeLanguage("en")}>
					EN
				</button>
			</div>
		</div>
	);
};

export function getStaticProps({ locale }) {
	return {
		props: {
			messages: require(`../locales/${locale}.json`),
		},
	};
}

export default Home;
