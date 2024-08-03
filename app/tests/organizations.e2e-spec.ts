// /app/tests/organizations.e2e-spec.ts
import { expect, test } from "@playwright/test";
import { BASE_API_URL } from "~/data/shared";

test("update organization details", async ({ page }) => {
  // Navigate to the organizations view
  await page.goto(`${BASE_API_URL}/organizations`);
  await expect(page.locator(".e2e-page-header")).toBeVisible();

  // Click on the first organization
  const firstOrg = page.locator(".e2e-navigation-card").first();
  await firstOrg.click();

  // Verify the organization details page is visible
  const orgDetails = await page.locator(".e2e-org-detail");
  await expect(orgDetails).toBeVisible();

  // Update a detail of the organization
  const nameField = page.locator(".e2e-org-name");
  await nameField.fill("Updated Name");
  await page.click("text=Update Organization");

  // Verify the update
  const successMessage = await page.locator(".e2e-toast-message");
  await expect(successMessage).toContainText("Organization updated successfully");

  // Refresh and verify the email is updated
  await page.reload();
  await firstOrg.click();
  await expect(nameField).toHaveValue("Updated Name");
});
