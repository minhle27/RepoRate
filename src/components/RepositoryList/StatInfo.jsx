import { View, StyleSheet } from "react-native";
import Text from "../Text";
import formatter from "../../utils/formatStat";

const styles = StyleSheet.create({
	countItem: {
		justifyContent: 'center',
		flexGrow: 0,
		alignItems: 'center',
		paddingHorizontal: 15,
	},
	stat: {
		marginBottom: 5,
	}
});

const StatInfo = ({ label, count }) => {
  return (
		<View style={styles.countItem}>
			<Text style={styles.stat} fontWeight="bold">{formatter(count)}</Text>
			<Text color="textSecondary">{label}</Text>
		</View>
	);
};

export default StatInfo;
