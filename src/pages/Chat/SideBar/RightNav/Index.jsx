import {
  ActionIcon,
  Title,
  Menu,
  Modal,
  Button,
  Text,
  Divider,
  Stack,
  Group,
  Box,
  Checkbox,
  TextInput,
  Avatar,
  Badge,
  Flex, Card,
  ScrollArea, Center,
} from "@mantine/core";
import {
  IconPlus, IconVideo, IconPhone, IconEdit,
  IconSend, IconChevronRight, IconLogout,
  IconDotsVertical,IconVolumeOff,IconShare3,
  IconFilter,IconTrash,IconArrowForwardUpDouble,
  IconChecks,
  IconEyeOff,
  IconUsers,
  IconSearch,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import classes from "./Index.module.css";

const allChats = [
  { name: "Mark Will", msg: "hiii", time: "02:47 PM", unread: 12, img: "src/pages/Chat/SideBar/Images/r1.jpg", typing: true },
  { name: "Sarik ", msg: "hello.", time: "06:12 AM", img: "src/pages/Chat/SideBar/Images/r2.jpg", seen: true },
  { name: "Clyde Smith", msg: "Haha", time: "03:15 AM", unread: 55, img: "src/pages/Chat/SideBar/Images/r3.jpg" },
  { name: "Amfr_boys_Group", msg: "tyryw", time: "Yesterday", unread: 5, img: "src/pages/Chat/SideBar/Images/r4.jpg", group: true },
  { name: "Carla Jenkins", msg: "gddfd", time: "Sunday", img: "src/pages/Chat/SideBar/Images/r1.jpg", seen: true },
  { name: "Federico Wells", msg: "Photo", time: "Wednesday", unread: 12, img: "src/pages/Chat/SideBar/Images/r2.jpg" },
  { name: "Federico Wells", msg: "Photo", time: "Wednesday", unread: 12, img: "src/pages/Chat/SideBar/Images/r2.jpg" },
  { name: "Federico Wells", msg: "Photo", time: "Wednesday", unread: 12, img: "src/pages/Chat/SideBar/Images/r2.jpg" },
  { name: "Federico Wells", msg: "Photo", time: "Wednesday", unread: 12, img: "src/pages/Chat/SideBar/Images/r2.jpg" },
  { name: "Federico Wells", msg: "Photo", time: "Wednesday", unread: 12, img: "src/pages/Chat/SideBar/Images/r2.jpg" },
  { name: "Federico Wells", msg: "Photo", time: "Wednesday", unread: 12, img: "src/pages/Chat/SideBar/Images/r2.jpg" },
  { name: "Federico Wells", msg: "Photo", time: "Wednesday", unread: 12, img: "src/pages/Chat/SideBar/Images/r2.jpg" },
  { name: "Federico Wells", msg: "Photo", time: "Wednesday", unread: 12, img: "src/pages/Chat/SideBar/Images/r2.jpg" },
  { name: "Federico Wells", msg: "Photo", time: "Wednesday", unread: 12, img: "src/pages/Chat/SideBar/Images/r2.jpg" },
  { name: "Federico Wells", msg: "Photo", time: "Wednesday", unread: 12, img: "src/pages/Chat/SideBar/Images/r2.jpg" },
  { name: "Mark Williams", msg: "hi", time: "02:40 PM", unread: 12, img: "src/pages/Chat/SideBar/Images/r1.jpg", typing: true },

];

const Allcontacts = [
  {
    letter: "A",
    list: [
      {
        name: "Aaryian Jose",
        status: "last seen 5 days ago",
        online: true,
        img: "src/pages/Chat/SideBar/Images/profile4.jpg",
      },],
  },
  {
    letter: "C", list: [
      {
        name: "Clyde Smith",
        status: "is busy now!",
        online: false,
        img: "src/pages/Chat/SideBar/Images/profile3.jpg",
      },
      {
        name: "Carla Jenkins",
        status: "is online now",
        online: true,
        img: "src/pages/Chat/SideBar/Images/profile.jpg",
      },],
  },
  {
    letter: "D",
    list: [
      {
        name: "Danielle Baker",
        status: "last seen a week ago",
        online: true,
        img: "src/pages/Chat/SideBar/Images/r1.jpg",
      },],
  },
  {
    letter: "E",
    list: [
      {
        name: "Edward Lietz",
        status: "Do you know  ",
        online: true,
        img: "src/pages/Chat/SideBar/Images/r2.jpg",
      },],
  },
  {
    letter: "F",
    list: [
      {
        name: "Federico Wells",
        status: "last seen 10 min ago",
        online: true,
        img: "src/pages/Chat/SideBar/Images/r3.jpg",
      },
      {
        name: "Federico Wells",
        status: "last seen 10 min ago",
        online: true,
        img: "src/pages/Chat/SideBar/Images/r3.jpg",
      },
    ],
  },];

const allGroups = [
  {
    name: "The Dream Team",
    msg: "is typing...",
    time: "02:40 PM",
    unread: 12,
    img: "src/pages/Chat/SideBar/Images/r5.jpg",
  },
  {
    name: "The Meme Team",
    msg: "Do you know which...",
    time: "06:12 AM",
    img: "src/pages/Chat/SideBar/Images/r6.jpg",
    seen: true,
  },
  {
    name: "Tech Talk Tribe",
    msg: "Haha oh man",
    time: "03:15 AM",
    unread: 55,
    img: "src/pages/Chat/SideBar/Images/r7.jpg",
  },
  {
    name: "Amfr_boys_Group",
    msg: "Photo",
    time: "Yesterday",
    unread: 5,
    img: "src/pages/Chat/SideBar/Images/r8.jpg",
  },
  {
    name: "The Academic Alliance",
    msg: "Incoming Video Call",
    time: "Sunday",
    img: "src/pages/Chat/SideBar/Images/9.jpg",
    seen: true,
  },
  {
    name: "The Chill Zone",
    msg: "Photo",
    time: "Wednesday",
    unread: 12,
    img: "src/pages/Chat/SideBar/Images/r6.jpg",
  },
  {
    name: "Squad Goals",
    msg: "Document",
    time: "02:40 PM",
    img: "src/pages/Chat/SideBar/Images/r7.jpg",
    seen: true,
  },
  {
    name: "Gustov_family",
    msg: "Please Check ",
    time: "24 Jul 2024",
    unread: 25,
    img: "src/pages/Chat/SideBar/Images/r8.jpg",
  },
  {
    name: "family",
    msg: "Please Check",
    time: "24 Jul 2024",
    unread: 25,
    img: "src/pages/Chat/SideBar/Images/r5.jpg",
  },
  {
    name: "G_family",
    msg: "Please Check @rev",
    time: "24 Jul 2024",
    unread: 25,
    img: "src/pages/Chat/SideBar/Images/r4.jpg",
  },
];

const allStatus = {
  myStatus: {
    name: "Rabino Desilva",
    time: "Today at 08:25 AM",
    img: "src/pages/Chat/SideBar/Images/bg_wal.jpg",
  },
  recentUpdates: [
    {
      name: "Federico Wells",
      time: "4 hrs ago",
      img: "src/pages/Chat/SideBar/Images/bg_wal2.jpg",
    },
    {
      name: "Morkel Jerrin",
      time: "Today at 7:15 AM",
      img: "src/pages/Chat/SideBar/Images/bg_wal3.jpg",
    },
  ],
  alreadySeen: [
    {
      name: "Danielle Baker",
      time: "Just Now",
      img: "src/pages/Chat/SideBar/Images/bg_wal4.jpg",
    },
    {
      name: "Mark Williams",
      time: "2 hrs ago",
      img: "src/pages/Chat/SideBar/Images/profile4.jpg",
    },
    {
      name: "Edward Lietz",
      time: "2 hrs ago",
      img: "src/pages/Chat/SideBar/Images/profile5.jpg",
    },
    {
      name: "Sarika Jain",
      time: "Today at 06:15 AM",
      img: "src/pages/Chat/SideBar/Images/profile6.jpg",
    },
    {
      name: "Wilbur Martinez",
      time: "Today at 04:20 AM",
      img: "src/pages/Chat/SideBar/Images/profile7.jpg",
    },
    {
      name: "Wilbur Martinez",
      time: "Today at 04:20 AM",
      img: "src/pages/Chat/SideBar/Images/profile7.jpg",
    },
  ],
};

const allCalls = [
  {
    name: "Edward Lietz",
    type: "video",
    time: "20 min ago",
    duration: "08 m 12 s",
    img: "src/pages/Chat/SideBar/Images/r1.jpg",
  },
  {
    name: "Mark Williams",
    type: "voice",
    time: "20 min ago",
    duration: "08 m 12 s",
    img: "src/pages/Chat/SideBar/Images/r2.jpg",
  },
  {
    name: "Federico Wells",
    type: "video",
    time: "20 min ago",
    duration: "08 m 12 s",
    img: "src/pages/Chat/SideBar/Images/r3.jpg",
  },
  {
    name: "Clyde Smith",
    type: "voice",
    time: "20 min ago",
    duration: "08 m 12 s",
    img: "src/pages/Chat/SideBar/Images/r4.jpg",
  },
  {
    name: "Carla Jenkins",
    type: "video",
    time: "20 min ago",
    duration: "08 m 12 s",
    img: "src/pages/Chat/SideBar/Images/r5.jpg",
  },
  {
    name: "Sarika Jain",
    type: "voice",
    time: "20 min ago",
    duration: "08 m 12 s",
    img: "src/pages/Chat/SideBar/Images/r6.jpg",
  },
  {
    name: "Amfr_boys_Group",
    type: "video",
    time: "20 min ago",
    duration: "08 m 12 s",
    img: "src/pages/Chat/SideBar/Images/r7.jpg",
  },
  {
    name: "Wilbur Martinez",
    type: "voice",
    time: "20 min ago" ,
    duration: "08 m 12 s",
    img: "src/pages/Chat/SideBar/Images/r8.jpg",
  },
];

const profileDetails = {
  name: "Rabino Desilva",
  about: "Hey there! I’m using DreamsChat",
  phone: "+91 98765 43210",
  email: "rabino@example.com",
  gender: "Male",
  dob: "18 Oct 2000",
  address: "Bangalore, India",
  img: "src/pages/Chat/SideBar/Images/profile.jpg",
};

const settingsOptions = [
  {
    title: "Account",
    description: "Privacy, security, change number",
    icon: "👤",
  },
  {
    title: "Chats",
    description: "Theme, wallpapers, chat history",
    icon: "💬",
  },
  {
    title: "Notifications",
    description: "Message, group & call tones",
    icon: "🔔",
  },
  {
    title: "Data and storage",
    description: "Network usage, auto-download",
    icon: "📦",
  },
  {
    title: "Help",
    description: "FAQ, contact us, privacy policy",
    icon: "❓",
  },
  {
    title: "Invite a friend",
    description: "",
    icon: "📩",
  },
];


const contacts = [
  { name: "Aaryian Jose", role: "App Developer", img: "src/pages/Chat/SideBar/Images/profile4.jpg" },
  { name: "Sarika Jain", role: "UI/UX Designer", img: "src/pages/Chat/SideBar/Images/profile2.jpg" },
  { name: "Clyde Smith", role: "Web Developer", img: "src/pages/Chat/SideBar/Images/profile3.jpg" },
  { name: "Carla Jenkins", role: "Business Analyst", img: "src/pages/Chat/SideBar/Images/profile.jpg" },
];

const recentChats = [
  { name: "Nichol", img: "src/pages/Chat/SideBar/Images/r1.jpg" },
  { name: "Titus", img: "src/pages/Chat/SideBar/Images/r2.jpg" },
  { name: "Geoffrey", img: "src/pages/Chat/SideBar/Images/r3.jpg" },
  { name: "Laverty", img: "src/pages/Chat/SideBar/Images/r4.jpg" },
];



export function RightNav({ active }) {
  const [opened, { open, close }] = useDisclosure(false);


  const cardStyle = {
    borderRadius: 12,
    border: "1px solid var(--mantine-color-border)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
    backgroundColor: "var(--mantine-color-body)",
    padding: "10px 12px",
  };

  const renderContent = () => {
    switch (active) {
      case "Chats":
        return (

          <Stack gap="xs" >
            <Flex justify="space-between" align="center">
              <Text fw={500} size="xl">
                Recent Chats
              </Text>
              <ActionIcon size="lg" variant="none" style={{ color: "var(--mantine-color-gray-6)" }}>
                <Menu shadow="md" width={180} position="bottom-end" radius="md">
                  <Menu.Target>
                    <IconDotsVertical size={20} stroke={2} />
                  </Menu.Target>
                  <Menu.Dropdown style={{ padding: 10 }}>
                    <Menu.Item><IconEyeOff size={20} stroke={1.5} style={{ marginRight: 8 }} />Hide Recents</Menu.Item>
                    <Menu.Item><IconUsers size={20} stroke={1.5} style={{ marginRight: 8 }} />Active Contacts</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </ActionIcon>
            </Flex>
            <Group style={{ overflowX: "auto", padding: 10, justifyContent: "space-around" }}>
              {recentChats.map((chat, i) => (
                <Box key={i} style={{ position: "relative" }}>
                  <Avatar src={chat.img} radius="xl" size={50} />
                  <Box
                    style={{
                      position: "absolute",
                      bottom: 20,
                      right: 6,
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: "#37975fff",
                      border: "1px solid var(--mantine-color-white)",
                    }}
                  />
                  <Text ta="center" size="xs" fw={500} mt={4} color="grey">
                    {chat.name}
                  </Text>
                </Box>
              ))}
            </Group>

            <Flex justify="space-between" align="center" mt="md">
              <Text fw={600} size="lg">
                All Chats
              </Text>
              <Menu shadow="md" width={160} position="bottom-end" radius="md">
                <Menu.Target>
                  <ActionIcon variant="subtle" color="gray">
                    <IconFilter size={18} stroke={2} color="grey" /></ActionIcon>
                </Menu.Target>
                <Menu.Dropdown style={{ padding: 10 }}>
                  <Menu.Item >All Chats</Menu.Item>
                  <Menu.Item>Favourite Chats</Menu.Item>
                  <Menu.Item>Pinned Chats</Menu.Item>
                  <Menu.Item>Archive Chats</Menu.Item>
                  <Menu.Item>Trash</Menu.Item>
                </Menu.Dropdown>
              </Menu>

            </Flex>



            {allChats.map((chat, index) => (
              <Flex key={index} align="center" justify="space-between" style={cardStyle}>
                <Group gap="sm">
                  <Avatar src={chat.img} radius="xl" />
                  <Box>
                    <Text fw={600} size="sm">
                      {chat.name}
                    </Text>
                    <Text size="xs" c={chat.typing ? "violet" : "dimmed"}>
                      {chat.msg}
                    </Text>
                  </Box>
                </Group>
                <Box ta="right">
                  <Text size="xs" c="dimmed" fw={500}>
                    {chat.time}
                  </Text>
                  {chat.unread ? (
                    <Badge color="red" size="sm" radius="xl" mt={2}>
                      {chat.unread}
                    </Badge>
                  ) : chat.seen ? (
                    <IconChecks size={16} color="#2ecc71" style={{ marginTop: 4 }} />
                  ) : null}
                </Box>
              </Flex>
            ))}
          </Stack>
        );

      case "Contacts":
        return (
          <Stack gap="xs" >
            {Allcontacts.map((group, gIndex) => (
              <Box key={gIndex}>
                <Text fw={600} size="sm" mb="xs">
                  {group.letter}
                </Text>
                <Stack gap="sm">
                  {group.list.map((contact, i) => (
                    <Flex key={i} align="center" justify="space-between" style={cardStyle}>
                      <Group gap="md">
                        <Box style={{ position: "relative" }}>
                          <Avatar src={contact.img} radius="xl" size={50} />
                          <Box
                            style={{
                              position: "absolute",
                              bottom: 4,
                              right: 3,
                              width: 12,
                              height: 12,
                              borderRadius: "50%",
                              border: "2px solid var(--mantine-color-text)",
                              backgroundColor: contact.online ? "#2ecc71" : "#e74c3c",
                            }}
                          />
                        </Box>
                        <Box>
                          <Text fw={600} size="sm">
                            {contact.name}
                          </Text>
                          <Text size="sm" c="dimmed">
                            {contact.status}
                          </Text>
                        </Box>
                      </Group>
                    </Flex>
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        );

      case "Groups":
        return (
          <Stack gap="xs" >
            {allGroups.map((group, index) => (
              <Flex key={index} align="center" justify="space-between" style={cardStyle}>
                <Group gap="sm">
                  <Avatar src={group.img} radius="xl" />
                  <Box>
                    <Text fw={600} size="sm">
                      {group.name}
                    </Text>
                    <Text size="xs" c={group.msg === "is typing..." ? "violet" : "dimmed"}>
                      {group.msg}
                    </Text>
                  </Box>
                </Group>
                <Box ta="right">
                  <Text size="xs" c="dimmed" fw={500}>
                    {group.time}
                  </Text>
                  {group.unread ? (
                    <Badge color="red" size="sm" radius="xl" mt={2}>
                      {group.unread}
                    </Badge>
                  ) : group.seen ? (
                    <IconChecks size={16} color="#2ecc71" style={{ marginTop: 4 }} />
                  ) : null}
                </Box>
              </Flex>
            ))}
          </Stack>
        );
      case "Status": // ALL status content
        return (
          <div >
            <Box mb="lg">
              <Text fw={600} size="sm" mb={4}>
                My Status
              </Text>
              <Flex
                align="center"
                justify="space-between"
                style={{
                  borderRadius: 10,
                  backgroundColor: "var(--mantine-color-body)",
                  border: "1px solid var(--mantine-color-border)",
                  padding: "12px 16px",
                  boxSizing: "border-box",
                }}
              >
                <Group gap="sm">
                  <Avatar src={allStatus.myStatus.img} radius="xl" />
                  <Box>
                    <Text fw={600} size="sm">
                      {allStatus.myStatus.name}
                    </Text>
                    <Text size="xs" c="dimmed">
                      {allStatus.myStatus.time}
                    </Text>
                  </Box>
                </Group>
                
                    <ActionIcon size="lg" variant="none" style={{ color: "var(--mantine-color-gray-6)" }}>
                <Menu shadow="md" width={180} position="bottom-end" radius="md">
                  <Menu.Target>
                    <IconDotsVertical size={20} stroke={2} />
                  </Menu.Target>
                  <Menu.Dropdown style={{ padding: 10 }}>
                    <Menu.Item><IconShare3 size={20} stroke={1.5} style={{ marginRight: 8 }} />Share Status</Menu.Item>
                    <Menu.Item><IconArrowForwardUpDouble size={20} stroke={1.5} style={{ marginRight: 8 }} />Forward</Menu.Item>
                    <Menu.Item><IconTrash size={20} stroke={1.5} style={{ marginRight: 8 }} />Delete</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </ActionIcon>
              </Flex>
            </Box>

            <Box mb="lg">
              <Text fw={600} size="sm" mb={4}>
                Recent Updates
              </Text>
              <Stack gap="xs">
                {allStatus.recentUpdates.map((status, i) => (
                  <Flex
                    key={i}
                    align="center"
                    justify="space-between"
                    style={{
                      borderRadius: 10,
                      backgroundColor: "var(--mantine-color-body)",
                      border: "1px solid var(--mantine-color-border)",
                      padding: "12px 16px",
                      transition: "0.2s",
                      boxSizing: "border-box",
                    }}
                  >
                    <Group gap="sm">
                      <Avatar src={status.img} radius="xl" />
                      <Box>
                        <Text fw={600} size="sm">
                          {status.name}
                        </Text>
                        <Text size="xs" c="dimmed">
                          {status.time}
                        </Text>
                      </Box>
                    </Group>

                    <ActionIcon size="lg" variant="none" style={{ color: "var(--mantine-color-gray-6)" }}>
                <Menu shadow="md" width={180} position="bottom-end" radius="md">
                  <Menu.Target>
                    <IconDotsVertical size={20} stroke={2} />
                  </Menu.Target>
                  <Menu.Dropdown style={{ padding: 10 }}>
                    <Menu.Item><IconVolumeOff size={20} stroke={1.5} style={{ marginRight: 8 }} />Mute</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </ActionIcon>
                  </Flex>
                ))}
              </Stack>
            </Box>

            <Box>
              <Text fw={600} size="sm" mb={4}>
                Already Seen
              </Text>
              <Stack gap="xs">
                {allStatus.alreadySeen.map((status, i) => (
                  <Flex
                    key={i}
                    align="center"
                    justify="space-between"
                    style={{
                      borderRadius: 10,
                      backgroundColor: "var(--mantine-color-body)",
                      border: "1px solid var(--mantine-color-border)",
                      padding: "12px 16px",
                      boxSizing: "border-box",
                    }}
                  >
                    <Group gap="sm">
                      <Avatar src={status.img} radius="xl" />
                      <Box>
                        <Text fw={600} size="sm">
                          {status.name}
                        </Text>
                        <Text size="xs" c="dimmed">
                          {status.time}
                        </Text>
                      </Box>
                    </Group>
                    <ActionIcon size="lg" variant="none" style={{ color: "var(--mantine-color-gray-6)" }}>
                <Menu shadow="md" width={180} position="bottom-end" radius="md">
                  <Menu.Target>
                    <IconDotsVertical size={20} stroke={2} />
                  </Menu.Target>
                  <Menu.Dropdown style={{ padding: 10 }}>
                    <Menu.Item><IconVolumeOff size={20} stroke={1.5} style={{ marginRight: 8 }} />Mute</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </ActionIcon>
                  </Flex>
                ))}
              </Stack>
            </Box>
          </div>
        );

      case "Calls": // ALL calls content
        return (
          <div >
            <Text fw={600} size="sm" mb={8}>
              All Calls
            </Text>

            <Stack gap="xs">
              {allCalls.map((call, i) => (
                <Flex
                  key={i}
                  align="center"
                  justify="space-between"
                  style={{
                    borderRadius: 10,
                    backgroundColor: "var(--mantine-color-body)",
                    border: "1px solid var(--mantine-color-border)",
                    padding: "12px 16px",
                    boxSizing: "border-box",
                    transition: "0.2s",
                  }}
                >
                  <Group gap="sm">
                    <Avatar src={call.img} radius="xl" />
                    <Box>
                      <Text fw={600} size="sm">
                        {call.name}
                      </Text>
                      <Group gap={6}>
                        <Text size="xs" c="dimmed">
                          {call.time}
                        </Text>
                        <Text size="xs" c="dimmed">
                          • {call.duration}
                        </Text>
                      </Group>
                    </Box>
                  </Group>

                  <ActionIcon
                    variant="subtle"
                    color={call.type === "video" ? "violet" : "teal"}
                    size="lg"
                  >
                    {call.type === "video" ? (
                      <IconVideo size={18} />
                    ) : (
                      <IconPhone size={18} />
                    )}
                  </ActionIcon>
                </Flex>
              ))}
            </Stack>
          </div>
        );

      case "Profile": // ALL profile content
        return (
          <div>
            <Center>
              <Avatar
                src={profileDetails.img}
                size={100}
                radius={100}
                mb="sm"
              />
            </Center>
            <Center>
              <Text fw={700} size="lg">
                {profileDetails.name}
              </Text>
            </Center>
            <Center>
              <Text size="sm" c="dimmed" mb="sm">
                {profileDetails.about}
              </Text>
            </Center>
            <Divider my="md" />

            <Stack gap="xs">
              {[
                { label: "Phone", value: profileDetails.phone },
                { label: "Email", value: profileDetails.email },
                { label: "Gender", value: profileDetails.gender },
                { label: "Date of Birth", value: profileDetails.dob },
                { label: "Address", value: profileDetails.address },
              ].map((item, index) => (
                <Flex
                  key={index}
                  justify="space-between"
                  align="center"
                  style={{
                    borderRadius: 10,
                    border: "1px solid #e0e0e0",
                    padding: "12px 16px",
                    backgroundColor: "var(--mantine-color-body)",
                    boxSizing: "border-box",
                  }}
                >
                  <Text fw={600} size="sm">
                    {item.label}
                  </Text>
                  <Text size="sm" c="dimmed">
                    {item.value}
                  </Text>
                </Flex>
              ))}
            </Stack>
          </div>
        );

      case "Settings": // ALL settings content
        return (
          <div>
            <Text fw={600} size="lg" mb="md">
              Settings
            </Text>

            <Stack gap="xs">
              {settingsOptions.map((item, index) => (
                <Flex
                  key={index}
                  align="center"
                  justify="space-between"
                  style={{
                    borderRadius: 10,
                    backgroundColor: "var(--mantine-color-body)",
                    border: "1px solid #e0e0e0",
                    padding: "12px 16px",
                    boxSizing: "border-box",
                    transition: "0.3s",
                    cursor: "pointer",
                  }}
                >
                  <Group gap="md">
                    <Avatar radius="xl" color="violet" size={40}>
                      <Text fw={600} size="md">
                        {item.icon}
                      </Text>
                    </Avatar>

                    <Box>
                      <Text fw={600} size="sm">
                        {item.title}
                      </Text>
                      {item.description && (
                        <Text size="xs" c="dimmed">
                          {item.description}
                        </Text>
                      )}
                    </Box>
                  </Group>

                  <IconChevronRight size={18} color="grey" />
                </Flex>
              ))}
            </Stack>

            <Button
              fullWidth
              mt="lg"
              color="red"
              radius="md"
              leftSection={<IconLogout size={16} />}
            >
              Logout
            </Button>
          </div>
        );
      default:
        return <div></div>;
    }
  };

  return (
    <ScrollArea style={{ height: "calc(100vh - 40px)" }} scrollbarSize={5}>
      <div className={classes.main}>
        <div className={classes.header}>
          <Title order={2}>{active}</Title>
          <div className={classes.actions}>
            <ActionIcon size="md" radius="xl" onClick={open} style={{ backgroundColor: "#7c3aed", color: "#fff" }}>
              <IconPlus size={18} stroke={2} />
            </ActionIcon>
            <ActionIcon size="lg" variant="none" style={{ color: "var(--mantine-color-gray-6)" }}>
              <Menu shadow="md" width={160} position="bottom-end" radius="md">
                <Menu.Target>
                  <IconDotsVertical size={22} stroke={2} />
                </Menu.Target>
                <Menu.Dropdown style={{ padding: 10 }}>
                  <Menu.Item>
                    <IconSend size={20} stroke={1.5} style={{ marginRight: 8 }} />
                    Invite Others
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </ActionIcon>
          </div>
        </div>

        <TextInput
          placeholder="Search For Contacts or Messages"
          radius="md"
          variant="filled"
          size="xl"
          style={{ margin: "15px" }}
          rightSection={
            <ActionIcon variant="transparent" color="grey">
              <IconSearch size={18} stroke={2} />
            </ActionIcon>
          }
        />

        {renderContent()}

                  <Modal opened={opened} onClose={close} size="lg" title={<Text fw={700} size="lg">New Chat</Text>} centered>
          <Divider my="md" />
          <TextInput
            placeholder="Search"
            radius="md"
            variant="default"
            size="lg"
            style={{ margin: "20px" }}
            rightSection={<ActionIcon variant="transparent"><IconSearch size={18} stroke={3} /></ActionIcon>}
          />
          <Text fw={500} size="lg" style={{ margin: "20px" }}>
            Contacts
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
              Start Chat
            </Button>
          </Flex>
        </Modal>

      </div>
    </ScrollArea>
    

    
  );
}
