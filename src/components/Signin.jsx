import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
// import {Link as MuiLink} from "@material-ui/core/Link";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(2, 0, 3),
		fontFamily: "Open Sans",
	},
}));

const Signin = () => {
	const classes = useStyles();
	const [values, setValues] = React.useState({
		password: "",
		showPassword: false,
	});

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<>
			<Typography component="h1" variant="button">
				Renseignez vos identifiants
			</Typography>
			<form className={classes.form} noValidate>
				<TextField
					variant="outlined"
					margin="normal"
					fullWidth
					label="Adresse électronique"
				/>

				<FormControl variant="outlined" fullWidth>
					<InputLabel htmlFor="outlined-adornment-password">
						Mot de passe
					</InputLabel>
					<OutlinedInput
						id="outlined-adornment-password"
						type={values.showPassword ? "text" : "password"}
						value={values.password}
						onChange={handleChange("password")}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge="end"
								>
									{values.showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						}
						labelWidth={122}
					/>
				</FormControl>

				<FormControlLabel
					control={<Checkbox value="remember" color="primary" size="small" />}
					label="Rester connecté"
				/>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="secondary"
					className={classes.submit}
				>
					Connexion
				</Button>
				<Link to="/" variant="body2">
					Mot de passe oublié ?
				</Link>
			</form>
		</>
	);
};

export default Signin;
