const activityDateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "UTC",
    timeZoneName: "short",
});

export function formatActivityDate(value: string | Date | null): string {
    if (!value) return "Not set";
    const date = value instanceof Date ? value : new Date(value);
    return Number.isNaN(date.getTime()) ? "Date unavailable" : activityDateFormatter.format(date);
}