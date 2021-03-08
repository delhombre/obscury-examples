import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { useGoogleAvatarStyles } from "@mui-treasury/styles/avatar/google";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import React from "react";

const AvatarButtonStyle = () => {
	const tiny = useSizedIconButtonStyles({ padding: 4, childSize: 32 });
	const small = useSizedIconButtonStyles({ padding: 4 });
	const large = useSizedIconButtonStyles({ padding: 8, childSize: 48 });
	const google = useGoogleAvatarStyles({ ringSize: 40, avatarSize: 32 });
	return (
		<div>
			<IconButton classes={tiny} className={google.root}>
				<Avatar src={"https://i.pravatar.cc/300"} />
			</IconButton>
			<IconButton classes={small}>
				<Avatar src={"https://i.pravatar.cc/300"} />
			</IconButton>
			<IconButton classes={large}>
				<Avatar src={"https://i.pravatar.cc/300"} />
			</IconButton>
		</div>
	);
};

export default AvatarButtonStyle;
