import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

const Navbar = () => {
	const classes = useStyles();

	const [open, setOpen] = useState(false);

	const toggleDrawer = (open) => (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setOpen(open);
	};

	return (
		<div className={classes.root}>
			<Topbar onOpen={toggleDrawer} />
			<Sidebar open={open} onOpen={toggleDrawer} />
		</div>
	);
};

export default Navbar;
