export function formatDateFromTimestamp(timestamp: string): string {
  const date = new Date(parseInt(timestamp) * 1000) // Convert seconds to milliseconds
  return date.toLocaleString()
}
