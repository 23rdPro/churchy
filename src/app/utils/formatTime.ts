export default function formatTime({ timestamp }: { timestamp: number }) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = new Date(timestamp);
  return date.toLocaleString("en-US", options);
};
