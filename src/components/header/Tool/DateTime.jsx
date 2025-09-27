import React, { useEffect, useState } from "react";
import styles from "../header.module.css";

export default function DateTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    // تحديث كل ثانية
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // تنسيقات للتاريخ
  const dateOptions = {
    weekday: "short", // Wed
    month: "short", // Sep
    day: "2-digit", // 17
    year: "numeric", // 2025
  };

  const formattedDate = dateTime.toLocaleDateString("en-US", dateOptions);

  // تنسيقات للوقت مع AM/PM
  let hours = dateTime.getHours();
  const minutes = String(dateTime.getMinutes()).padStart(2, "0");
  const seconds = String(dateTime.getSeconds()).padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // لو 0 يبقى 12

  const formattedTime = `${String(hours).padStart(
    2,
    "0"
  )}:${minutes}:${seconds} ${ampm}`;

  return (
    <div className={styles.datetimecontainer}>
      <h1 className={styles.headtext}>كاشير</h1>
      <div className={styles.datetime}>
        <div className={styles.date}>{formattedDate}</div>|
        <div className={styles.time}>{formattedTime}</div>
      </div>
    </div>
  );
}
