import { View, StyleSheet } from "react-native";
import FormikTextInput from "../FormikTextInput";
import { Formik } from "formik";

import Button from "../Button";

const initialValues = {
	username: '',
	password: ''
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
		backgroundColor: 'white'
	},
	fieldContainer: {
		marginBottom: 15,
	},
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
				<FormikTextInput name="username" placeholder="Username" />
			</View>
			<View style={styles.fieldContainer}>
				<FormikTextInput 
					name="password"
					placeholder="Password"
					secureTextEntry
				/>
			</View>
			<Button onPress={onSubmit}>Sign in</Button>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={onSubmit}
		>
			{({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
		</Formik>
	)
};

export default SignIn;
