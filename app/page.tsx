import Link from "next/link";
import { SITE } from "@/lib/constants";
import { ROUTES } from "@/lib/routes";


export default function Home() {
  return (
    <main>
      <h1>Welcome to {SITE.name}'s Portfolio</h1>
      <p>
        Hi! I'm {SITE.name}, a passionate software developer. Explore my{" "}
        <Link href={ROUTES.about}>About</Link>, check out my{" "}
        <Link href={ROUTES.skills}>Skills</Link>, view my{" "}
        <Link href={ROUTES.cv}>CV</Link>, and see some of my{" "}
        <Link href={ROUTES.projects}>Projects</Link>.
      </p>
    </main>
  );
}
