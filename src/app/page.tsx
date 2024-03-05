"use client";
import Image from "next/image";
import Link from "next/link";
import TotalPostByPlatform from "../components/totalPostByPlatform";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import ShowAllSocialPosts from "../components/showAllSocialspost";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
Chart.register(...registerables);

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Facebook",
      data: [10, 40, 30, 100, 50],
      fill: false,
      borderColor: "#ffd400",
      tension: 0.1,
    },
    {
      label: "Twitter",
      data: [5, 10, 100, 60, 90],
      fill: false,
      borderColor: "#001aff",
      tension: 0.1,
    },
  ],
};

export default function Home() {
  return (
    <Box mt={5} mb="200px">
      <Box mb={10}>
        <h1 className="text-center text-4xl font-extrabold leading-12 tracking-tight text-gray-900">
          Liberate Literacy Social Media Campaign <br />{" "}
        </h1>
        <h1
          className="text-center text-4xl font-extrabold leading-12 tracking-tight text-blue-600 mt-10 dark:text-blue-500"
          style={{
            borderBottom: " 6px double rgb(37, 99, 235)",
            display: "table",
            margin: "0 auto",
          }}
        >
          Data Visualization
        </h1>
      </Box>
      <Box mb={40}>
        {" "}
        <ShowAllSocialPosts />
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={10} p="5">
        <GridItem colSpan={1} bg="gray.50" p={8}>
          {" "}
          <TotalPostByPlatform />
        </GridItem>
        <GridItem colSpan={1} width={533} height={577}>
          <GridItem
            colSpan={1}
            // bg="gray.50"
            p={8}
            height={"100%"}
            textAlign={"center"}
          >
            <Heading size="md" mb={5}>
              Top Authors
            </Heading>
          </GridItem>
        </GridItem>
        <GridItem colSpan={1}>
          <GridItem
            colSpan={1}
            bg="gray.50"
            p={8}
            height={"100%"}
            textAlign={"center"}
          >
            <Heading size="md" mb={5}>
              Top Books
            </Heading>
          </GridItem>
        </GridItem>
        <GridItem colSpan={1} width={533} height={577}>
          <GridItem
            colSpan={1}
            // bg="gray.50"
            p={8}
            height={"100%"}
            textAlign={"center"}
          >
            <Heading size="md" mb={5}>
              User Engagement
            </Heading>
          </GridItem>
        </GridItem>
        <GridItem colSpan={1}>
          <GridItem
            colSpan={1}
            bg="gray.50"
            p={8}
            height={"100%"}
            textAlign={"center"}
          >
            <Heading size="md" mb={5}>
              Geographical Distribution
            </Heading>
            <Box w="90%" height="90%">
              {/* <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyDs6vyQzE2cTLFlhtmTd0HHA0HNnsy8N3U",
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              ></GoogleMapReact> */}
            </Box>
          </GridItem>
        </GridItem>
        <GridItem colSpan={1}>
          <GridItem
            colSpan={1}
            // bg="gray.50"
            p={8}
            height={"100%"}
            textAlign={"center"}
          >
            <Heading size="md" mb={5}>
              Influencer Engagement
            </Heading>
          </GridItem>
        </GridItem>
      </Grid>
      <Box m="auto" mt="200px" mb={"300px"} width="90&">
        <Heading mb={20} textAlign={"center"}>
          Top Posts on Different Platforms
        </Heading>
        <Tabs variant="soft-rounded" colorScheme="green" isFitted px={10}>
          <TabList>
            <Tab>Facebook</Tab>
            <Tab>Instagram</Tab>
            <Tab>Twitter</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>Still Analyzing Data</p>
            </TabPanel>
            <TabPanel>
            <p>Still Analyzing Data</p>

            </TabPanel>
            <TabPanel>
            <p>Still Analyzing Data</p>

            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      <Box mt={20} padding={20} height="700px" justifyContent={"center"}>
        <Heading
          m="0 auto"
          mb={20}
          borderBottom={"18px solid #ffd400"}
          display="table"
          textAlign={"center"}
        >
          Trends Over Time
        </Heading>
        <Line
          width="1000px"
          height="500px"
          data={chartData}
          style={{ margin: "0 auto" }}
        />
      </Box>
    </Box>
  );
}
