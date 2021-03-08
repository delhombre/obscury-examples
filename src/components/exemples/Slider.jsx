import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ParallaxSlide from "@mui-treasury/components/slide/parallax";

const useStyles = makeStyles(() => ({
	root: {
		fontSize: 48,
		fontWeight: 900,
	},
}));

const ParallaxSlideDemo = () => {
	const classes = useStyles();
	const data = [
		{
			id: 1,
			boxProps: {
				bgcolor: "#c7ffcf",
			},
			title: "Parallax #1",
			subtitle: "Parallax #2",
		},
		{
			id: 2,
			boxProps: {
				bgcolor: "#ffcaa9",
			},
			title: "Parallax #1",
			subtitle: "Parallax #2",
		},
		{
			id: 3,
			boxProps: {
				bgcolor: "#c6d4ff",
			},
			title: "Parallax #1",
			subtitle: "Parallax #2",
		},
	];
	return (
		<Box width={"100%"}>
			<ParallaxSlide>
				{({ injectStyle }) =>
					data.map(({ boxProps, title, subtitle, id }, i) => (
						<Box key={id} {...boxProps}>
							<Typography
								noWrap
								align={"center"}
								className={classes.root}
								style={injectStyle(i, 80)}
							>
								{title}
							</Typography>
							<Typography
								noWrap
								align={"center"}
								className={classes.root}
								style={injectStyle(i, 40)}
							>
								{subtitle}
							</Typography>
							<Typography align={"center"} className={classes.root}>
								Static Text
							</Typography>
						</Box>
					))
				}
			</ParallaxSlide>
		</Box>
	);
};

export default ParallaxSlideDemo;
