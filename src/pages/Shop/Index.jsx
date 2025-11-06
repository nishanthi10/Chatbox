import React, { useState, useEffect } from 'react';
import AppLayout from '../../components/AppLayout/Index';
import { Group, Text, Container, Accordion, Checkbox, Switch, Button, ActionIcon } from '@mantine/core';
import { IconClock, IconPlus, IconTrash } from '@tabler/icons-react';
import { TimeInput } from '@mantine/dates';

export function Shop() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [selectedDays, setSelectedDays] = useState([]);


  const [timeSlots, setTimeSlots] = useState(
    days.reduce((acc, day) => {
      acc[day] = [{ from: '10:00', to: '11:00' }];
      return acc;
    }, {})
  );


  useEffect(() => {
    const allData = days.reduce((acc, day) => {
      if (selectedDays.includes(day)) {
        acc[day] = timeSlots[day];
      } else {
        acc[day] = [{ from: '00:00', to: '00:00' }];
      }
      return acc;
    }, {});

    console.log("DATA:", allData);
  }, [selectedDays, timeSlots]);

  const toggleDay = (day) =>
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );


  const toggleAll = (checked) =>
    setSelectedDays(checked ? [...days] : []);


  const addTimeSlot = (day) => {
    const nextSlots = [
      { from: '11:00', to: '12:00' },
      { from: '13:00', to: '14:00' },
      { from: '15:00', to: '16:00' },

    ];
    setTimeSlots((prev) => ({
      ...prev,
      [day]: [...prev[day], nextSlots[prev[day].length - 1] || { from: '09:00', to: '10:00' }],
    }));
  };
  const deleteSlot = (day, index) => {
    setTimeSlots((prev) => ({
      ...prev,
      [day]: prev[day].filter((_, i) => i !== index),
    }));
  };

  const updateTime = (day, index, field, value) => {
    setTimeSlots((prev) => {
      const updated = { ...prev };
      const slots = [...updated[day]];
      const currentSlot = slots[index];

      if (field === 'to' && value < currentSlot.from) {
        return prev;
      }
      if (field === 'from' && index > 0) {
        const prevSlot = slots[index - 1];
        if (value < prevSlot.to) {
          return prev;
        }
      }
      slots[index] = { ...currentSlot, [field]: value };
      updated[day] = slots;
      return updated;
    });
  };
  return (
    <AppLayout>
      <h3>Shop</h3>
      <Container size={600} py="md">
        <Switch
          checked={selectedDays.length === days.length}
          onChange={(e) => toggleAll(e.currentTarget.checked)}
          label="Always Available"
          color="rgba(28, 107, 175, 1)"
          styles={{ label: { color: 'rgba(0,79,148,1)', fontWeight: 600 } }}
        />

        <Accordion variant="light" radius="md" mt="lg">
          {days.map((day) => (
            <Accordion.Item key={day} value={day} style={{ background: '#ddeef5', borderRadius: 16, marginTop: 10 }}>
              <Accordion.Control>
                <Group>
                  <Checkbox
                    color="rgba(0,79,148,1)"
                    checked={selectedDays.includes(day)}
                    onChange={() => toggleDay(day)}
                  />
                  <Text color="rgba(0,79,148,1)" fw={700}>{day}</Text>
                </Group>
              </Accordion.Control>

              <Accordion.Panel>
                {timeSlots[day].map((slot, i) => (
                  <Group key={i} mt="sm">
                    <TimeInput label={i === 0 ? "From" : ""} value={slot.from} leftSection={<IconClock size={16} />} style={{ width: 200 }}
                      onChange={(event) =>
                        updateTime(day, i, 'from', event.currentTarget.value)
                      } />
                    <TimeInput label={i === 0 ? "To" : ""} value={slot.to} leftSection={<IconClock size={16} />} style={{ width: 200 }}
                      onChange={(event) =>
                        updateTime(day, i, 'to', event.currentTarget.value)
                      } />
                    {i !== 0 && (
                      <div
                        onClick={() => deleteSlot(day, i)}
                        style={{ marginTop: 20, cursor: 'pointer' }}
                      >
                        <IconTrash size={22} color="red" />
                      </div>
                    )}
                  </Group>
                ))}

                <div style={{ textAlign: 'right', marginTop: 16 }}>
                  <Button
                    radius="xl"
                    color="rgba(12,34,79,1)"
                    onClick={() => addTimeSlot(day)}
                  >
                    <IconPlus size={18} style={{ marginRight: 6 }} /> ADD NEW
                  </Button>
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </AppLayout>
  );
}
