import { View, StyleSheet } from "react-native";
import FormikTextInput from "../FormikTextInput";
import { Formik } from "formik";

import * as yup from "yup";

import Button from "../Button";

const initialValues = {
  username: "",
  password: "",
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 15,
    backgroundColor: "white",
  },
  fieldContainer: {
    marginBottom: 15,
  },
  container: {
    backgroundColor: "white",
    minHeight: "100%",
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "password must be at least 5 characters"),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.formContainer}>
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
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;
