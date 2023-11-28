// window.js
import React from "react";
import { Layout, Button, Card, Typography } from "antd";
import { CloseCircleOutlined, MinusCircleOutlined } from "@ant-design/icons";
import "./App.css";

const { Header, Content } = Layout;

const WindowsUI = () => {
  return (
    <div class="overlay-component">
      <Layout
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
        }}
      >
        <Card
          style={{
            borderRadius: "10px",
            width: "100%",
            maxWidth: "600px",
          }}
          bodyStyle={{ padding: 0 }}
        >
          <Header
            style={{
              background: "#7c5b41",
              border: "2px solid black",
              color: "black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: "10px 10px 0 0",
              height: "40px",
              fontFamily: "Tahoma, sans-serif",
              padding: "0 20px",
            }}
          >
            <div>
              <Button type="text" icon={<CloseCircleOutlined />} />
              <Button type="text" icon={<MinusCircleOutlined />} />
            </div>
            <div style={{ fontWeight: "bold" }}>
              /user/AvdeepKaur/hello-world
            </div>
          </Header>
          <Content
            style={{
              border: "2px solid black",
              borderRadius: "0 0 10px 10px",
              padding: "20px",
              fontFamily: "Tahoma, sans-serif",
              background: "#efdcd3",
            }}
          >
            {" "}
            <Typography.Title level={2}> {">"} Welcome! </Typography.Title>
            <Typography.Text>
              {" "}
              My name is Avdeep Kaur, and I'm a current Junior at Boston
              University studying Computer Science!{" "}
            </Typography.Text>
          </Content>
        </Card>
      </Layout>
    </div>
  );
};

export default WindowsUI;
