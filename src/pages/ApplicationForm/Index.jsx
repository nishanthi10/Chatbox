import { Container, Grid, TextInput, Button ,RadioGroup,SegmentedControl,NumberInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import classes from './Index.module.css';
import { useState } from 'react';
import { IconArrowRight,IconArrowLeft } from '@tabler/icons-react';
import { useForm } from '@mantine/form';

export const ApplicationForm = () => {
const [value, setValue] = useState(null);

const form = useForm({
    initialValues: {
    name: '',
    eaNumber: '',
    microchipNumber: '',
    racingName: '',
    height: '',
    colour: '',
    birthDate: null,
    countryOfBirth: '',
    passportNumber: '',
    bridleNumber: '',
    feiNumber: '',
    gradingPoint: '',
    sire: '',
    dam: '',
    damSire: '',
    sex: '',
    breed: '',
    registrationNumber: '',
    ahsaRegistrationNumber: '',
  },
    validate: {
      name: (value) => (value.length === 6 ? null :'Hourse Name must be 6 letters' ),
      eaNumber: (value) =>
        /^\d{8}$/.test(value) ? null : 'EA number must be 8 digits',
    },
  });

  return (
    <Container my="md"  style={{ backgroundColor: '#dcd8ddff'}}>
       <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Grid>
          <Grid.Col span={{ base: 12, xs: 12 }}><TextInput type="text" placeholder="Enter hourse name..." label="Name*" 
           {...form.getInputProps('name')}/>
           </Grid.Col>
        </Grid>
     <Grid>   
<Grid.Col span={{ base: 12, xs: 6 }}>
            <RadioGroup label="Stallion *" >
             <SegmentedControl data={['Yes', 'No']} fullWidth />
            </RadioGroup>
          </Grid.Col>

          <Grid.Col span={{ base: 12, xs: 6 }}>
            <RadioGroup label="Off The Track Horse *" >
              <SegmentedControl data={['Yes', 'No']} fullWidth/>
            </RadioGroup>
          </Grid.Col>
</Grid>
        <Grid>
          <Grid.Col span={{ base: 12, xs: 6 }}><TextInput type="text"
           placeholder="Enter 8 digit hourse EA number..." 
          label="EA Number"  {...form.getInputProps('eaNumber')} 
          /> </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}><TextInput type="text"
           placeholder="Enter microchip number..." 
          label="Microchip Number"  {...form.getInputProps('microchipNumber')} 
          /></Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={{ base: 12, xs: 12 }}><TextInput type="text" placeholder="Enter racing name..." label="Racing Name"   {...form.getInputProps('racingName')}/></Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={{ base: 12, xs: 6 }}>
            <NumberInput
      
        label="Height (feet)"
        placeholder="Enter hourse Height.."
        min={0} max={20} step={0.1}
        {...form.getInputProps('height')}
      />
              </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}><TextInput type="text" placeholder="Enter hourse colour.." label="colour"   {...form.getInputProps('colour')}/></Grid.Col>
        </Grid>
        <Grid >
          <Grid.Col span={{ base: 12, xs: 6 }}><DatePickerInput
      label="DOB / year of birth"
      placeholder="enter hourse DOB/year of birth.."
      value={value}
      onChange={setValue}
      {...form.getInputProps('birthDate')}
    /></Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}><TextInput type="text" placeholder="enter country of birth.." label="Country of Birth"    {...form.getInputProps('countryOfBirth')}/></Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={{ base: 12, xs: 6 }}><TextInput type="text" placeholder="Enter pasport number..." label="passport number"    {...form.getInputProps('passportNumber')}/> </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}><TextInput type="text" placeholder="Enter bridle number.." label="Bridal Number"{...form.getInputProps('BridalNumber')} /></Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={{ base: 12, xs: 6 }}><TextInput type="text" placeholder="Enter FIE number..." label="FEI Number" {...form.getInputProps('feiNumber')}/> </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}><TextInput type="text" placeholder="Enter grading point.." label="Grading Point" {...form.getInputProps('GradingPoint')}/></Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={{ base: 12, xs: 6 }}><TextInput type="text" placeholder="Enter hourse sire..." label="Sire" {...form.getInputProps('sire')}/> </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}><TextInput type="text" placeholder="Enter hourse dam.." label="Dam" {...form.getInputProps('dam')}/></Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={{ base: 12, xs: 12 }}><TextInput type="text" placeholder="Enter dam sire..." label="Dam Sire"{...form.getInputProps('damSire')}/></Grid.Col>
        </Grid>
         <Grid >
          <Grid.Col span={{ base: 12, xs: 6 }}><TextInput type="text" placeholder="Enter hourse sex..." label="Sex" {...form.getInputProps('sex')}/>  </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}><TextInput type="text" placeholder="Enter hourse breed.." label="Breed" {...form.getInputProps('breed')}/></Grid.Col>
        </Grid>
         <Grid>
          <Grid.Col span={{ base: 12, xs: 6 }}><TextInput type="text" placeholder="Enter registration number..." label="Registration Number" {...form.getInputProps('registrationNumber')}/> </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}><TextInput type="text" placeholder="Enter AHSA number.." label="AHSA Registration Number" {...form.getInputProps('ahsaRegistrationNumber')}
/></Grid.Col>
        </Grid>
         <Grid>
          <Grid.Col span={{ base: 12, xs: 6 }}><Button variant="outline" leftSection={<IconArrowLeft size={14} />}>Cancel </Button> </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }} align="end"><Button type="submit" variant="filled" rightSection={<IconArrowRight size={14} />}>Add Hourse </Button> </Grid.Col>
        </Grid>
        
      </form>
    </Container>
  );
};



