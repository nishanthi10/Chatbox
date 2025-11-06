import React, { useRef, useState } from "react";
import {
  Box,
  Text,
  Button,
  FileButton,
  Container,
  Table,
  Group,
  TextInput,
  ActionIcon,
} from "@mantine/core";
import { IconDownload, IconTrash, IconCalendar, IconSearch } from "@tabler/icons-react";
import AppLayout from "../../components/AppLayout/Index";

export function Details() {
  const resetRef = useRef(null);

  const [fileName, setFileName] = useState("");
  const [dFile, setDFile] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const clearFile = () => {
    setFileName("");
    setDFile(null);
    setTableData([]);
    setSearchQuery("");
    if (resetRef.current) resetRef.current();
  };

  const parseCSV = (text) => {
    const lines = text.split("\n").map((line) => line.trim()).filter(Boolean);
    const headers = lines[0].split(",").map((h) => h.trim());

    const data = [];
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(",").map((v) => v.trim());
      const row = {};
      headers.forEach((header, index) => {
        row[header.toLowerCase()] = values[index] || "";
      });
      data.push(row);
    }
    return data;
  };

  const handleFileSelect = (file) => {
    if (file) {
      setFileName(file.name);
      setDFile(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result;
        const parsedData = parseCSV(content);
        setTableData(parsedData);
      };
      reader.readAsText(file);
    } else {
      clearFile();
    }
  };

 
  const filteredData = tableData.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const rows = filteredData.map((item, index) => (
    <tr key={index}>
      <td>{item.name}</td>
      <td>{item.arena}</td>
      <td>{item.people}</td>
      <td>{item.allowed}</td>
      <td>${item.fee}</td>
      <td>{item.date}</td>
    </tr>
  ));

  return (
    <AppLayout>
      <Container size="lg">
        <Text fw={700} size="lg" mb="sm" c="grey">
          Classes
        </Text>

        <Box p="md" mb="md" style={{ backgroundColor: "#b9ddf5ff", borderRadius: 8 }}>
         
          <Button
            component="a"
            href={dFile ? URL.createObjectURL(dFile) : undefined}
            download={dFile ? dFile.name : undefined}
            leftSection={<IconDownload size={20}/>}
            mt="md"
           
          >
            Download Selected File
          </Button>

         
          <FileButton resetRef={resetRef} onChange={handleFileSelect} accept=".csv">
            {(props) => (
              <div style={{ display: "flex", width: "100%", marginTop: 16 }}>
                <TextInput
                  value={fileName}
                  readOnly
                  placeholder="Choose file..."
                  leftSection={<IconCalendar size={20} />}
                  rightSection={
                    fileName && (
                      <ActionIcon onClick={clearFile}>
                        <IconTrash size={16} />
                      </ActionIcon>
                    )
                  }
                  style={{ flex: 1 }}
                />
                <Button {...props} color="blue">
                  <IconDownload size={20}/> Change File
                </Button>
              </div>
            )}
          </FileButton>

          <Group>
            <TextInput
              placeholder="Search..."
              mt="md"
              mb="md"
              rightSection={<IconSearch size={16}/>}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
         </Group>

          
          <Container size="lg" my="xl">
            <Table>
              <thead>
                <tr
                  style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "1px solid gray",
                    padding: "8px",
                  }}
                >
                  <th>Name</th>
                  <th>Arena</th>
                  <th>People</th>
                  <th>Allowed</th>
                  <th>Fee</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {rows}
              </tbody>
            </Table>

           
            <Group mt="lg">
              <Button variant="outline" onClick={clearFile}>
                <IconDownload size={20} /> Clear File
              </Button>
              <Button
                variant="outline"
              >
                <IconDownload size={20}/> Submit All Data
              </Button>
            </Group>
          </Container>
        </Box>
      </Container>
    </AppLayout>
  );
}
