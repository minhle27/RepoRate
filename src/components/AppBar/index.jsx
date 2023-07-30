import { View, ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";

import theme from "../../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
  scrollView: {
    flexDirection: "row",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/sign-in">Sign In</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
