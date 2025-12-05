import React from "react";
import { Carousel } from "@mantine/carousel";
import { Avatar, Text,Modal,Divider, Checkbox, Stack, Button,Group, ActionIcon, TextInput, Menu, Flex, Box, Popover, } from "@mantine/core";
import {
  IconPlayerPause, IconVolume, IconMaximize, IconMicrophone,
  IconSend,
  IconCamera,
  IconPhotoUp,
  IconMusic,
  IconMapPinShare,
  IconUserCheck,
  IconDotsVertical,
  IconEye,
  
  IconMoodSmile,
} from "@tabler/icons-react";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";

import EmojiPicker from "emoji-picker-react";

export function StatusCarousel({ selectedUser }) {

  const [opened, { open, close }] = useDisclosure(false);
  const [message, setMessage] = useState("");
  const [emojiOpened, setEmojiOpened] = useState(false); // Toggle emoji picker
  const images = [
    "src/pages/Chat/SideBar/Images/status-01.jpg",
    "src/pages/Chat/SideBar/Images/bg_wal.jpg",
    "src/pages/Chat/SideBar/Images/bg_wal2.jpg",
    "src/pages/Chat/SideBar/Images/bg_wal3.jpg",
    "src/pages/Chat/SideBar/Images/bg_wal4.jpg",
  ];
  const isMyStatus = selectedUser?.name === "Rabino Desilva";

const statusViewed = [
  { name: "Edward Lietz", value: "App Developer", img: "src/pages/Chat/SideBar/Images/s1.jpg" },
  { name: "Sarika Jain", value: "UI/UX Designer", img: "src/pages/Chat/SideBar/Images/s2.jpg"  },
  { name: "Clyde Smith", value: "Web Developer", img: "src/pages/Chat/SideBar/Images/s3.jpg"},
  { name: "Carla Jenkins", value: "Business Analyst", img: "src/pages/Chat/SideBar/Images/s4.jpg" }
];


  // handle emoji click from picker
  const handleEmojiClick = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);
  };

  // handle send button
  const handleSendClick = () => {
    if (message.trim() === "") return;
    onSend(message);
    setMessage("");
  };
  return (
    <div style={{ padding: 30, backgroundColor: "var(--mantine-color-body)" }}>
      <Carousel
        withIndicators height={1050} loop
        styles={{
          indicators: { top: 30, gap: 12, },
          indicator: { width: 90, height: 10, borderRadius: 10, backgroundColor: "white", },
        }}>
        {images.map((src, index) => (
          <Carousel.Slide key={index}>
            <div style={{ position: "relative", height: "100%" }}>
              <div
                style={{
                  position: "absolute",
                  top: 65, left: 30, right: 30, zIndex: 10, display: "flex", justifyContent: "space-between", alignItems: "center",
                }} >
                {/* USER INFO */}
                <Group>
                  <Avatar
                    src={selectedUser?.img || "src/pages/Chat/SideBar/Images/r2.jpg"} radius="xl" size={45} />
                  <div>
                    <Text size="md" weight={700} color="white">  {selectedUser?.name} </Text>
                    <Text size="xs" color="#e3e3e3"> Today at 7:15 AM </Text>
                  </div>
                </Group>

                {/* RIGHT SIDE ICONS */}
                <Group spacing="xs">
                  <ActionIcon variant="transparent" color="white">
                    <IconPlayerPause color="white" size={22} />
                  </ActionIcon>
                  <ActionIcon variant="transparent" color="white">
                    <IconVolume color="white" size={22} />
                  </ActionIcon>
                  <ActionIcon variant="transparent" color="white">
                    <IconMaximize color="white" size={22} />
                  </ActionIcon>
                </Group>
              </div>
              <img
                src={src}
                style={{
                  width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px",
                }} />
            </div>
            {/* BOTTOM SECTION */}
            <div
              style={{
                position: "absolute",
                bottom: 40,
                left: 0,
                right: 0,
                display: "flex",
                justifyContent: "center",
                zIndex: 20
              }}
            >
              {isMyStatus ? (
                // 👁 My Status – show views
                <div
                  style={{
                    background: "white",
                    padding: "6px 16px",
                    borderRadius: 20,
                    fontSize: 14,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span onClick={open} style={{ fontSize: 18, color: "black",cursor:"pointer"}}><IconEye size={18} /></span> <span style={{ cursor:"pointer",fontSize: 18, color: "black" }} onClick={open}>25</span>
                </div>
              ) : (
                // 📝 Other user – show reply input
                <Group
                  justify="center"
                  style={{
                    padding: "15px 18px",
                    backgroundColor: "var(--mantine-color-body)",
                    width: "100%",
                    borderTop: "1px solid var(--mantine-color-border)",
                    borderBottom: "1px solid var(--mantine-color-border)",
                    marginLeft: 20,
                    marginRight: 20,
                    borderRadius: "10px",
                    boxShadow: "0 0 3px rgba(0,0,0,0.05)",
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
                      boxShadow: "0 0 3px rgba(0,0,0,0.05)",
                    }}
                  >
                    {/* 🎤 Microphone Icon */}
                    <ActionIcon variant="subtle" color="gray">
                      <IconMicrophone size={18} color="#888" />
                    </ActionIcon>

                    {/* 💬 Input Box */}
                    <Box style={{ flex: 1, margin: "0 8px" }}>
                      <TextInput
                        placeholder="Type your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}

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

                    {/*  Right icons */}
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
                          {/*  Emoji Picker Component */}
                          <EmojiPicker
                            onEmojiClick={handleEmojiClick}
                            theme="dark"
                            width={300}
                            height={350}
                          />
                        </Popover.Dropdown>
                      </Popover>



                      {/* More Menu */}
                      <Menu shadow="md" width={130} position="top-end" radius="md">
                        <Menu.Target>
                          <ActionIcon size="lg" variant="subtle" color="gray">
                            <IconDotsVertical size={22} stroke={1.9} />
                          </ActionIcon>
                        </Menu.Target>
                        <Menu.Dropdown style={{ padding: 10 }}>
                          <Menu.Item>
                            <IconCamera size={18} stroke={1.5} style={{ marginRight: 8 }} />
                            Camera
                          </Menu.Item>
                          <Menu.Item>
                            <IconPhotoUp size={18} stroke={1.3} style={{ marginRight: 8 }} />
                            Gallery
                          </Menu.Item>
                          <Menu.Item>
                            <IconMusic size={18} stroke={1.5} style={{ marginRight: 8 }} />
                            Audio
                          </Menu.Item>
                          <Menu.Item>
                            <IconMapPinShare size={18} stroke={1.5} style={{ marginRight: 8 }} />
                            Location
                          </Menu.Item>
                          <Menu.Item>
                            <IconUserCheck size={18} stroke={1.7} style={{ marginRight: 8 }} />
                            Contact
                          </Menu.Item>
                        </Menu.Dropdown>
                      </Menu>

                      {/*  Send Button */}
                      <ActionIcon
                        radius="md"
                        color="violet"
                        variant="filled"
                        size="lg"


                      >
                        <IconSend size={17} />
                      </ActionIcon>
                    </Flex>
                  </Flex>
                </Group>
              )}
            </div>

          </Carousel.Slide>
        ))}
      </Carousel>
      
              <Modal opened={opened} onClose={close} size="lg" title={<Text fw={700} size="xl">Status Viewed</Text>} centered>
                <Divider my="md" />

                <Stack gap="xs" p="md">
                  {statusViewed.map((s, index) => (
                    <Flex key={index} align="center" justify="space-between" p="lg"
                     style={{ border: "light-dark(var(--mantine-color-white), var(--mantine-color-dark-))", borderRadius: "10px" }}>
                      <Group gap="sm">
                        <Avatar src={s.img} radius="xl" size={55} />
                        <Box>
                          <Text fw={600}>{s.name}</Text>
                          <Text size="sm" c="dimmed">
                            {s.value}
                          </Text>
                        </Box>
                      </Group>
                      
                    </Flex>
                  ))}
                </Stack>
               
              </Modal>
    </div>
  );
}
