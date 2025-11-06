import React, { useState } from 'react';
import AppLayout from '../../../components/AppLayout/Index'
import { Select, Container, Grid, TextInput, Button, Group, Radio, RadioGroup } from '@mantine/core';
import {IconArrowRight,IconArrowLeft } from '@tabler/icons-react';




export function CreateStudents() {

    const [value, setValue] = useState('react');

    return (


        <div>
            <AppLayout>
                <Container my="md" style={{ backgroundColor: '#ffffffff' }}>
                    <form >
                        <Grid>
                            <Grid.Col span={{ base: 12, xs: 6 }}><TextInput type="text" placeholder="Enter name" label="Name*" /></Grid.Col>
                            <Grid.Col span={{ base: 12, xs: 6 }}><TextInput type="text" placeholder="Enter date of birth" label="DOB" /></Grid.Col>
                        </Grid>
                        <Grid>
                            <Grid.Col span={{ base: 12, xs: 6 }}><TextInput type="text" placeholder="@gmail.com" label="Email ID" /></Grid.Col>
                            <Grid.Col span={{ base: 12, xs: 6 }}><TextInput type="text" placeholder="Enter Phone Number" label="Phone Number" /></Grid.Col>
                        </Grid>
                        <Grid>
                            <Grid.Col span={{ base: 12, xs: 6 }}>
                                <RadioGroup mt={5}
                                    label="Select gender"
                                    value={value}
                                    onChange={setValue}
                                    required>
                                    <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                                        <Radio value="Male" label="Male" />
                                        <Radio value="Female" label="Female" />
                                    </div>
                                </RadioGroup></Grid.Col>
                            <Grid.Col span={{ base: 12, xs: 6 }}>
                                <Select
                                    label="Course"
                                    placeholder="select the course"
                                    searchable
                                    clearable
                                    data={['Mathematics', 'Science', 'English', 'History', 'Computer Science']}
                                />
                            </Grid.Col>
                        </Grid>
                        <Grid mt={5}>
                            <Grid.Col span={{ base: 6}}><Button variant="outline" leftSection={<IconArrowLeft size={16} />}>Cancel </Button> </Grid.Col>
                            <Grid.Col span={{ base: 6}} align="end"><Button type="submit" variant="filled" rightSection={<IconArrowRight size={16} />}>Submit </Button> </Grid.Col>
                        </Grid>
                    </form>
                </Container>
            </AppLayout>
        </div>
    )
}


