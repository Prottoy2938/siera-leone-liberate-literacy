import Image from "next/image";
import Link from "next/link";
import TotalPostByPlatform from "../components/totalPostByPlatform";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import ShowAllSocialPosts from "../components/showAllSocialspost";

export default function Home() {
  return (
    <Box mt={5} mb={10}>
      <Box mb={10}>
        <h1 className="text-center text-4xl font-extrabold leading-12 tracking-tight text-gray-900">
          Liberate Literacy Social Media Campaign <br />{" "}
        </h1>
        <h1
          className="mt-10 text-center text-4xl font-extrabold leading-12 tracking-tight text-blue-600 mt-10 dark:text-blue-500"
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
        <GridItem colSpan={1}>{/* Content for the second column */}</GridItem>
        <GridItem colSpan={1}>{/* Content for the third column */}</GridItem>
      </Grid>
    </Box>
  );
}
