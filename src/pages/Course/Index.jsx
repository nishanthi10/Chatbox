import { Stack, Button, Modal, Flex, Card, Grid, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import AppLayout from '../../components/AppLayout/Index';
import { useState } from 'react';
import classes from './Index.module.css';

import { closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors, } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy, } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import cx from 'clsx';
import { useListState } from '@mantine/hooks';


const courses = [
  {
    id: 1,
    name: "Mathematics",
    subjects: [
      { id: 1, name: "Algebra" },
      { id: 2, name: "Geometry" },
      { id: 3, name: "Trigonometry" },
      { id: 4, name: "Calculus" },
      { id: 5, name: "Statistics" },
    ],
  },
  {
    id: 2,
    name: "Science",
    subjects: [
      { id: 1, name: "Physics" },
      { id: 2, name: "Chemistry" },
      { id: 3, name: "Biology" },
      { id: 4, name: "Astronomy" },
      { id: 5, name: "Environmental Science" },
    ],
  },
  {
    id: 3,
    name: "English",
    subjects: [
      { id: 1, name: "Grammar" },
      { id: 2, name: "Literature" },
      { id: 3, name: "Writing" },
      { id: 4, name: "Reading Comprehension" },
      { id: 5, name: "Vocabulary" },
    ],
  },
  {
    id: 4,
    name: "History",
    subjects: [
      { id: 1, name: "Ancient History" },
      { id: 2, name: "Medieval History" },
      { id: 3, name: "Modern History" },
      { id: 4, name: "World Wars" },
      { id: 5, name: "Indian History" },
    ],
  },
  {
    id: 5,
    name: "Computer Science",
    subjects: [
      { id: 1, name: "Programming" },
      { id: 2, name: "Data Structures" },
      { id: 3, name: "Algorithms" },
      { id: 4, name: "Databases" },
      { id: 5, name: "Networking" },
    ],
  },
];





function SortableItem({ item }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: item.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cx(classes.item, { [classes.itemDragging]: isDragging })}
      {...attributes}
      {...listeners}>

      <div>
        <Text>{item.name}</Text>
      </div>
    </div>
  );
}



export function Course() {
  const [opened, { open, close }] = useDisclosure(false);
  const [btnactive, setBtnActive] = useState(null);


  const [state, handlers] = useListState([]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),

  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) {
      return;
    }
    const oldIndex = state.findIndex((i) => i.id === active.id);
    const newIndex = state.findIndex((i) => i.id === over.id);
    handlers.setState(arrayMove(state, oldIndex, newIndex));
  };

  const handleCourseClick = (courseId) => {
    const selectedCourse = courses.find(c => c.id === courseId);
    if (selectedCourse) {
      handlers.setState(selectedCourse.subjects);
    }
  };
  return (
    <><AppLayout>
       <Flex gap="lg" align="flex-start"  >
      <Stack mt='17px'
        h={300} w={200} >
        <h3>Courses</h3>{courses.map((course) => (

          <Button variant="filled" key={course.id}
            size="md" weight={500} color={btnactive === course.id ? "black" : "gray"} onClick={() => {
              setBtnActive(course.id); handleCourseClick(course.id); open();
            }} >
            {course.name}
          </Button>
        ))}
      </Stack>

      <Card >
        {/* Modal content */}
       
        <Grid>
          <Grid.Col span={6}><h3>Subjects</h3>
            <Card withBorder  padding="lg" shadow="md" style={{ minWidth: 400 }}>
               {state.length === 0 ? (
              <h4>No data here</h4> ) :(
              <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={state.map((i) => i.id)} strategy={verticalListSortingStrategy}>
                  {state.map((item) => (
                    <SortableItem key={item.id} item={item} />
                  ))}
                </SortableContext>
              </DndContext>
              ) }
            </Card>


          </Grid.Col>
        </Grid>
      </Card>
</Flex>
    </AppLayout></>
  );
}
