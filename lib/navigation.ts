import { FiCode, FiFileText, FiFolder, FiMail, FiUser } from "react-icons/fi";
import { ROUTES } from "@/lib/routes";

export const NAV_LINKS = [
  { href: ROUTES.about, label: "About", icon: FiUser },
  { href: ROUTES.skills, label: "Skills", icon: FiCode },
  { href: ROUTES.projects, label: "Projects", icon: FiFolder },
  { href: ROUTES.cv, label: "CV", icon: FiFileText },
  { href: ROUTES.contact, label: "Contact", icon: FiMail },
] as const;
