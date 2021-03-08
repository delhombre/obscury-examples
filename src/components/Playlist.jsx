import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
// import GoogleFontLoader from "react-google-font-loader";
import { makeStyles } from "@material-ui/core/styles";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import { Column, Item, Row } from "@mui-treasury/components/flex";
import { Info, InfoSubtitle, InfoTitle } from "@mui-treasury/components/info";
import { useGrowAvatarStyles } from "@mui-treasury/styles/avatar/grow";
import { useMusicInfoStyles } from "@mui-treasury/styles/info/music";
import React from "react";

const useStyles = makeStyles(() => ({
	text: {
		display: "flex",
		alignItems: "center",
		"& > svg": {
			fontSize: 18,
			color: "#888",
			marginRight: 4,
		},
	},
}));

export const MusicListItemDemo = React.memo(function MusicListItem() {
	const commonProps = {
		blur: "12px",
		radius: 16,
		size: 48,
		opacity: 0.6,
	};
	const src =
		"https://cdn1.vectorstock.com/i/1000x1000/85/40/music-abstract-poster-cover-1980s-style-background-vector-11958540.jpg";
	const avatarStyles = useGrowAvatarStyles({ src, ...commonProps });
	const src2 =
		"https://www.designformusic.com/wp-content/uploads/2016/04/orion-trailer-music-album-cover-design.jpg";
	const avatarStyles2 = useGrowAvatarStyles({ src: src2, ...commonProps });
	const styles = useStyles();
	return (
		<>
			{/* <NoSsr>
				<GoogleFontLoader fonts={[{ font: "Questrial" }]} />
			</NoSsr> */}
			<Column gap={2} width={"100%"}>
				<Row>
					<Item>
						<div className={avatarStyles.root}>
							<Avatar src={src} />
						</div>
					</Item>
					<Info useStyles={useMusicInfoStyles} minWidth={0}>
						<InfoTitle>Money Longer</InfoTitle>
						<InfoSubtitle>Lil Uzi Vert</InfoSubtitle>
					</Info>
					<Item position={"right"}>
						<IconButton size={"small"}>
							<MoreHoriz />
						</IconButton>
					</Item>
				</Row>
				<Row mt={2}>
					<Item>
						<div className={avatarStyles2.root}>
							<Avatar src={src2} />
						</div>
					</Item>
					<Info useStyles={useMusicInfoStyles} minWidth={0}>
						<InfoTitle>Pilé Pilé Jason Pilé</InfoTitle>
						<InfoSubtitle>Michael Jackson</InfoSubtitle>
						{/* <InfoCaption className={styles.text}>
							<PlayCircleFilled /> playing...
						</InfoCaption> */}
					</Info>
					<Item position={"right"}>
						<IconButton size={"small"}>
							<MoreHoriz />
						</IconButton>
					</Item>
				</Row>
			</Column>
		</>
	);
});
