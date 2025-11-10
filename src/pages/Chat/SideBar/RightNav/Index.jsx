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
  Avatar, Textarea, Radio,
  Badge, Card, Switch, Select,
  Flex, Accordion, PasswordInput,
  ScrollArea, Center, Image,
} from "@mantine/core";
import {
  IconPlus, IconVideo, IconPhone, IconEdit, IconBrandFacebook, IconBrandInstagram,
  IconBrandLinkedin, IconShare2, IconLock, IconDeviceFloppy, IconFileText,
  IconSend, IconLogout, IconBrandGoogle, IconBrandYoutube, IconShield,
  IconDotsVertical, IconVolumeOff, IconShare3, IconBrandTwitter, IconBan,
  IconFilter, IconTrash, IconArrowForwardUpDouble, IconKey, IconClearAll, IconLanguage,
  IconChecks, IconUser, IconGenderFemale, IconMail, IconBriefcase, IconMapPin, IconCalendar,
  IconEyeOff, IconUserStar, IconMap2, IconCalendarEvent, IconPhoto, IconRestore,
  IconUsers, IconMoodSmile, IconEye, IconUsersGroup, IconCircleDot, IconBellRinging, IconMessage,
  IconSearch, IconDeviceLaptop, IconDeviceMobile,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import classes from "./Index.module.css";

const allChats = [
  { name: "Mark Will", msg: "hiii", time: "02:47 PM", unread: 12, img: "src/pages/Chat/SideBar/Images/r1.jpg", typing: true },
  { name: "Sarik ", msg: "hello.", time: "06:12 AM", img: "src/pages/Chat/SideBar/Images/r1.jpg", seen: true },
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
    time: "20 min ago",
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

const profileInfo = [
  { label: "Name", value: "Salom Katherine", icon: <IconUser size={16} /> },
  { label: "Phone", value: "514-245-98315", icon: <IconPhone size={16} /> },
  { label: "Gender", value: "Female", icon: <IconGenderFemale size={16} /> },
  { label: "Email Address", value: "info@example.com", icon: <IconMail size={16} /> },
  { label: "Bio", value: "Web Designer", icon: <IconBriefcase size={16} /> },
  { label: "Location", value: "Portland, USA", icon: <IconMapPin size={16} /> },
  { label: "Join Date", value: "01 July 2024", icon: <IconCalendar size={16} /> },
];

const socialMedia = [
  { label: "Facebook", handle: "@SalomKatherine", icon: <IconBrandFacebook size={18} /> },
  { label: "Instagram LinkedIn", handle: "@SalomKatherine", icon: <IconBrandInstagram size={18} /> },
  { label: "Linkedin", handle: "@SalomKatherine", icon: <IconBrandLinkedin size={18} /> },
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

const images = [ //setting bg images
  "src/pages/Chat/SideBar/Images/r1.jpg",
  "src/pages/Chat/SideBar/Images/r2.jpg",
  "src/pages/Chat/SideBar/Images/r3.jpg",
  "src/pages/Chat/SideBar/Images/r4.jpg",
  "src/pages/Chat/SideBar/Images/r5.jpg",
  "src/pages/Chat/SideBar/Images/r6.jpg",
  "src/pages/Chat/SideBar/Images/r7.jpg",
  "src/pages/Chat/SideBar/Images/r8.jpg",
];

const sessions = [ // setting device history
  {
    id: 1,
    device: "Mac OS Safari 15.1",
    date: "13 Jul 2024 at 03:15 PM",
    type: "desktop",
    active: true,
  },
  {
    id: 2,
    device: "Windows 11 Mozilla Firefox",
    date: "06 Jul 2024 at 09:30 AM",
    type: "desktop",
    active: false,
  },
  {
    id: 3,
    device: "IOS Safari 15.1",
    date: "28 Jun 2024 at 04:00 PM",
    type: "mobile",
    active: false,
  },
];

export function RightNav({ active }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [visible, { toggle }] = useDisclosure(false);  // for rightnav setting password

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
            <div>
              <Text fw={700} size="lg" mb="sm">
                Profile Info
              </Text>

              <div>
                <Card shadow="md" withBorder style={cardStyle} mb="lg">
                  <Stack gap="md">
                    {profileInfo.map((item, index) => (
                      <div key={index}>

                        <Group position="apart" align="flex-start">

                          <Stack gap={2} style={{ flex: 1 }}>
                            <Text size="sm" fw={600}>
                              {item.label}
                            </Text>
                            <Text size="sm" c="dimmed">
                              {item.value}
                            </Text>
                          </Stack>
                          <div>{item.icon}</div>
                        </Group>
                        {index !== profileInfo.length - 1 && (
                          <Divider mt="sm" />
                        )}
                      </div>
                    ))}
                  </Stack>
                </Card>
              </div>
              {/* Status Section */}
              <Text fw={700} size="lg" mb="sm">
                Status
              </Text>
              <div>
                <Card shadow="md" radius="md" withBorder mb="lg" style={cardStyle}>
                  <Stack spacing="sm">
                    <Group position="apart" align="center">
                      <div style={{ flex: 1 }}>
                        <Text size="sm" fw={600}>
                          Active Status
                        </Text>
                        <Text size="sm" c="dimmed">
                          Show when you're active
                        </Text>
                      </div>
                      <Switch color="blue" size="sm" />
                    </Group>
                    <Divider />
                    <Group position="apart" align="center">
                      <div style={{ flex: 1 }}>
                        <Text size="sm" fw={600}>
                          Friends Status
                        </Text>
                        <Text size="sm" c="dimmed">
                          Show friends status in chat
                        </Text>
                      </div>
                      <Switch color="blue" size="sm" />
                    </Group>
                  </Stack>
                </Card>
              </div>

              {/* Social Media Section */}
              <Text fw={700} size="lg" mb="sm">
                Social Media
              </Text>
              <div>
                <Card shadow="md" radius="md" withBorder mb="lg" style={cardStyle}>
                  <Stack spacing="sm">
                    {socialMedia.map((item, i) => (
                      <div key={i}>
                        <Group position="apart">
                          <div style={{ flex: 1 }}>
                            <Text size="sm" fw={600}>
                              {item.label}
                            </Text>
                            <Text size="sm" c="dimmed">
                              {item.handle}
                            </Text>
                          </div>
                          <ActionIcon variant="transparent" color="var(--mantine-color-text)">{item.icon}</ActionIcon>
                        </Group>


                        {i !== socialMedia.length - 1 && <Divider mt="sm" />}
                      </div>
                    ))}
                  </Stack>
                </Card>
              </div>

              {/* Logout Section */}
              <Text fw={700} size="lg" mb="sm">
                Logout
              </Text>
              <Card shadow="md" radius="md" withBorder style={cardStyle}>
                <Group position="apart" align="center">
                  <div style={{ flex: 1 }}>
                    <Text size="sm" fw={600}>
                      Logout
                    </Text>
                    <Text size="sm" c="dimmed">
                      Sign out from this Device
                    </Text>
                  </div>
                  <ActionIcon variant="transparent" color="var(--mantine-color-text)"><IconLogout size={18} stroke={2} /></ActionIcon>
                </Group>
              </Card>



            </div>
          </div>
        );

      case "Settings": // ALL settings content
        return (
          <div>
            <Text size="lg" fw={700} mb="sm" c="var(--mantine-color-text)">
              Account</Text>
            <Box style={{ backgroundColor: "var(--mantine-color-body)", padding: '10px', borderRadius: '5px', }} >
              <Accordion
                transitionDuration={300}
                styles={{
                  item: { backgroundColor: 'var(--mantine-color-body)', borderRadius: '5px', marginBottom: '10px', border: 'none' },
                }} >

                <Accordion.Item value="profile-info">
                  <Accordion.Control icon={<IconUser size={18} />}>
                    Profile Info
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Box style={{ textAlign: "center", marginTop: 5 }}>
                      <Box style={{ position: "relative", display: "inline-block" }}>
                        <Avatar src="src/pages/Chat/SideBar/Images/r4.jpg" size={75} radius="xl" />
                        <ActionIcon size="md" radius="xl" style={{
                          position: "absolute", bottom: 6, right: 2,
                          backgroundColor: "#8257E6",
                        }}><IconPlus size={18} stroke={2} />
                        </ActionIcon>
                      </Box>
                    </Box>

                    {/* Form Fields */}
                    <TextInput placeholder="First name" rightSection={<IconUser size={16} />} mt="md" />
                    <TextInput placeholder="Last name" mt="md" rightSection={<IconUser size={16} />}></TextInput>
                    <TextInput placeholder="Gender" mt="md" rightSection={<IconUserStar size={16} />} />
                    <TextInput placeholder="Select date" mt="md" rightSection={<IconMap2 size={16} />} />
                    <TextInput placeholder="Country" mt="md" rightSection={<IconCalendarEvent size={16} />} />
                    <Textarea placeholder="About" mt="md" />
                    <Button fullWidth leftSection={<IconDeviceFloppy size={16} />} mt="md" radius="md"
                      style={{ backgroundColor: "#8257E6", color: "white", fontWeight: 600, }} > Save Changes</Button>
                  </Accordion.Panel>
                </Accordion.Item>
                <Divider />

                <Accordion.Item value="social-profiles">
                  <Accordion.Control icon={<IconShare2 size={18} />}>
                    Social Profiles
                  </Accordion.Control>
                  <Accordion.Panel>
                    <TextInput placeholder="Facebook" rightSection={<IconBrandFacebook size={16} />} mt="md" />
                    <TextInput placeholder="Google" mt="md" rightSection={<IconBrandGoogle size={16} />}></TextInput>
                    <TextInput placeholder="Twitter" mt="md" rightSection={<IconBrandTwitter size={16} />} />
                    <TextInput placeholder="Linkedin" mt="md" rightSection={<IconBrandLinkedin size={16} />} />
                    <TextInput placeholder="Youtube" mt="md" rightSection={<IconBrandYoutube size={16} />} />
                    <Button fullWidth leftSection={<IconDeviceFloppy size={16} />} mt="md" radius="md"
                      style={{ backgroundColor: "#8257E6", color: "white", fontWeight: 600, }} > Save Changes</Button>
                  </Accordion.Panel>
                </Accordion.Item>
                <Divider />

                <Group justify="space-between" style={{ width: '100%', padding: '13px' }}>
                  <Text fw={500}><IconLock size={19} style={{ marginRight: '15px' }} stroke={2} />Screen Lock</Text>
                  <Switch color="blue" size="sm" />
                </Group>
              </Accordion>
            </Box>
            <Text size="lg" fw={700} mb="sm" mt="sm" c="var(--mantine-color-text)">Security</Text>
            <Box style={{ backgroundColor: "var(--mantine-color-body)", padding: '10px', borderRadius: '5px', }} >
              <Accordion transitionDuration={300}
                styles={{ item: { backgroundColor: 'var(--mantine-color-body)', borderRadius: '8px', marginBottom: '10px', border: 'none' }, }} >
                <Accordion.Item value="password">
                  <Accordion.Control icon={<IconKey size={18} />}>
                    Password
                  </Accordion.Control>
                  <Accordion.Panel>
                    <PasswordInput label="Password" visible={visible} onVisibilityChange={toggle} />
                    <PasswordInput label="Confirm password" visible={visible} onVisibilityChange={toggle} />
                    <Button fullWidth leftSection={<IconDeviceFloppy size={16} />} mt="md" radius="md"
                      style={{ backgroundColor: "#8257E6", color: "white", fontWeight: 600, }} > Save Changes
                    </Button>
                  </Accordion.Panel>
                </Accordion.Item>
                <Divider />
                <Group justify="space-between" style={{ width: '100%', padding: '13px' }}>
                  <Text fw={500}><IconShield size={19} style={{ marginRight: '15px' }} stroke={2} />Two Factor Authentication</Text>
                  <Switch color="blue" size="sm" />
                </Group>
              </Accordion>
            </Box>
            <Text size="lg" fw={700} mb="sm" mt="sm" c="var(--mantine-color-text)">Privacy</Text>
            <Box style={{ backgroundColor: "var(--mantine-color-body)", padding: '10px', borderRadius: '5px', }} >
              <Accordion transitionDuration={300}
                styles={{ item: { backgroundColor: 'var(--mantine-color-body)', borderRadius: '8px', marginBottom: '10px', border: 'none' }, }} >
                <Accordion.Item value="profile-inf0">
                  <Accordion.Control icon={<IconMoodSmile size={18} />}>
                    profile Info
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Select defaultValue="Everyone" data={['Everyone', 'Except',]} />
                  </Accordion.Panel>
                </Accordion.Item>
                <Divider />
                <Accordion.Item value="last-seen">
                  <Accordion.Control icon={<IconEye size={18} />}>
                    Last Seen
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Select defaultValue="Everyone" data={['Everyone', 'Except',]} />
                  </Accordion.Panel>
                </Accordion.Item>
                <Divider />
                <Accordion.Item value="Groups">
                  <Accordion.Control icon={<IconUsersGroup size={18} />}>
                    Groups
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Select defaultValue="Everyone" data={['Everyone', 'Except',]} />
                  </Accordion.Panel>
                </Accordion.Item>
                <Divider />
                <Accordion.Item value="status">
                  <Accordion.Control icon={<IconCircleDot size={18} />}>
                    Status
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Select defaultValue="Everyone" data={['Everyone', 'Except',]} />
                    <Button fullWidth leftSection={<IconDeviceFloppy size={16} />} mt="md" radius="md"
                      style={{ backgroundColor: "#8257E6", color: "white", fontWeight: 600, }} > Save Changes
                    </Button>
                  </Accordion.Panel>
                </Accordion.Item>
                <Divider />
                <Group justify="space-between" style={{ width: '100%', padding: '13px' }}>
                  <Text fw={500}><IconChecks size={19} style={{ marginRight: '15px' }} stroke={2} />Read Receipients </Text>
                  <Switch color="blue" size="sm" />
                </Group>
              </Accordion>
            </Box>

            <Text size="lg" fw={700} mb="sm" mt="sm" c="var(--mantine-color-text)">Chat</Text>
            <Box style={{ backgroundColor: "var(--mantine-color-body)", padding: '10px', borderRadius: '5px', }} >
              <Accordion transitionDuration={300}
                styles={{ item: { backgroundColor: 'var(--mantine-color-body)', borderRadius: '8px', marginBottom: '10px', border: 'none' }, }} >
                <Accordion.Item value="bg-image">
                  <Accordion.Control icon={<IconPhoto size={18} />}>
                    Background Image
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Flex wrap="wrap" gap="md"
                      style={{
                        backgroundColor: "var(--mantine-color-body)", padding: 20,
                        borderRadius: 10, justifyContent: "center",
                      }}  >
                      {images.map((src, index) => (
                        <Box key={index}
                          style={{
                            borderRadius: 10,
                            overflow: "hidden",
                          }} >
                          <Image src={src} width={150} height={100} radius="md" fit="cover" />
                        </Box>
                      ))}
                    </Flex>
                  </Accordion.Panel>
                </Accordion.Item>
                <Divider />
                <Group justify="space-between" style={{ width: '100%', padding: '13px' }}>
                  <Text fw={500}><IconClearAll size={19} style={{ marginRight: '15px' }} stroke={2} />Clear All Chat</Text>
                  <Switch color="blue" size="sm" />
                </Group><Divider />
                <Group justify="space-between" style={{ width: '100%', padding: '13px' }}>
                  <Text fw={500}><IconTrash size={19} style={{ marginRight: '15px' }} stroke={2} />Delete All Chat</Text>
                  <Switch color="blue" size="sm" />
                </Group><Divider />
                <Group justify="space-between" style={{ width: '100%', padding: '13px' }}>
                  <Text fw={500}><IconRestore size={19} style={{ marginRight: '15px' }} stroke={2} />Chat Backup</Text>
                  <Switch color="blue" size="sm" />
                </Group>
              </Accordion>
            </Box>
            <Text size="lg" fw={700} mb="sm" mt="sm" c="var(--mantine-color-text)">Notifications</Text>
            <Box style={{ backgroundColor: "var(--mantine-color-body)", padding: '10px', borderRadius: '5px', }} >
              <Accordion transitionDuration={300}
                styles={{ item: { backgroundColor: 'var(--mantine-color-body)', borderRadius: '8px', marginBottom: '10px', border: 'none' }, }} >
                <Group justify="space-between" style={{ width: '100%', padding: '13px' }}>
                  <Text fw={500}><IconMessage size={19} style={{ marginRight: '15px' }} stroke={2} />Message Notifications</Text>
                  <Switch color="blue" size="sm" />
                </Group><Divider />
                <Group justify="space-between" style={{ width: '100%', padding: '13px' }}>
                  <Text fw={500}><IconTrash size={19} style={{ marginRight: '15px' }} stroke={2} />Show Previews</Text>
                  <Switch color="blue" size="sm" />
                </Group><Divider />
                <Group justify="space-between" style={{ width: '100%', padding: '13px' }}>
                  <Text fw={500}><IconMoodSmile size={19} style={{ marginRight: '15px' }} stroke={2} />Show Reaction Notifications</Text>
                  <Switch color="blue" size="sm" />
                </Group><Divider />
                <Group justify="space-between" style={{ width: '100%', padding: '13px' }}>
                  <Text fw={500}><IconBellRinging size={19} style={{ marginRight: '15px' }} stroke={2} />Notification Sound</Text>
                  <Switch color="blue" size="sm" />
                </Group>
              </Accordion>
            </Box>
            <Text size="lg" fw={700} mb="sm" mt="sm" c="var(--mantine-color-text)">Language</Text>
            <Box style={{ backgroundColor: "var(--mantine-color-body)", padding: '10px', borderRadius: '5px', }} >
              <Accordion transitionDuration={300}
                styles={{ item: { backgroundColor: 'var(--mantine-color-body)', borderRadius: '8px', marginBottom: '10px', border: 'none' }, }} >
                <Accordion.Item value="Language">
                  <Accordion.Control icon={<IconLanguage size={18} />}>
                    Language
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Select defaultValue="English" data={['Engligh', 'French',]} />
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </Box>
            <Text size="lg" fw={700} mb="sm" mt="sm" c="var(--mantine-color-text)">Manage Device</Text>
            <Box style={{ backgroundColor: "var(--mantine-color-body)", padding: '10px', borderRadius: '5px', }} >
              <Accordion transitionDuration={300}
                styles={{ item: { backgroundColor: 'var(--mantine-color-body)', borderRadius: '8px', marginBottom: '10px', border: 'none' }, }} >
                <Accordion.Item value="device-history">
                  <Accordion.Control icon={<IconEye size={18} />}>
                    Device History
                  </Accordion.Control>
                  <Accordion.Panel>

                    {sessions.map((session) => (
                      <Flex key={session.id} justify="space-between" align="center" mb="sm"
                        style={{ backgroundColor: "var(--mantine-color-body)", }}
                      >
                        <Flex align="flex-start" gap="sm">
                          {session.type === "desktop" ? (
                            <IconDeviceLaptop size={18} color="var(--mantine-color-text)" />
                          ) : (
                            <IconDeviceMobile size={18} color="var(--mantine-color-text)" />
                          )}
                          <Box>
                            <Text fw={500} size="sm" c="var(--mantine-color-text)"> {session.device}</Text>
                            <Text size="xs" c="dimmed">{session.date}</Text>
                          </Box>
                        </Flex>
                        <Flex align="center" gap="xs">
                          <Radio
                            checked={session.active} size="sm"
                            styles={{
                              radio: { backgroundColor: "#8255bdff", borderColor: "#444" },
                            }} />
                          <ActionIcon color="var(--mantine-color-text)" variant="subtle" size="sm"  >
                            <IconTrash size={16} />
                          </ActionIcon>
                        </Flex>
                      </Flex>
                    ))}

                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </Box>
            <Text size="lg" fw={700} mb="sm" mt="sm" c="var(--mantine-color-text)">Others</Text>
            <Box style={{ backgroundColor: "var(--mantine-color-body)", padding: '10px', borderRadius: '5px', }} >
              <Accordion transitionDuration={300}
                styles={{ item: { backgroundColor: 'var(--mantine-color-body)', borderRadius: '8px', marginBottom: '10px', border: 'none' }, }} >
                <Accordion.Item value="team-and-condition">
                  <Accordion.Control icon={<IconFileText size={18} />}>
                    Teams&Conditions
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Textarea />
                  </Accordion.Panel>
                </Accordion.Item>
                <Divider />
                <Accordion.Item value="privacy-policy">
                  <Accordion.Control icon={<IconFileText size={18} />}>
                    Privacy Policy
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Textarea />
                  </Accordion.Panel>
                </Accordion.Item>
                <Divider />
                <Accordion.Item value="Blocked-user">
                  <Accordion.Control icon={<IconBan size={18} />}>
                    Blocked user
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Text size="sm">
                      View and edit your personal profile information including name, email, and photo.
                    </Text>
                  </Accordion.Panel>
                </Accordion.Item>
                <Divider />
                <Accordion.Item value="mute-user">
                  <Accordion.Control icon={<IconVolumeOff size={18} />}>
                    Mute User
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Text size="sm">
                      View and edit your personal profile information including name, email, and photo.
                    </Text>
                  </Accordion.Panel>
                </Accordion.Item>
                <Divider />
                <Accordion.Item value="delete-account">
                  <Accordion.Control icon={<IconTrash size={18} />}>
                    Delete Account
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Text size="sm">
                      View and edit your personal profile information including name, email, and photo.
                    </Text>
                  </Accordion.Panel>
                </Accordion.Item>
                <Divider />
                <Accordion.Item value="logout">
                  <Accordion.Control icon={<IconLogout size={18} />}>
                    Logout
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Text size="sm">
                      View and edit your personal profile information including name, email, and photo.
                    </Text>
                  </Accordion.Panel>
                </Accordion.Item>


              </Accordion>
            </Box>
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
