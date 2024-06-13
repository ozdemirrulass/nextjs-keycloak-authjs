import NextAuth from "next-auth"
import Keycloak from "next-auth/providers/keycloak";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Keycloak({
      jwks_endpoint: `${process.env.NEXT_CONTAINER_KEYCLOAK_ENDPOINT}/realms/myrealm/protocol/openid-connect/certs`,
      wellKnown: undefined,
      clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
      issuer: `${process.env.NEXT_LOCAL_KEYCLOAK_URL}/realms/${process.env.NEXT_PUBLIC_KEYCLOAK_REALM}`,
      authorization: {
        params: {
          scope: "openid email profile",
        },
        url: `${process.env.NEXT_LOCAL_KEYCLOAK_URL}/realms/myrealm/protocol/openid-connect/auth`,
      },
      token: `${process.env.NEXT_CONTAINER_KEYCLOAK_ENDPOINT}/realms/myrealm/protocol/openid-connect/token`,
      userinfo: `${process.env.NEXT_CONTAINER_KEYCLOAK_ENDPOINT}/realms/myrealm/protocol/openid-connect/userinfo`,
    }),
  ],
});
