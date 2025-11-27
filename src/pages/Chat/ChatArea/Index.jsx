import React from "react";
import { Box, Text, Avatar, Group } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

export function ChatArea({ messages }) {
  return (
    <Box
      style={{
        flex: 1,
        overflowY: "auto",
        padding: "20px",
        height: "80vh",
        backgroundColor: "var(--mantine-color-body)",
      }}
    >
      {messages.length === 0 ? (
        <Text c="dimmed" ta="center">
          No messages...
        </Text>
      ) : (
        messages.map((msg, i) => (
          <Box key={i} mb={20}>

            {/* Top meta info */}
            <Group
              gap={6}
              justify="flex-end"
              style={{ marginRight: "60px" }}
            >
              <IconCheck size={18} color="#00e48f" />
              <Text size="xs" c="var(--mantine-color-text)">
                02:39 PM
              </Text>
              <Text size="md" fw={500} c="var(--mantine-color-text)">
                • You
              </Text>
            </Group>

            {/* Bubble + Avatar */}
            <Group justify="flex-end" align="flex-end">
              <Box
                style={{
                  padding: "10px 14px",
                  backgroundColor: "#8258f5ff",
                  color: "white",
                  borderRadius: "10px 10px 0 10px",
                  maxWidth: "55%",
                  wordBreak: "break-word",
                  whiteSpace: "pre-wrap",
                  boxShadow: "0px 3px 8px rgba(22, 20, 20, 0.3)",
                }}
              >
                {msg}
              </Box>

              <Avatar
                src="src/pages/Chat/SideBar/Images/s1.jpg"
                radius="xl"
                size="md"
                style={{ marginLeft: 10 }}
              />
            </Group>
          </Box>
        ))
      )}
    </Box>
  );
}
