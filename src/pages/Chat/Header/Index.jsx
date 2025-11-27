import { Group, Avatar, Box, Text, ActionIcon,Menu, } from "@mantine/core";
import {
  IconPhone,
  IconVideo,
  IconDotsVertical,
  IconSearch,
  IconX,
  IconVolumeOff,
  IconClockHour5,
  IconClearAll,
  IconTrash,
  IconThumbDown,
  IconBan,
  IconInfoCircle,
} from "@tabler/icons-react";

export function Header({ selectedUser }) {
  return (
    <Group
      px="md"
      py="md"
      justify="space-between"
      style={{
        borderBottom:
          "1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-5))",
        backgroundColor: "var(--mantine-color-body)",
        position: "sticky",
        top: 0,
      }}
    >
      {/* Left side - User info */}
      {selectedUser ? (
        <Group>
          <Avatar src={selectedUser.img} radius="xl"  size={50}/>
          <Box>
            <Text size="md" fw={500} c="var(--mantine-color-text)">
              {selectedUser.name}
            </Text>
            <Text size="xs" c="dimmed">
             online
            </Text>
          </Box>
        </Group>
      ) : (
        <Text size="sm" c="dimmed">
          Select a chat to start conversation
        </Text>
      )}

      {/* Right side - Actions */}
      <Group gap="md">
        <ActionIcon variant="subtle" color="#636161ff">
          <IconSearch size={25} />
        </ActionIcon>
        <ActionIcon variant="subtle" color="#636161ff">
          <IconPhone size={25} />
        </ActionIcon>
        <ActionIcon variant="subtle" color="#636161ff">
          <IconVideo size={25} />
        </ActionIcon>
        <ActionIcon variant="subtle" color="#636161ff">
          <IconInfoCircle size={25} />
        </ActionIcon>
        <ActionIcon size="lg" variant="none" style={{ color: "#636161ff" }}>
          <Menu shadow="md" width={200} position="bottom-end" radius="md">
            <Menu.Target>
              <IconDotsVertical size={20} stroke={2} />
            </Menu.Target>
            <Menu.Dropdown style={{ padding: 10 }}>
              <Menu.Item style={{ fontSize: "11px", padding: "6px 8px", color: "#858383ff" }}>
                <IconX size={20} stroke={1.5} style={{ marginRight: 8 }} /> Close Chat
              </Menu.Item>
              <Menu.Item style={{ fontSize: "11px", padding: "6px 8px", color: "#858383ff" }}>
                <IconVolumeOff size={20} stroke={1.3} style={{ marginRight: 8 }} /> Mute Notification
              </Menu.Item>
              <Menu.Item style={{ fontSize: "11px", padding: "6px 8px", color: "#858383ff" }}>
                <IconClockHour5 size={20} stroke={1.5} style={{ marginRight: 8 }} /> Disappearing Messages
              </Menu.Item>
              <Menu.Item style={{ fontSize: "11px", padding: "6px 8px", color: "#858383ff" }}>
                <IconClearAll size={20} stroke={1.5} style={{ marginRight: 8 }} /> Clear Message
              </Menu.Item>
              <Menu.Item style={{ fontSize: "11px", padding: "6px 8px", color: "#858383ff" }}>
                <IconTrash size={20} stroke={1.5} style={{ marginRight: 8 }} /> Delete Chat
              </Menu.Item>
              <Menu.Item style={{ fontSize: "11px", padding: "6px 8px", color: "#858383ff" }}>
                <IconThumbDown size={20} stroke={1.5} style={{ marginRight: 8 }} /> Report
              </Menu.Item>
              <Menu.Item style={{ fontSize: "11px", padding: "6px 8px", color: "#858383ff" }}>
                <IconBan size={20} stroke={1.5} style={{ marginRight: 8 }} /> Block
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </ActionIcon>
      </Group>
    </Group>
  );
}