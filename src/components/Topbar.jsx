import {
	AppBar,
	Avatar,
	IconButton,
	InputBase,
	Toolbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Menu, Search } from "@material-ui/icons";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import React from "react";

const useStyles = makeStyles((theme) => ({
	navbar: {
		borderRadius: "10px",
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	avatarButton: {
		marginLeft: theme.spacing(2),
	},
	search: {
		flexGrow: 1,
	},
	icon: {
		color: theme.palette.grey[500],
		fontSize: 20,
		marginRight: theme.spacing(1),
	},
}));

const Topbar = ({ onOpen }) => {
	const classes = useStyles();
	const tiny = useSizedIconButtonStyles({ childSize: 28 });

	return (
		<>
			<AppBar position="static" color="transparent" className={classes.navbar}>
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
						onClick={onOpen(true)}
						onKeyDown={onOpen(true)}
					>
						<Menu />
					</IconButton>
					<InputBase
						placeholder="Rechercher sur obscury…"
						inputProps={{ "aria-label": "search" }}
						className={classes.search}
						startAdornment={<Search className={classes.icon} />}
					/>
					<IconButton
						classes={tiny}
						edge="end"
						className={classes.avatarButton}
						color="inherit"
					>
						<Avatar src={"https://i.pravatar.cc/300"} />
					</IconButton>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Topbar;
