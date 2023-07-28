import { Pressable, View, StyleSheet } from "react-native";

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
		borderRadius: theme.roundness,
		backgroundColor: theme.colors.primary,
		minWidth: 64,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 20,
		paddingVertical: 15,
	},
  text: {
    color: "white",
  },
});

const Button = ({ children, style, ...props }) => {
	const buttonStyle = [styles.container, style];

  return (
    <Pressable {...props}>
      <View style={buttonStyle}>
        <Text style={styles.text} fontWeight="bold" >
					{children}
				</Text>
      </View>
    </Pressable>
  );
};

export default Button;
