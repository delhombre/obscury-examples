import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme) => ({
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const Registration = () => {
	// const [values, setValues] = React.useState({
	// 	password: "",
	// 	showPassword: false,
	// });

	// const handleChange = (prop) => (event) => {
	// 	setValues({ ...values, [prop]: event.target.value });
	// };

	// const handleClickShowPassword = () => {
	// 	setValues({ ...values, showPassword: !values.showPassword });
	// };

	// const handleMouseDownPassword = (event) => {
	// 	event.preventDefault();
	// };

	const classes = useStyles();

	return (
		<>
			<Typography component="h1" variant="button">
				Nouveau sur OBSCURY ?
			</Typography>
			<form className={classes.form} noValidate>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							autoComplete="fname"
							name="firstName"
							variant="outlined"
							required
							fullWidth
							id="firstName"
							label="Nom d'utilisateur"
							type="text"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							required
							fullWidth
							id="email"
							label="Adresse Email"
							name="email"
							autoComplete="email"
							type="email"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							required
							fullWidth
							name="password"
							label="Mot de passe"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant="outlined"
							required
							fullWidth
							name="confirm_password"
							label="Confirmation du mot de passe"
							type="password"
							id="confirm_password"
							autoComplete="current-password"
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControlLabel
							control={
								<Checkbox value="acceptTerms" color="primary" size="small" />
							}
							label="J'accepte les conditions générales d'utilisation."
						/>
					</Grid>
				</Grid>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					className={classes.submit}
				>
					Inscrivez-vous
				</Button>
			</form>
		</>
	);
};

export default Registration;
