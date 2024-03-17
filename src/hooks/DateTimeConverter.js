export default function convertToDateTime(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString(); // returns date and time in the format: "MM/DD/YYYY, HH:MM:SS AM/PM"
}
