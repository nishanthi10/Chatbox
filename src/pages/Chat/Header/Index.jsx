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

export function Header() {
  return (
    <Group
  px="md"
  py="sm"
  justify="space-between"
  style={{
    borderBottom: "1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-5))",
    backgroundColor: "var(--mantine-color-body)",
    position: "sticky",
    top: 0,
  }}
>
      {/* Left side - User info */}
      <Group>
        <Avatar src="src/pages/Chat/SideBar/Images/r1.jpg" radius="xl" />
        <Box>
          <Text size="sm" fw={500} c="var(--mantine-color-text)">
            Edward Lietz
          </Text>
          <Text size="xs" c="dimmed">
            Online
          </Text>
        </Box>
      </Group>

      {/* Right side - Actions */}
      <Group gap="xs">
        <ActionIcon variant="subtle" color="#636161ff">
          <IconSearch size={18} />
        </ActionIcon>
        <ActionIcon variant="subtle" color="#636161ff">
          <IconPhone size={18} />
        </ActionIcon>
        <ActionIcon variant="subtle" color="#636161ff">
          <IconVideo size={18} />
        </ActionIcon>
        <ActionIcon variant="subtle" color="#636161ff">
          <IconInfoCircle size={18} />
        </ActionIcon>
        <ActionIcon size="lg" variant="none" style={{ color: "#636161ff" }}>
          <Menu shadow="md" width={200} position="bottom-end" radius="md">
            <Menu.Target>
              <IconDotsVertical size={20} stroke={2} />
            </Menu.Target>
            <Menu.Dropdown style={{ padding: 10 }}>
              <Menu.Item style={{ fontSize: '11px', padding: '6px 8px', color:'#858383ff'}}><IconX size={20} stroke={1.5} style={{ marginRight: 8 }} />Close Chat</Menu.Item>
              <Menu.Item style={{ fontSize: '11px', padding: '6px 8px', color:'#858383ff' }}><IconVolumeOff size={20} stroke={1.3} style={{ marginRight: 8 }} />Mute Notification</Menu.Item>
              <Menu.Item style={{ fontSize: '11px', padding: '6px 8px', color:'#858383ff' }}><IconClockHour5 size={20} stroke={1.5} style={{ marginRight: 8 }} />Disappearing Messages</Menu.Item>
              <Menu.Item style={{ fontSize: '11px', padding: '6px 8px', color:'#858383ff' }}><IconClearAll size={20} stroke={1.5} style={{ marginRight: 8 }} />Clear Message</Menu.Item>
              <Menu.Item style={{ fontSize: '11px', padding: '6px 8px', color:'#858383ff' }}><IconTrash size={20} stroke={1.5} style={{ marginRight: 8 }} />Delete Chat</Menu.Item>
              <Menu.Item style={{ fontSize: '11px', padding: '6px 8px', color:'#858383ff' }}><IconThumbDown size={20} stroke={1.5} style={{ marginRight: 8 }} />Report</Menu.Item>
              <Menu.Item style={{ fontSize: '11px', padding: '6px 8px', color:'#858383ff' }}><IconBan size={20} stroke={1.5} style={{ marginRight: 8 }} />Block</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </ActionIcon>
      </Group>
    </Group>
  );
}
