import { View, StyleSheet } from "react-native";
import { Link } from "react-router-native";
import Text from "../Text";

const styles = StyleSheet.create({
  tabContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    color: "black",
  },
	tabTouchable: {
    flexGrow: 0,
  },
});

const AppBarTab = ({ children, ...props }) => {
  return (
    <Link style={styles.tabTouchable} {...props}>
      <View style={styles.tabContainer}>
        <Text fontWeight="bold" style={styles.tabText}>
          {children}
        </Text>
      </View>
    </Link>
  );
};

export default AppBarTab;
