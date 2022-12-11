import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import Head from "next/head";
import { store } from "../redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<Head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
				/>
			</Head>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</ThemeProvider>
	);
}
