import React from "react";
import { Box, Text } from "@mantine/core";

export function ChatArea({ messages }) {
  return (
    <Box
      style={{
        flex: 1,
        overflowY: "auto",
        padding: "16px",
        marginBottom: "60px",
        backgroundColor: "var(--mantine-color-body)",
      }}
    >
      {messages.length === 0 ? (
        <Text c="dimmed" ta="center">
          No messages...
        </Text>
      ) : (
        messages.map((msg, i) => (
          <Box
            key={i}
            style={{
              padding: "8px 12px",
              backgroundColor: "#6443beff",
              color: "white",
              borderRadius: "12px 12px 0 12px",
              marginBottom: "10px",
              maxWidth: "50%",
              marginLeft: "auto",
              marginRight: "10px",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              whiteSpace: "pre-wrap",
            }}
          >
            {msg}
          </Box>
        ))
      )}
    </Box>
  );
}
