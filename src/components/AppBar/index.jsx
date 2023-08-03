import { View, ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";

import theme from "../../theme";
import AppBarTab from "./AppBarTab";

import { useQuery, useApolloClient } from "@apollo/client";
import { GET_CURRENT_USER } from "../../graphql/queries";
import useAuthStorage from "../../hooks/useAuthStorage";
import { useNavigate } from "react-router-native";

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
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const { data } = useQuery(GET_CURRENT_USER);
  const currentUser = data?.me;

  const onSignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate('/');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <AppBarTab to="/">Repositories</AppBarTab>
        {currentUser ? (
          <AppBarTab onPress={onSignOut}>Sign out</AppBarTab>
        ) : (
          <AppBarTab to="/sign-in">Sign In</AppBarTab>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
