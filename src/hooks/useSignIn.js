import { useMutation, useApolloClient } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
	const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(AUTHENTICATE);
	const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const credentials = { username, password };

    const payload = await mutate({ variables: { credentials } });
		const { data } = payload;

		if (data?.authenticate) {
			// save user's token to storage
			await authStorage.setAccessToken(data.authenticate.accessToken);
			// clear the Apollo Client's cache and re-execute all active queries
			apolloClient.resetStore();
		}

    return payload;
  };

  return [signIn, result];
};

export default useSignIn;
