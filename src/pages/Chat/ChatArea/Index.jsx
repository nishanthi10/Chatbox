import React from "react";
import {
  Box, Text, Avatar, Group, ActionIcon, Menu
  , Modal, Divider, TextInput, Stack, Flex, Checkbox, Button
} from "@mantine/core";
import {
  IconDotsVertical,
  IconCornerUpRightDouble,
  IconCheck,
  IconArrowForwardUp,
  IconClipboard,
  IconHeart,
  IconTrash, IconMoodSmile,
  IconBoxAlignRight,
  IconPin, IconSearch,

} from "@tabler/icons-react";
import styles from "./Index.module.css";
import { useDisclosure } from "@mantine/hooks";
import SmallEmojiPicker from "./SmallEmojiPicker/Index.jsx";


const contacts = [
  { name: "Aaryian Jose", role: "App Developer", img: "src/pages/Chat/SideBar/Images/r4.jpg" },
  { name: "Clyde Smith", role: "Web Developer", img: "src/pages/Chat/SideBar/Images/r3.jpg" },
  { name: "Carla Jenkins", role: "Business Analyst", img: "src/pages/Chat/SideBar/Images/r2.jpg" },
  { name: "Sarika Jain", role: "UI/UX Designer", img: "src/pages/Chat/SideBar/Images/r1.jpg" },
];



export function ChatArea({ messages }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [showEmoji, setShowEmoji] = React.useState(false);


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
      {messages.map((msg, i) => (
        <Box key={i} mb={20}>

          <Group justify="flex-end" gap={6} style={{ marginRight: "60px" }}>
            <IconCheck size={18} color="#00e48f" />
            <Text size="xs"> {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</Text>
            <Text size="md" fw={500}>• You</Text>
          </Group>

          {/* MESSAGE  */}
          <Group justify="flex-end" align="flex-end">

            <Box className={styles.hoverWrapper}>

              <Box className={styles.hoverIcons}>
                <Box style={{ position: "relative" }}>
                  <ActionIcon
                    radius="xl"
                    variant="light"
                    color="dark"
                    onClick={() => setShowEmoji((prev) => !prev)}
                  >
                    <IconMoodSmile size={18} />
                  </ActionIcon>

                  {showEmoji && (
                    <SmallEmojiPicker
                      onSelect={(emoji) => {
                        console.log("Selected Emoji:", emoji);
                        setShowEmoji(false);
                      }}
                    />
                  )}
                </Box>


                <ActionIcon radius="xl" variant="light" color="dark" onClick={open}>
                  <IconCornerUpRightDouble size={18} />
                </ActionIcon>
              </Box>

              {/* 3 Dot Menu */}
              <ActionIcon size="lg" variant="none" >
                <Menu shadow="md" width={200} position="bottom-end" radius="md">
                  <Menu.Target>
                    <IconDotsVertical size={22} stroke={2} color="var(--mantine-color-text)" />
                  </Menu.Target>

                  <Menu.Dropdown style={{ padding: 10 }}>
                    <Menu.Item>
                      <IconArrowForwardUp size={20} style={{ marginRight: 8 }} />
                      Reply
                    </Menu.Item>
                    <Menu.Item>
                      <IconCornerUpRightDouble
                        size={20}
                        style={{ marginRight: 8 }}
                      />
                      Forward
                    </Menu.Item>
                    <Menu.Item>
                      <IconClipboard size={20} style={{ marginRight: 8 }} />
                      Copy
                    </Menu.Item>
                    <Menu.Item>
                      <IconHeart size={20} style={{ marginRight: 8 }} />
                      Favourite
                    </Menu.Item>
                    <Menu.Item>
                      <IconTrash size={20} style={{ marginRight: 8 }} />
                      Delete
                    </Menu.Item>
                    <Menu.Item>
                      <IconCheck size={20} style={{ marginRight: 8 }} />
                      Mark as Unread
                    </Menu.Item>
                    <Menu.Item>
                      <IconBoxAlignRight size={20} style={{ marginRight: 8 }} />
                      Archive Chat
                    </Menu.Item>
                    <Menu.Item>
                      <IconPin size={20} style={{ marginRight: 8 }} />
                      Pin Chat
                    </Menu.Item>

                  </Menu.Dropdown>
                </Menu>
              </ActionIcon>
            </Box>

            {/* MESSAGE BUBBLE */}
            <Box className={styles.bubble}>{msg}</Box>

            {/* AVATAR */}
            <Avatar
              src="src/pages/Chat/SideBar/Images/s1.jpg"
              radius="xl"
              size="md"
              style={{ marginLeft: 10 }}
            />
          </Group>
        </Box>
      ))}

      <Modal opened={opened} onClose={close} size="lg" title={<Text fw={700} size="xl">Forward Message To</Text>} centered>
        <Divider my="md" />
        <TextInput
          placeholder="Search"
          radius="md"
          variant="default"
          size="lg"
          style={{ margin: "20px" }}
          rightSection={<ActionIcon variant="transparent"><IconSearch size={18} stroke={3} /></ActionIcon>}
        />
        <Text fw={700} size="xl" style={{ margin: "20px" }}>
          Recent Chats
        </Text>
        <Stack gap="xs" p="md">
          {contacts.map((contact, index) => (
            <Flex key={index} align="center" justify="space-between" p="sm" style={{ border: "light-dark(var(--mantine-color-white), var(--mantine-color-dark-))", borderRadius: "10px" }}>
              <Group gap="sm">
                <Avatar src={contact.img} radius="xl" size={48} />
                <Box>
                  <Text fw={600}>{contact.name}</Text>
                  <Text size="sm" c="dimmed">
                    {contact.role}
                  </Text>
                </Box>
              </Group>
              <Checkbox color="violet" size="sm" />
            </Flex>
          ))}
        </Stack>
        <Flex justify="space-between" p="md">
          <Button variant="outline" color="violet" radius="md" w="48%" onClick={close}>
            Cancel
          </Button>
          <Button color="violet" radius="md" w="48%">
            Send
          </Button>
        </Flex>
      </Modal>
    </Box>



  );
}
