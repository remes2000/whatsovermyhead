import { Metadata } from "next";
import Root from "./_components/root";

export const metadata: Metadata = {
  title: "What's over my head?",
  description: "Hearing load airplane noise? Let's see what's above you!",
};

export default function Home() {
  return (
    <main>
      <h1>What's over you head?</h1>
      <Root />
    </main>
  );
}
