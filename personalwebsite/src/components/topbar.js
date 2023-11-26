// topbar.js
import { Card, Button } from "antd";
import { useState, useEffect } from "react";
import { WifiOutlined } from "@ant-design/icons";

const TopBar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the current time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const dayOfWeek = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
  }).format(currentTime);
  const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    currentTime
  );
  const dayOfMonth = currentTime.getDate();

  return (
    <div class="overlay-component">
      <Card
        style={{
          width: "100%",
          margin: 0,
          padding: "2px",
        }}
        bodyStyle={{ padding: 0 }}
      >
        <div
          style={{
            background: "#d3c3b0",
            color: "black",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "10px 10px 10px 10px",
            height: "40px",
            fontFamily: "Tahoma, sans-serif",
            padding: "0 20px",
            border: "2px solid black",
          }}
        >
          <div content="buttons">
            <Button type="text"> File </Button>
            <Button type="text"> Edit </Button>
            <Button type="text"> View </Button>
            <Button type="text"> Go </Button>
            <Button type="text"> Window </Button>
            <Button type="text"> Help </Button>
          </div>
          <div content="time">
            {dayOfWeek} {month} {dayOfMonth} {currentTime.toLocaleTimeString()}
            <Button type="text" icon={<WifiOutlined />} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TopBar;
