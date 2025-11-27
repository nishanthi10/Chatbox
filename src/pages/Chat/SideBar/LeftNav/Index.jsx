import { useState } from "react";
import {
  IconMessage2Heart,
  IconUserShield,
  IconUsersGroup,
  IconCircleDot,
  IconPhoneCall,
  IconUserCircle,
  IconSettings,
  IconSun,
  IconMoon,
  IconLogout2,
} from "@tabler/icons-react";
import {
  Tooltip,
  UnstyledButton,
  ActionIcon,
  Menu,
  Avatar,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import cx from "clsx";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Index.module.css";
import { useNavigate } from "react-router-dom";


const mainLinksMockdata = [
  { icon: IconMessage2Heart, label: "Chats" },
  { icon: IconUserShield, label: "Contacts" },
  { icon: IconUsersGroup, label: "Groups" },
  { icon: IconCircleDot, label: "Status" },
  { icon: IconPhoneCall, label: "Calls" },
  { icon: IconUserCircle, label: "Profile" },
  { icon: IconSettings, label: "Settings" },
];

export function LeftNav({ active, setActive }) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
 
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionProps={{ duration: 0 }}
      key={link.label}
      styles={{
        tooltip: {
          backgroundColor: "#7c3aed",
          color: "#fff",
          fontWeight: 600,
          fontSize: "14px",
        },
        arrow: { borderColor: "#7c3aed" },
      }}
    >
      <UnstyledButton
        onClick={() => setActive(link.label)}
        className={classes.mainLink}
        data-active={link.label === active || undefined}
      >
        <link.icon size={25} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));

  return (
    <div className={classes.aside}>
      <div className={classes.logo}>
        <img src="src/pages/Chat/SideBar/Images/ChatLogo.svg" alt="Chat Logo" width={50} height={50} />
      </div>

      {mainLinks}

      <div className={classes.bottomSection}>
        <ActionIcon
          onClick={() =>
            setColorScheme(computedColorScheme === "light" ? "dark" : "light")
          }
          variant="filled"
          color="violet"
          size="lg"
          radius="md"
        >
          {computedColorScheme === "light" ? (
            <IconMoon color="white" stroke={1.5} />
          ) : (
            <IconSun color="white" stroke={1.5} />
          )}
        </ActionIcon>

        <Menu shadow="md" width={130} position="top-start" offset={5} radius="md">
          <Menu.Target>
            <Avatar
              src="src/pages/Chat/SideBar/Images/s1.jpg"
              size={40}
              radius="xl"
              style={{ marginTop: "20px", cursor: "pointer" }}
            />
          </Menu.Target>
          <Menu.Dropdown style={{ padding: 10 }}>
            <Menu.Item style={{ padding: 10 }} onClick={handleLogout}>
              <IconLogout2
                size={20}
                stroke={1.5}
                style={{ marginRight: 8 }}
              />
              Login
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </div>
  );
}
