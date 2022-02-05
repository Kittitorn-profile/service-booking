import { NextIntlProvider } from "next-intl";
import { Header } from "../components/layout";

const MyApp = ({ Component, pageProps }) => {
	return (
		<NextIntlProvider messages={pageProps.messages}>
			<Header />
			<Component {...pageProps} />
		</NextIntlProvider>
	);
};

export default MyApp;
