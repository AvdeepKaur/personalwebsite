import React from "react";
import { Button } from "antd";
import {
  DeleteOutlined,
  FolderOpenOutlined,
  MessageOutlined,
  ChromeOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

const NavBar = () => {
  const iconSize = 45; // Set the icon size to 20px

  const iconStyle = {
    fontSize: `${iconSize}px`,
  };

  return (
    <div
      style={{
        color: "black",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        position: "fixed",
        top: 30,
        right: 0,
        height: "100vh",
        padding: "20px 20px",
        zIndex: 1,
      }}
    >
      <Button type="text" icon={<DeleteOutlined style={iconStyle} />} />
      <Button type="text" icon={<FolderOpenOutlined style={iconStyle} />} />
      <Button type="text" icon={<MessageOutlined style={iconStyle} />} />
      <Button type="text" icon={<ChromeOutlined style={iconStyle} />} />
      <Button type="text" icon={<CalendarOutlined style={iconStyle} />} />
    </div>
  );
};

export default NavBar;
