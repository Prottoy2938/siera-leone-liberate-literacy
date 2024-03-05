import Image from "next/image";
import Link from "next/link";
import TotalPostByPlatform from "../components/totalPostByPlatform";
import { Box, Grid, GridItem } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box mt={5}>
      <Grid templateColumns="repeat(3, 1fr)" gap={10} p="0">
        <GridItem colSpan={1} bg="gray.50">
          {" "}
          <TotalPostByPlatform />
        </GridItem>
        <GridItem colSpan={1}>{/* Content for the second column */}</GridItem>
        <GridItem colSpan={1}>{/* Content for the third column */}</GridItem>
      </Grid>
    </Box>
  );
}
