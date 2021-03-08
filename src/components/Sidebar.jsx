import { Divider, SwipeableDrawer, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import logo from "../images/obscury_logo.png";
import SideMenu from "./SideMenu";

const useStyles = makeStyles((theme) => ({
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(3, 0),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-start",
		// backgroundImage: `url(${logo})`,
		// backgroundRepeat: "no-repeat",
		backgroundColor: "rgba(0,0,0,0.7)",
		backgroundPosition: "center",
	},
	title: {
		color: "#121212",
		fontWeight: "500",
	},
	width: {
		Width: "256px",
	},
}));

const Sidebar = ({ open, onOpen }) => {
	const classes = useStyles();

	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

	return (
		<>
			<SwipeableDrawer
				anchor="left"
				open={open}
				onClose={onOpen(false)}
				onOpen={onOpen(true)}
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				className={classes.width}
			>
				<div className={classes.drawerHeader}>
					<img src={logo} alt="obscury logo" width="45" height="45" />
					<Typography variant="h4" className={classes.title}>
						OBSCURY
					</Typography>
				</div>
				<Divider />

				<SideMenu />
			</SwipeableDrawer>
		</>
	);
};

export default Sidebar;
