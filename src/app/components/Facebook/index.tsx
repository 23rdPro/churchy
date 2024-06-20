"use client";
import { FacebookProvider, Page } from "react-facebook";
type FacebookType = {
  appId: string;
};
export default function Facebook({ appId }: FacebookType) {
  return (
    <FacebookProvider appId={appId}>
      <Page
        href="https://web.facebook.com/profile.php?id=100064330643873"
        tabs="timeline"
        width={2999}
        height={595}
      />
    </FacebookProvider>
  );
}
