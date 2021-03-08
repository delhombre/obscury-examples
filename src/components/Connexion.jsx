import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlined from "@material-ui/icons/LockOutlined";
import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Registration from "./Registration";
import Signin from "./Signin";

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
}));

const Connexion = () => {
	const classes = useStyles();
	return (
		<Container maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<BrowserRouter>
					<Grid container justify="space-around">
						<Button variant="text">
							<Link to="/connexion">Connexion</Link>
						</Button>
						<Button variant="text">
							<Link to="/inscription">Inscription</Link>
						</Button>
					</Grid>
					<Avatar className={classes.avatar}>
						<LockOutlined />
					</Avatar>
					<Route path="/connexion" component={Signin} />
					<Route path="/inscription" component={Registration} />
				</BrowserRouter>
			</div>
		</Container>
	);
};

export default Connexion;
