import Avatar from "@material-ui/core/Avatar";
import NoSsr from "@material-ui/core/NoSsr";
import { Item, Row } from "@mui-treasury/components/flex";
import { Info, InfoSubtitle, InfoTitle } from "@mui-treasury/components/info";
import { useDynamicAvatarStyles } from "@mui-treasury/styles/avatar/dynamic";
import { useTrendInfoStyles } from "@mui-treasury/styles/info/trend";
import React from "react";
import GoogleFontLoader from "react-google-font-loader";

export const TrendyListItemDemo = React.memo(function TrendyListItem() {
	const avatarStyles = useDynamicAvatarStyles({ size: 48, radius: 6 });
	return (
		<>
			<NoSsr>
				<GoogleFontLoader fonts={[{ font: "Manrope", weights: [500, 700] }]} />
			</NoSsr>
			<Row gap={3}>
				<Item>
					<Avatar
						variant={"rounded"}
						classes={avatarStyles}
						src={
							"https://imgcache.dealmoon.com/thumbimg.dealmoon.com/dealmoon/923/a5d/cff/399ac7fa0f6e82bf24f9363.jpg_300_300_2_f169.jpg"
						}
					/>
				</Item>
				<Info useStyles={useTrendInfoStyles}>
					<InfoTitle>Beats X Super Fast Charge</InfoTitle>
					<InfoSubtitle>Starts from $250</InfoSubtitle>
				</Info>
			</Row>
		</>
	);
});
