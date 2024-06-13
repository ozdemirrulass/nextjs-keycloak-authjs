import { auth } from "@/auth";
import { SignIn } from "../components/sign-in";

export default async function Home() {
  const session = await auth();
  if (session) {
    return (
      <div>
        <div>Your name is {session.user?.name}</div>
      </div>
    );
  }
  return (
    <div>
      <SignIn />
    </div>
  );
}
