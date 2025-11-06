import React from 'react'
import AppLayout from '../../../components/AppLayout/Index'
import { useState } from 'react';
import cx from 'clsx';
import { Anchor,Avatar, Checkbox, Group, ScrollArea, Table, Text } from '@mantine/core';
import classes from './Index.module.css';


const data = [
  {
    id: '1',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    name: 'Robert Wolfkisser',
    Course: 'Maths',
    email: 'rob_wolf@gmail.com',
    phone:'232243435',
  },
  {
    id: '2',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    name: 'Jill Jailbreaker',
    Course: 'Science',
    email: 'jj@breaker.com',
    phone:'788843435',
  },
  {
    id: '3',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    name: 'Henry Silkeater',
    Course: 'English',
    email: 'henry@silkeater.io',
    phone:'11113435',
  },
  {
    id: '4',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png',
    name: 'Bill Horsefighter',
    Course: 'History',
    email: 'bhorsefighter@gmail.com',
    phone:'970043435',
  },
  {
    id: '5',
    avatar:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png',
    name: 'Jeremy Footviewer',
    Course: 'Computer Science',
    email: 'jeremy@foot.dev',
    phone:'080343435',
  },
];


export function ListOfStudents ()  {



const [selection, setSelection] = useState(['1']);
  const toggleRow = (id) =>
    setSelection((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  const toggleAll = () =>
    setSelection((current) => (current.length === data.length ? [] : data.map((item) => item.id)));

  const rows = data.map((item) => {
    const selected = selection.includes(item.id);
    return (
      <Table.Tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
        <Table.Td>
          <Checkbox checked={selection.includes(item.id)} onChange={() => toggleRow(item.id)} />
        </Table.Td>
        <Table.Td>
          <Group gap="sm">
            <Avatar size={26} src={item.avatar} radius={26} />
            <Text size="sm" fw={500}>
              {item.name}
            </Text>
          </Group>
        </Table.Td>
        <Table.Td><Anchor href={`mailto:${item.email}` }underline="hover">{item.email} </Anchor><br/><Anchor href={`tel:${item.phone}`} underline="never">
          {item.phone}
        </Anchor></Table.Td>
        <Table.Td>{item.Course}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <div><AppLayout>
       <ScrollArea>
      <Table miw={800} verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th w={40}>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === data.length}
                indeterminate={selection.length > 0 && selection.length !== data.length}
              />
            </Table.Th>
            <Table.Th>Student Name</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Courses</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>


      
      </AppLayout>
    </div>
  )
}


