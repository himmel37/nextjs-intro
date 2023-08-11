"use client";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  return (
    <div>
      <nav>
        <img src="/vercel.svg" alt="logo" />
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      <style jsx>{`
        nav {
          background-color: red;
        }
      `}</style>
    </div>
  );
}
