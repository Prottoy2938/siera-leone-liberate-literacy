import Image from "next/image";
import Link from "next/link";
import TotalPostByPlatform from "../components/totalPostByPlatform";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import ShowAllSocialPosts from "../components/showAllSocialspost";
import GoogleMapReact from "google-map-react";
const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627,
  },
  zoom: 11,
};

export default function Home() {
  return (
    <Box mt={5} mb={10}>
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
    </Box>
  );
}
