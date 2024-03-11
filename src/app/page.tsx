"use client";
import Image from "next/image";
import TotalPostByPlatform from "../components/totalPostByPlatform";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import ShowAllSocialPosts from "../components/showAllSocialspost";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  HStack,
} from "@chakra-ui/react";
import firebase_app from "../firebase/config";
import {
  collection,
  getDocs,
  query,
  getFirestore,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "@chakra-ui/react";

Chart.register(...registerables);
const db = getFirestore(firebase_app);

const chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Facebook",
      data: [0, 0, 0, 0, 0],
      fill: false,
      borderColor: "#ffd400",
      tension: 0.1,
    },
    {
      label: "Instagram",
      data: [0, 0, 0, 0, 0],
      fill: false,
      borderColor: "#1DA1F2",
      tension: 0.1,
    },
    {
      label: "Twitter",
      data: [0, 0, 0, 0, 0],
      fill: false,
      borderColor: "#001aff",
      tension: 0.1,
    },
  ],
};

export default function Home() {
  const [topInstaPosts, setTopInstaPosts] = useState([]);
  const [topFbPosts, setTopFbPosts] = useState([]);
  const [topTwitterPost, setTopTwitterPost] = useState([]);

  useEffect(() => {
    // Reference to your collection

    // Query documents sorted by retweet_count in descending order and limit to 50
    const fbTopPosts = query(
      collection(db, "facebook"),
      orderBy("likesCount", "desc"),
      limit(15)
    );

    const instaTopPosts = query(
      collection(db, "instagram"),
      orderBy("likesCount", "desc"),
      limit(15)
    );

    const twitterTopPosts = query(
      collection(db, "twitter"),
      orderBy("public_metrics.retweet_count", "desc"),
      limit(15)
    );

    getDocs(twitterTopPosts)
      .then((querySnapshot) => {
        const allTwitterTopPosts: any = [];
        querySnapshot.forEach((doc) => {
          allTwitterTopPosts.push(doc.data());
          // console.log(doc.id, " => ", doc.data());
        });
        console.log(allTwitterTopPosts, "twitter");
        setTopTwitterPost(allTwitterTopPosts);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    getDocs(fbTopPosts)
      .then((querySnapshot) => {
        const allTwitterTopPosts: any = [];
        querySnapshot.forEach((doc) => {
          allTwitterTopPosts.push(doc.data());
          // console.log(doc.id, " => ", doc.data());
        });
        console.log(allTwitterTopPosts, "fb");
        setTopFbPosts(allTwitterTopPosts);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    getDocs(instaTopPosts)
      .then((querySnapshot) => {
        const allTwitterTopPosts: any = [];
        querySnapshot.forEach((doc) => {
          allTwitterTopPosts.push(doc.data());
          // console.log(doc.id, " => ", doc.data());
        });
        console.log(allTwitterTopPosts, "insta");
        setTopInstaPosts(allTwitterTopPosts);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }, []);

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
            <Box w="90%" height="90%"></Box>
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
              <Table>
                <Thead>
                  <Tr>
                    <Th>Post</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {topFbPosts.map((post, index) => (
                    <Tr key={index}>
                      {/* @ts-expect-error */}
                      <Link href={post.url}>
                        <HStack spacing="24px">
                          <FaFacebook display={"inline"} color="#1877F2" />
                          {/* @ts-expect-error */}
                          <span style={{ color: "#1877F2" }}> {post.url}</span>
                        </HStack>
                      </Link>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TabPanel>
            <TabPanel>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Post</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {topInstaPosts.map((post, index) => (
                    <Tr key={index}>
                      {/* @ts-expect-error */}
                      <Link href={post.url}>
                        <HStack spacing="24px">
                          <FaInstagram display={"inline"} color="#1877F2" />
                          {/* @ts-expect-error */}
                          <span style={{ color: "#1877F2" }}> {post.url}</span>
                        </HStack>
                      </Link>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TabPanel>
            <TabPanel>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Post</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {topTwitterPost.map((post, index) => (
                    <Tr key={index}>
                      {/* @ts-expect-error */}
                      <Link href={post.url}>
                        <HStack spacing="24px">
                          <FaFacebook display={"inline"} color="#1877F2" />
                          {/* @ts-expect-error */}
                          <span style={{ color: "#1877F2" }}> {post.url}</span>
                        </HStack>
                      </Link>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
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
