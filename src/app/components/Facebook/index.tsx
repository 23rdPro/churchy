"use server";
import { FacebookProvider, Page } from "react-facebook";
export default async function Facebook() {
  const server = async () => {
    const facebookId = process.env.FACEBOOK;
    return facebookId;
  };
  const id = await server()
  return (
    <FacebookProvider appId={id!}>
      <Page
        href="https://web.facebook.com/profile.php?id=100064330643873"
        tabs="timeline"
      />
    </FacebookProvider>
  );
}
