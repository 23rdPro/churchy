"use client";
import { FacebookProvider, Page } from "react-facebook";
export default function Facebook({ appId }: { appId: string }) {
  return (
    <FacebookProvider appId={appId}>
      <Page
        href="https://web.facebook.com/profile.php?id=100064330643873"
        tabs="timeline"
      />
    </FacebookProvider>
  );
};
