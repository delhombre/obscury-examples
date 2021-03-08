import Inbox from "@material-ui/icons/Inbox";
import Info from "@material-ui/icons/Info";
import LocalOffer from "@material-ui/icons/LocalOffer";
import People from "@material-ui/icons/People";
import { GmailTabItem, GmailTabs } from "@mui-treasury/components/tabs/gmail";
import React from "react";

const GmailTabsDemo = () => {
	const [index, setIndex] = React.useState(0);
	return (
		<GmailTabs value={index} onChange={(_, value) => setIndex(value)}>
			<GmailTabItem icon={<Inbox />} label={"Primary"} />
			<GmailTabItem
				icon={<People />}
				label={"Social"}
				tag={"2 new"}
				subLabel={"Youtube, LinkedIn"}
			/>
			<GmailTabItem
				icon={<LocalOffer />}
				label={"Promotions"}
				subLabel={"Pattern Matching, Medium Daily"}
			/>
			<GmailTabItem icon={<Info />} label={"Updates"} tag={"15 new"} />
		</GmailTabs>
	);
};

export default GmailTabsDemo;
