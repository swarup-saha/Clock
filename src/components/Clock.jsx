import { useEffect, useState } from "react";

export default function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  function updateTimer() {
    let newTime = new Date();
    setCurrentTime(newTime);
  }
  //componentDidmount
  useEffect(function () {
    // console.log("component did mount before the return");
    const timeInterval = setInterval(updateTimer, 1000);

    return function () {
      // console.log("Component will mount till the body");
      clearInterval(timeInterval, updateTimer);
    };
  });
  return (
    <h1>
      {currentTime.getHours()}:{currentTime.getMinutes()}:
      {currentTime.getMinutes()}
    </h1>
  );
}
