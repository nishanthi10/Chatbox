import React, { useState, useEffect } from 'react';
import axios from 'axios';

import AppLayout from '../../components/AppLayout/Index';
import {
  Avatar,
  Group,
  Text,
  Container,
  Button,
  SimpleGrid,
  Grid,
  GridCol,
  Card,
  Pagination,
} from '@mantine/core';
import { IconUser, IconPlanet, IconHistory, IconAt, IconLockDollar, IconRocket } from '@tabler/icons-react';
import classes from './Index.module.css';
import { useNavigate } from 'react-router-dom';

const buttons = [
  { label: 'Profile', icon: IconUser },
  { label: 'Spaceships', icon: IconRocket },
  { label: 'Planets', icon: IconPlanet },
  { label: 'Mission Logs', icon: IconHistory },
];

export function Events() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [metaData,setMetaData]= useState({});
  const perPage = 2; 
  const navigate = useNavigate();



  async function apiCall(page) {
    const response = await axios.get(`http://139.180.161.179/api/public/events?page=${page}&per_page=${perPage}`);
    setData(response.data.data || []);
    const totalCount = response.data.total || 6;
    setTotalPages(Math.ceil(totalCount / perPage));
    setMetaData(response.data.meta || [])
    console.log(response)
  }

  useEffect(() => {
    apiCall(page);
  }, [page]);

  return (
    <AppLayout>
      <Container size="lg" py="md">

      
        <SimpleGrid cols={4} spacing="md" w="100%">
          {buttons.map((btn) => (
            <Button
              key={btn.label}
              variant="filled"
              radius="xl"
              size="xl"
              justify="space-between"
              rightSection={<btn.icon size={25} color="#ebe2e2ff" />}
            >
              {btn.label}
            </Button>
          ))}
        </SimpleGrid>

       
        <SimpleGrid spacing="md" w="100%" style={{ marginTop: '20px' }}>
          <Group wrap="nowrap" style={{
            backgroundColor: '#4da1ebff',
            padding: '16px',
            borderRadius: '30px',
          }}>
            <Avatar
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
              size={200}
              radius='50%'
            />
            <div>
              <Text fz="xs" tt="uppercase" fw={700} c="white">
                Welcome to Space
              </Text>
              <Group wrap="nowrap" gap={10} mt={5}>
                <Text fz="xs">
                  Explore the universe, discover new planets, track missions, and meet the brave astronauts
                  who make space exploration possible. Dive into an interstellar adventure like never before.
                </Text>
              </Group>
            </div>
          </Group>
        </SimpleGrid>

        
        <Grid mt="md">
          {data.map((event) => (
            <GridCol key={event.id}>
              <Card padding="xl" shadow="lg" onClick={() => navigate(`/events/${event.id}`)}  style={{ cursor: 'pointer' }}>
                <Group wrap="nowrap">
                  <Avatar
                    src="src/pages/Blogs/Images/bg_wal2.jpg"
                    size={94}
                    radius="md"
                  />
                  <div>
                    <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
                      {event.title}
                    </Text>
                    <Text fz="lg" fw={500} className={classes.name}>
                      {event.category}
                    </Text>
                    <Group wrap="nowrap" gap={10} mt={3}>
                      <IconAt stroke={1.5} size={16} className={classes.icon} />
                      <Text fz="xs" c="dimmed">
                        {event.start_date}
                      </Text>
                    </Group>
                    <Group wrap="nowrap" gap={10} mt={5}>
                      <IconLockDollar stroke={1.5} size={16} className={classes.icon} />
                      <Text fz="xs" c="dimmed">
                        {event.currency}
                      </Text>
                    </Group>
                  </div>
                </Group>
              </Card>
            </GridCol>
          ))}
        </Grid>

        
        <Group justify='space-between' mt="xl">

 <Text fz="sm" >
 Showing Result {metaData.from} to {metaData.to} of {metaData.total}
   
          </Text>

          <Pagination
            page={page}
            onChange={setPage}
            total={totalPages}
            withEdges
          />
        </Group>

      </Container>
    </AppLayout>
  );
}
