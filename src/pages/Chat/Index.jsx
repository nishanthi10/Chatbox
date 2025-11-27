import React, { useState } from "react";
import AppLayout from "../../components/AppLayout/Index";
import { SideBar } from "./SideBar/Index";
import { Header } from "./Header/Index";
import { Footer } from "./Footer/Index";
import { ChatArea } from "./ChatArea/Index";
import { StatusCarousel } from "./StatusCarousel/Index";
import { Grid } from "@mantine/core";

export function Chat() {

  const [messages, setMessages] = useState([]); // store chat messages
  const [selectedUser, setSelectedUser] = useState(null);  // store which user was clicked (for showing in header)
  const [activeSection, setActiveSection] = useState("Chats"); //  store which section is active (Chats, Contacts, Groups, Status, Calls)
  const [selectedStatusUser, setSelectedStatusUser] = useState(null);

  // send new message
  const handleSendMessage = (newMessage) => {
    if (newMessage.trim() === "") return;
    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <AppLayout>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "var(--mantine-color-body)",
        }}
      >
        {/* Sidebar (fixed width) */}
        <div
          style={{
            width: "430px",
            minWidth: "430px",
            borderRight: "1px solid var(--mantine-color-border)",
            overflowY: "auto",
          }}
        >
          <SideBar
            onUserSelect={(user) => setSelectedUser(user)}
            onActiveChange={(section) => setActiveSection(section)}
             onStatusSelect={(statusUser) => setSelectedStatusUser(statusUser)}
          />
        </div>

        {/* Right Side */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          {activeSection !== "Status" && (
            <div style={{ flexShrink: 0 }}>
              <Header selectedUser={selectedUser} />
            </div>
          )}

          {/* Content – Scrollable */}
          <div
            style={{

              overflowY: "auto",
              minHeight: 0,
            }}
          >
            {activeSection === "Status" ? (
              <StatusCarousel selectedUser={selectedStatusUser} />
            ) : (
              <ChatArea messages={messages} selectedUser={selectedUser} />
            )}
          </div>

          {/* Footer */}
          {activeSection !== "Status" && (
            <div style={{ flexShrink: 0 }}>
              <Footer onSend={handleSendMessage} />
            </div>
          )}
        </div>
      </div>
    </AppLayout>

  );
}
