import { expect, test } from "@playwright/test";

const pages = [
  {
    name: "home",
    path: "/",
    title: "Katleho Makoro | Junior Software Developer",
    heading: "I'm Katleho Makoro",
  },
  {
    name: "about",
    path: "/about",
    title: "About | Katleho Makoro",
    heading: "Katleho Makoro - Software Developer",
  },
  {
    name: "skills",
    path: "/skills",
    title: "Skills | Katleho Makoro",
    heading: "Tools and practices I ship with",
  },
  {
    name: "projects",
    path: "/projects",
    title: "Projects | Katleho Makoro",
    heading: "Projects I am proud of",
  },
  {
    name: "CV",
    path: "/cv",
    title: "CV | Katleho Makoro",
    heading: "Experience and qualifications",
  },
  {
    name: "contact",
    path: "/contact",
    title: "Contact | Katleho Makoro",
    heading: "Let us build something useful",
  },
] as const;

test.describe("portfolio smoke tests", () => {
  for (const pageDetails of pages) {
    test(`${pageDetails.name} page loads successfully`, async ({ page }) => {
      const response = await page.goto(pageDetails.path);

      expect(response?.ok()).toBe(true);
      await expect(page).toHaveTitle(pageDetails.title);
      await expect(
        page.getByRole("heading", { level: 1, name: pageDetails.heading }),
      ).toBeVisible();
    });
  }
});
