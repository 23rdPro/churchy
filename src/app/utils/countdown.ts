export const isFirst = (date: any) => date.getDate() === 1;

export const isLastFriday = (date: any) => {
  const lDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return lDay.getDay() === 5 && lDay.getDate() >= 25 && lDay.getDate() <= 31;
};
export const isFutureEvent = (date: Date, event: any) => {
  const currentDate = new Date();
  const eventDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    event?.time.hours,
    0,
    0
  );
  return eventDate > currentDate;
};
export const first = { day: 1, time: { hours: 8 }, name: "New Moon" };
export const last = { day: 5, time: { hours: 22 }, name: "Night of Mercy" };
type TimeType = {
  hours: number,
  minutes: number,
}
type EventType = {
  day: number,
  time: TimeType,
  name: string 
};
export const events: Array<EventType> = [
  { day: 0, time: { hours: 8, minutes: 0 }, name: "Super Service" }, // Sunday 8am
  { day: 3, time: { hours: 18, minutes: 0 }, name: "Communion Service" }, // Wednesday 6pm
  { day: 4, time: { hours: 9, minutes: 0 }, name: "Transformed Eve" }, // Thursday 9am
  { day: 5, time: { hours: 8, minutes: 0 }, name: "Healing Service" }, // Friday 8am
];
