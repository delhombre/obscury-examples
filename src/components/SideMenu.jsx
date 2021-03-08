import { FormControlLabel, Switch } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import {
	Album,
	Call,
	Category,
	Favorite,
	Home,
	Payment,
	PermIdentity,
	QueueMusic,
	ShoppingCart,
	Star,
	TrendingUp,
} from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		minWidth: 256,
		backgroundColor: theme.palette.background.paper,
	},
}));

const SideMenu = () => {
	const classes = useStyles();
	const [selectedIndex, setSelectedIndex] = React.useState(1);
	const [state, setState] = React.useState(true);

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
	};

	return (
		<div className={classes.root}>
			<List component="nav" aria-label="main mailbox folders">
				<ListItem
					button
					selected={selectedIndex === 0}
					onClick={(event) => handleListItemClick(event, 0)}
				>
					<ListItemIcon>
						<Home />
					</ListItemIcon>
					<ListItemText primary="Accueil" />
				</ListItem>

				<ListItem
					button
					selected={selectedIndex === 1}
					onClick={(event) => handleListItemClick(event, 1)}
				>
					<ListItemIcon>
						<Star />
					</ListItemIcon>
					<ListItemText primary="Premium" />
				</ListItem>

				<ListItem
					button
					selected={selectedIndex === 2}
					onClick={(event) => handleListItemClick(event, 1)}
				>
					<ListItemIcon>
						<QueueMusic />
					</ListItemIcon>
					<ListItemText primary="Playlist" />
				</ListItem>

				<ListItem
					button
					selected={selectedIndex === 3}
					onClick={(event) => handleListItemClick(event, 1)}
				>
					<ListItemIcon>
						<Album />
					</ListItemIcon>
					<ListItemText primary="Album" />
				</ListItem>

				<ListItem
					button
					selected={selectedIndex === 4}
					onClick={(event) => handleListItemClick(event, 1)}
				>
					<ListItemIcon>
						<TrendingUp />
					</ListItemIcon>
					<ListItemText primary="Classements" />
				</ListItem>

				<ListItem
					button
					selected={selectedIndex === 5}
					onClick={(event) => handleListItemClick(event, 1)}
				>
					<ListItemIcon>
						<Category />
					</ListItemIcon>
					<ListItemText primary="Catégories" />
				</ListItem>
			</List>

			<Divider />

			<List component="nav" aria-label="secondary mailbox folder">
				<ListItem
					button
					selected={selectedIndex === 6}
					onClick={(event) => handleListItemClick(event, 1)}
				>
					<ListItemIcon>
						<PermIdentity />
					</ListItemIcon>
					<ListItemText primary="Mon compte" />
				</ListItem>

				<ListItem
					button
					selected={selectedIndex === 7}
					onClick={(event) => handleListItemClick(event, 1)}
				>
					<ListItemIcon>
						<Favorite />
					</ListItemIcon>
					<ListItemText primary="Mes favoris" />
				</ListItem>

				<ListItem
					button
					selected={selectedIndex === 8}
					onClick={(event) => handleListItemClick(event, 1)}
				>
					<ListItemIcon>
						<ShoppingCart />
					</ListItemIcon>
					<ListItemText primary="Mon panier" />
				</ListItem>

				<ListItem
					button
					selected={selectedIndex === 9}
					onClick={(event) => handleListItemClick(event, 1)}
				>
					<ListItemIcon>
						<Payment />
					</ListItemIcon>
					<ListItemText primary="Mes achats" />
				</ListItem>
			</List>
			<Divider />

			<List component="nav">
				<ListItem
					button
					selected={selectedIndex === 10}
					onClick={(event) => handleListItemClick(event, 1)}
				>
					<ListItemIcon>
						<Call />
					</ListItemIcon>
					<ListItemText primary="Contactez-nous !" />
				</ListItem>

				<FormControlLabel
					control={
						<Switch
							checked={state.antoine}
							onChange={handleChange}
							name="antoine"
						/>
					}
					label="Thème Sombre"
				/>
			</List>
		</div>
	);
};

export default SideMenu;
