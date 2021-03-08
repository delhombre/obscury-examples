import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import React from "react";
import Connexion from "./components/Connexion";
import Footer from "./components/Footer";
import Titillium from "./fonts/Titillium_Web/TitilliumWeb-Bold.ttf";

const titillium = {
	fontFamily: "Titillium Web",
	fontStyle: "bold",
	src: `
		url(${Titillium}) format('ttf')`,
};

const theme = createMuiTheme({
	typography: {
		fontFamily: "Titillium Web, Open Sans",
		htmlFontSize: 14,
	},
	overrides: {
		MuiCssBaseline: {
			"@global": {
				"@font-face": [titillium],
			},
		},
	},
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			{/* <Navbar />
			<Tabs />
			<MusicListItemDemo /> */}
			<Connexion />
			<Footer />
		</ThemeProvider>
	);
};

export default App;
