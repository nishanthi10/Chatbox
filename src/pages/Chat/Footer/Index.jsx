import {
  IconMicrophone,
  IconSend,
  IconCamera,
  IconPhotoUp,
  IconMusic,
  IconMapPinShare,
  IconUserCheck,
  IconDotsVertical,
  IconFolder,
  IconMoodSmile,
} from "@tabler/icons-react";
import {
  ActionIcon,
  Group,
  TextInput,
  Menu,
  Flex,
  Box,
  Popover,
} from "@mantine/core";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react"; 
import classes from "./Index.module.css";

export function Footer({ onSend }) {
  const [message, setMessage] = useState("");
  const [emojiOpened, setEmojiOpened] = useState(false); // Toggle emoji picker

  // handle file select
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMessage(file.name);
    }
  };

  // handle send button
  const handleSendClick = () => {
    if (message.trim() === "") return;
    onSend(message);
    setMessage("");
  };

  // handle enter key press
  const handleKeyPress = (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSendClick();
  }
};
  // handle emoji click from picker
  const handleEmojiClick = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  return (
    <div className={classes.footer}>
      <Group
        justify="center"
        style={{
          padding: "15px 18px",
          backgroundColor: "var(--mantine-color-body)",
          width: "100%",
          borderTop: "1px solid var(--mantine-color-border)",
          borderBottom: "1px solid var(--mantine-color-border)",
        }}
      >
        <Flex
          align="center"
          justify="space-between"
          style={{
            width: "100%",
            backgroundColor: "var(--mantine-color-input-bg)",
            borderRadius: "10px",
            padding: "6px 10px",
            boxShadow: "0 0 3px rgba(122, 58, 58, 0.05)",
          }}
        >
          
          <ActionIcon variant="subtle" color="gray">
            <IconMicrophone size={18} color="#888" />
          </ActionIcon>

     
          <Box style={{ flex: 1, margin: "0 8px" }}>
            <TextInput
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress}
              variant="unstyled"
              styles={{
                input: {
                  fontSize: "14px",
                  padding: "6px 0",
                  color: "var(--mantine-color-text)",
                },
              }}
            />
          </Box>

      
          <Flex align="center" gap={6}>
           
            <Popover
              opened={emojiOpened}
              onChange={setEmojiOpened}
              width="auto"
              position="top"
              withArrow
              withinPortal
            >
              <Popover.Target>
                <ActionIcon
                  color="gray"
                  variant="transparent"
                  size="lg"
                  onClick={() => setEmojiOpened((o) => !o)}
                >
                  <IconMoodSmile size={20} />
                </ActionIcon>
              </Popover.Target>

              <Popover.Dropdown
                style={{
                  padding: "4px",
                  backgroundColor: "var(--mantine-color-body)",
                }}
              >
               
                <EmojiPicker
                  onEmojiClick={handleEmojiClick}
                  theme="dark"
                  width={300}
                  height={350}
                />
              </Popover.Dropdown>
            </Popover>

         
            <ActionIcon
              color="gray"
              variant="transparent"
              size="lg"
              component="label"
            >
              <IconFolder size={20} />
              <input type="file" hidden onChange={handleFileSelect} />
            </ActionIcon>

         
            <Menu shadow="xl" width={160} position="top-end" radius="md" >
              <Menu.Target>
                <ActionIcon size="lg" variant="subtle" color="gray">
                  <IconDotsVertical size={22} stroke={1.9} />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown style={{ padding: 10 }}>
                <Menu.Item>
                  <IconCamera size={20} stroke={1.5} style={{ marginRight: 8 }} />
                  Camera
                </Menu.Item>
                <Menu.Item>
                  <IconPhotoUp size={20} stroke={1.3} style={{ marginRight: 8 }} />
                  Gallery
                </Menu.Item>
                <Menu.Item>
                  <IconMusic size={20} stroke={1.5} style={{ marginRight: 8 }} />
                  Audio
                </Menu.Item>
                <Menu.Item>
                  <IconMapPinShare size={20} stroke={1.5} style={{ marginRight: 8 }} />
                  Location
                </Menu.Item>
                <Menu.Item>
                  <IconUserCheck size={20} stroke={1.7} style={{ marginRight: 8 }} />
                  Contact
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>

            
            <ActionIcon
              radius="md"
              color="violet"
              variant="filled"
              size="lg"
              onClick={handleSendClick}
            >
              <IconSend size={17} />
            </ActionIcon>
          </Flex>
        </Flex>
      </Group>
    </div>
  );
}
