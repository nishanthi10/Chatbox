import React, { useState } from "react";
import AppLayout from "../../components/AppLayout/Index";
import { SideBar } from "./SideBar/Index";
import { Header } from "./Header/Index";
import { Footer } from "./Footer/Index";
import { ChatArea } from "./ChatArea/Index"; 
import { Grid } from "@mantine/core";

export function Chat() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (newMessage) => {
    if (newMessage.trim() === "") return;
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <AppLayout>
      <Grid
        gutter={0}
        style={{
          height: "100vh",
          backgroundColor: "var(--mantine-color-body)",
        }}
      >
        {/* Sidebar */}
        <Grid.Col
          span={{ base: 12, sm: 4, md: 3 }}
          style={{
            backgroundColor: "var(--mantine-color-body)",
            borderRight: "var(--mantine-color-body)",
            overflowY: "auto",
            display: "flex",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
        >
          <SideBar />
        </Grid.Col>

        {/* Main Chat Section */}
        <Grid.Col
          span={{ base: 12, sm: 8, md: 9 }}
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "var(--mantine-color-body)",
            height: "100vh",
          }}
        >
          {/* Header */}
          <div style={{ flexShrink: 0 }}>
            <Header />
          </div>

          {/* Main Chat Content */}
          <ChatArea messages={messages} />

          {/* Footer */}
          <Footer onSend={handleSendMessage} />
        </Grid.Col>
      </Grid>
    </AppLayout>
  );
}
