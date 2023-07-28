import { View, StyleSheet, Image } from "react-native";
import theme from "../../theme";
import Text from "../Text";
import StatInfo from "./StatInfo";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
  },
  topContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: theme.roundness,
  },
  avatarContainer: {
    flexGrow: 0,
    marginRight: 20,
  },
  languageContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  contentContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  nameText: {
    marginBottom: 5,
  },
  descriptionText: {
    flexGrow: 1,
  },
  languageText: {
    color: "white",
    backgroundColor: theme.colors.languageBox,
    borderRadius: theme.roundness,
    paddingVertical: 3,
    paddingHorizontal: 6,
    flexGrow: 0,
  },
});

const RepositoryItem = ({ repository }) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = repository;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: ownerAvatarUrl }} style={styles.avatar} />
        </View>
        <View style={styles.contentContainer}>
          <Text
            style={styles.nameText}
            fontWeight="bold"
            fontSize="subheading"
            numberOfLines={1}
          >
            {fullName}
          </Text>
          <Text style={styles.descriptionText} color="textSecondary">
            {description}
          </Text>
          {language ? (
            <View style={styles.languageContainer}>
              <Text style={styles.languageText}>{language}</Text>
            </View>
          ) : null}
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <StatInfo label="Stars" count={stargazersCount} />
        <StatInfo label="Forks" count={forksCount} />
        <StatInfo label="Reviews" count={reviewCount} />
        <StatInfo label="Rating" count={ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;
