import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import React from "react";

const Footer = () => {
	return (
		<Box mt={8}>
			<Typography variant="body2" color="textSecondary" align="center">
				{"Copyright © "}
				<Link color="inherit" href="#">
					OBSCURY
				</Link>{" "}
				{new Date().getFullYear()}
				{"."}
			</Typography>
		</Box>
	);
};

export default Footer;
