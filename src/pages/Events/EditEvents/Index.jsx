import React from 'react'
import AppLayout from '../../../components/AppLayout/Index'
import {
  Avatar, Collapse, Group, Box, Text,Center, Badge, Container, Button, SimpleGrid, Grid, GridCol, Card, Pagination, Timeline
} from '@mantine/core';
import { IconCalendar, IconClock, IconCircleChevronDownFilled, IconCircleChevronUp, IconMessage, IconMapPin, IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots } from '@tabler/icons-react';
import { useState } from 'react';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import icon1 from '../../../assets/lineDot.svg';

import {
  IconChevronDown,
  IconHeart,
  IconLogout,
  IconPlayerPause,
  IconSettings,
  IconStar,
  IconSwitchHorizontal,
  IconTrash,
} from '@tabler/icons-react';
import cx from 'clsx';
import {
  Burger,
  Menu,
  Tabs,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Index.module.css';


const user = {
  name: 'Jane Spoonfighter',
  email: 'janspoon@fighter.dev',
  image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
};

const tabs = [
  'Home',
  'Orders',
  'Education',
  'Community',
  'Forums',
  'Support',
  'Account',
  'Helpdesk',
];


const timelineData = [
  { id: 5, title: 'July Saturday 2025', data: 'No Events' },
  { id: 4, title: 'July Friday 2025', data: 'No Events' },
  { id: 3, title: 'July Thursday 2025', data: 'No Events' },
  { id: 2, title: 'July Saturday 2025', data: 'No Events' },
  { id: 1, title: 'July Saturday 2025', data: 'No Events' },
];
export function EditEvents() {

  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);


  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab}>
      {tab}
    </Tabs.Tab>
  ));



  useEffect(() => {
    async function apiCall2() {
      const response = await axios.get(`http://139.180.161.179/api/public/events/${id}`);
      setEvent(response.data.data);
      console.log(response)
    }

    apiCall2();
  }, [id]);


  const [openItem, setOpenItem] = useState(null);
  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);

  };

  return (
    <>

      <AppLayout >
        <div className={classes.header}>

          <div>
            <Box style={{ backgroundColor: '#7CC2F8' }}  >

              <Text size='xl' fw={800} style={{ paddingLeft: '60px', color: 'white' }} >
                {event?.title}
              </Text>
              <div style={{ backgroundColor: '#296B9C', color: 'white', borderRadius: '20px', margin: '60px' }}>
                <Grid m={0} gutter={0}>
                  <Grid.Col
                    style={{
                      borderBottom: '1px solid #5c7c94ff',
                      borderRight: '1px solid #5c7c94ff',
                      padding: '18px 20px',
                    }}
                    span={{ base: 12, xs: 4 }}
                  >
                    <Text fw={600}><IconCalendar size={16} /> Event Date</Text>
                    <Grid gutter={0}>
                      <GridCol span="content" style={{ marginRight: 8 }} ><Text size="xs">{moment(event?.start_date).format("ddd D MMM YY'")}</Text></GridCol>
                      <GridCol span="content" style={{ marginRight: 8 }}><Center>
                        <img
                          src={icon1}
                          width={50}
                          height={16}
                          style={{ display: 'block' }}
                        />
                      </Center></GridCol>
                      <GridCol span="content" ><Text size="xs">{moment(event?.start_date).format("ddd D MMM YY'")}</Text></GridCol>
                    </Grid>
                  </Grid.Col>

                  <Grid.Col
                    style={{
                      borderBottom: '1px solid #5c7c94ff',
                      borderRight: '1px solid #5c7c94ff',
                      padding: '30px',
                    }}
                    span={{ base: 12, xs: 4 }}
                  >
                    <Text fw={600}><IconClock size={16} /> Booking</Text>


                    <Grid gutter={0}>
                      <GridCol span="content" style={{ marginRight: 8 }}><Text size="xs">{moment(event?.start_date).format(" ddd Do MMM ")}</Text><Text size="xs">{moment(event?.start_date).format(" YY'")}</Text><Text size="xs">{moment(event?.start_date).format(" h:mm ")}</Text></GridCol>
                      <GridCol span="content" style={{ marginRight: 8}}><Center>
                        <img
                          src={icon1}
                          width={50}
                          height={16}
                          style={{ display: 'block' }}
                        />
                      </Center></GridCol>
                      <GridCol span="content" ><Text size="xs">{moment(event?.end_date).format("ddd Do MMM ")}</Text><Text size="xs">{moment(event?.end_date).format(" YY'")}</Text><Text size="xs">{moment(event?.end_date).format(" h:mm ")}</Text></GridCol>
                    </Grid>

                    <Text size="sm">Late bookings up to 10:00 am 2 July 25</Text>
                  </Grid.Col>

                  <Grid.Col
                    style={{
                      borderBottom: '1px solid #5c7c94ff',
                      padding: '30px',

                    }}
                    span={{ base: 12, xs: 4 }}>
                    <Button fullWidth >Enter</Button><br />
                    <Text size="sm">Accepting Late Booking</Text>
                  </Grid.Col>
                </Grid>


                <Grid m={0} gutter={0} style={{ backgroundColor: '#296B9C', borderRadius: '30px' }}>
                  <Grid.Col span={{ base: 12, xs: 4 }} style={{
                    borderRight: '1px solid #5c7c94ff',
                    padding: '30px',

                  }}>
                    <Text fw={600}><IconMessage size={16} /> Oraganser Contact</Text>
                    <Text size="sm">{event?.organizer?.name}</Text>
                    <Text size="sm">{event?.organizer?.email}</Text>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, xs: 4 }} style={{
                    borderRight: '1px solid #5c7c94ff',
                    padding: '30px',

                  }}>
                    <Text fw={600}><IconMessage size={16} /> Secretary</Text>
                    <Text size="sm">gdfg</Text>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, xs: 4 }} style={{ padding: '30px' }}>
                    <Text fw={600}><IconMapPin size={16} /> Venue</Text>
                    <Text size="sm">{event?.timezone}</Text>
                  </Grid.Col>
                </Grid>
              </div>

            </Box>

            <div>
              <Tabs
                defaultValue="Home"
                variant="outline"
                visibleFrom="sm"
                classNames={{
                  root: classes.tabs,
                  list: classes.tabsList,
                  tab: classes.tab,
                }}

              >
                <Tabs.List >
                  <Tabs.Tab value="details">
                    <Text fw={600}>Details</Text>

                  </Tabs.Tab>

                  <Tabs.Tab value="training">
                    <Text fw={600}>Combined Training</Text>

                  </Tabs.Tab>

                  <Tabs.Tab value="jumping">
                    <Text fw={600}>Show jumping</Text>

                  </Tabs.Tab>

                  <Tabs.Tab value="dressage">
                    <Text fw={600}>Dressage</Text>

                  </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="details" pt="md" style={{
                  backgroundColor: '#fff',
                  padding: '16px',

                }}>
                  <Text>This tab contains details about the 3 event disciplines.</Text>
                </Tabs.Panel>
                <Tabs.Panel value="jumping" pt="md" style={{
                  backgroundColor: '#fff',
                  padding: '16px',

                }}>
                  <Text component="h4" color="blue" fw={700}>
                    Show jumping
                  </Text>


                  <Timeline bulletSize={30} lineWidth={2} style={{ padding: '40px' }} >
                    {timelineData.map((item) => (
                      <Timeline.Item
                        key={item.id}
                        bullet={
                          <Badge
                            size="xl"
                            radius="xl"
                            variant={openItem === item.id ? 'filled' : 'default'}
                            color="blue"
                            styles={{ label: { color: openItem === item.id ? 'white' : '#1e90ff', overflow: 'visible' } }}
                          >
                            {item.id}
                          </Badge>
                        }
                        title={
                          <Group justify="space-between" style={{ width: '70%' }}>
                            <Text fw={600} >{item.title}</Text>
                            {openItem === item.id ? (
                              <IconCircleChevronUp
                                size={27}
                                color="grey"

                                onClick={() => toggleItem(item.id)}
                              />
                            ) : (
                              <IconCircleChevronDownFilled
                                size={27}
                                color="grey"

                                onClick={() => toggleItem(item.id)}
                              />
                            )}
                          </Group>
                        }
                      >
                        <Collapse in={openItem === item.id}>
                          <Text size="xs" mt={4}>{item.data}</Text>

                        </Collapse>
                      </Timeline.Item>
                    ))}
                  </Timeline>
                </Tabs.Panel>
              </Tabs>
            </div>
          </div>
        </div>

      </AppLayout>
    </>
  )
}


