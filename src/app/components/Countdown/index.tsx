"use client";
import {
  events,
  first,
  isFirst,
  isFutureEvent,
  isLastFriday,
  last,
} from "@/app/utils/countdown";
import { useState } from "react";
import Countdown from "react-countdown";
const ChurchyCountdown = () => {
  const getNextEvent = () => {
    let day = new Date();
    for (let i = 0; i < 7; i++) {
      if (isFirst(day) && isFutureEvent(day, first)) {
        day.setHours(8, 0, 0);
        setEventName(first.name);
        break;
      }
      const event = events.find(
        (e) => e.day === day.getDay() && isFutureEvent(day, e)
      );
      if (event) {
        day.setHours(event.time.hours, 0, 0);
        setEventName(event.name);
        break;
      }
      if (isLastFriday(day) && isFutureEvent(day, last)) {
        day.setHours(22, 0, 0);
        setEventName(last.name);
        break;
      }
      day.setDate(day.getDate() + 1);
    }
    return day.getTime();
  };
  const countdownComplete = () => {
    const nextEvent = getNextEvent();
    if (nextEvent > time) {
      setTime(nextEvent);
    }
  };
  const [time, setTime] = useState(0);
  const [eventName, setEventName] = useState("");
  return (
    <small>
      {`${eventName}  `}
      <Countdown
        date={time}
        key={time}
        onComplete={countdownComplete}
      />
    </small>
  );
};
export default ChurchyCountdown;
