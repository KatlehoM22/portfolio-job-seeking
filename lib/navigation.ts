import { FiFolder, FiMail, FiUser } from "react-icons/fi";
import { ROUTES } from "@/lib/routes";

export const NAV_LINKS = [
  { href: ROUTES.projects, label: "Projects", icon: FiFolder },
  { href: ROUTES.about, label: "About", icon: FiUser },
  { href: ROUTES.contact, label: "Contact", icon: FiMail },
] as const;
