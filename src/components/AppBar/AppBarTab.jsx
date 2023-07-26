import { View, StyleSheet } from "react-native";
import Text from "../Text";

const styles = StyleSheet.create({
	tabContainer: {
		paddingHorizontal: 15,
		paddingVertical: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	tabText: {
		color: 'black',
	},
});

const AppBarTab = ({ children }) => {
  return (
		<View style={styles.tabContainer}>
			<Text fontWeight="bold" style={styles.tabText}>
				{children}
			</Text>
		</View>
	);
};

export default AppBarTab;
