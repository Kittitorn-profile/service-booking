// import "../styles/globals.css";

// function MyApp({ Component, pageProps }) {
// 	return <Component {...pageProps} />;
// }

// export default MyApp;

import { NextIntlProvider } from "next-intl";

const MyApp = ({ Component, pageProps }) => {
	return (
		<NextIntlProvider messages={pageProps.messages}>
			<Component {...pageProps} />
		</NextIntlProvider>
	);
};

export default MyApp;
