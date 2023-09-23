"use client";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  return (
    <h1
      onClick={() => {
        signIn();
      }}
    >
      fdsaf
    </h1>
  );
}
