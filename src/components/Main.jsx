import { Text, StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList/RepositoryList";
import AppBar from "./AppBar/AppBar";

import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Text>Rate Repository Application</Text>
      <RepositoryList />
    </View>
  );
};

export default Main;
