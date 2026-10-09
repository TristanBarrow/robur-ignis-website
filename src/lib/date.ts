// Frontmatter dates parse as UTC midnight, so format in UTC to avoid
// showing the previous day in western time zones.
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
