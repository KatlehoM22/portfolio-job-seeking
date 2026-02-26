import Link from "next/link";
import { SITE } from "../../lib/constants";
import { ROUTES } from "../../lib/routes";

export function Header() {
    return (
        <header style={{ padding: "16px 0", borderBottom: "1px solid #eee" }}>
            <nav
                style={{                                // <--- add '=' here
                    maxWidth: "1100px",
                    margin: "0 auto",
                    display: "flex",
                    padding: "0 24px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "16px",
                }}
            >
                <Link href={ROUTES.home} style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    {SITE.name}
                </Link>

                <div style={{ display: "flex", gap: "16px" }}>
                    <Link href={ROUTES.about}>About</Link>
                    <Link href={ROUTES.skills}>Skills</Link>
                    <Link href={ROUTES.cv}>CV</Link>
                    <Link href={ROUTES.projects}>Projects</Link>
                    <Link href={ROUTES.contact}>Contact</Link>
                </div>
            </nav>
        </header>
    );
}