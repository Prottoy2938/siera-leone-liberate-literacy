"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Accordion,
  Spinner,
  AccordionItem,
  AccordionButton,
  Heading,
  HStack,
  AccordionPanel,
} from "@chakra-ui/react";

import {
  collection,
  getDocs,
  query,
  getFirestore,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import firebase_app from "../firebase/config";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "@chakra-ui/react";

const db = getFirestore(firebase_app);

const ShowAllSocialPosts = () => {
  const [instagramPosts, setInstagramPosts] = useState<any[]>([]);
  const [twitterPosts, setTwitterPosts] = useState<any[]>([]);
  const [facebookPosts, setFacebookPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(false);

        const instagramQuery = query(
          collection(db, "instagram"),
          limit(100),
          orderBy("createdAt")
        );
        const twitterQuery = query(
          collection(db, "twitter"),
          limit(100),
          orderBy("createdAt")
        );
        const facebookQuery = query(
          collection(db, "facebook"),
          limit(100),
          orderBy("createdAt")
        );

        const [instagramSnapshot, twitterSnapshot, facebookSnapshot] =
          await Promise.all([
            getDocs(instagramQuery),
            getDocs(twitterQuery),
            getDocs(facebookQuery),
          ]);

        const instagramData = instagramSnapshot.docs.map((doc) => doc.data());
        const twitterData = twitterSnapshot.docs.map((doc) => doc.data());
        const facebookData = facebookSnapshot.docs.map((doc) => doc.data());

        setInstagramPosts(instagramData);
        setTwitterPosts(twitterData);
        setFacebookPosts(facebookData);
      } catch (e) {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      {loading ? (
        <Box pos="fixed" left="49vw" top="45vh">
          <Spinner />
        </Box>
      ) : (
        <Box width="90%" m="0 auto">
          <Heading size="md" textAlign={"center"} mb={5}>
            Recent Posts
          </Heading>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Instagram
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Table>
                  <Thead>
                    <Tr>
                      <Th>Post</Th>
                    </Tr>
                  </Thead>
                  <Tbody mt={20}>
                    {instagramPosts.map((post, index) => (
                      <Tr key={index} mt={5}>
                        <Link href={post.url}>
                          <HStack spacing="24px">
                            <FaInstagram display={"inline"} color="#E4405F" />
                            <span style={{ color: "#E4405F" }}>
                              {" "}
                              {post.url}
                            </span>
                          </HStack>
                        </Link>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Facebook
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Table>
                  <Thead>
                    <Tr>
                      <Th>Post</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {facebookPosts.map((post, index) => (
                      <Tr key={index}>
                        <Link href={post.url}>
                          <HStack spacing="24px">
                            <FaFacebook display={"inline"} color="#1877F2" />
                            <span style={{ color: "#1877F2" }}>
                              {" "}
                              {post.url}
                            </span>
                          </HStack>
                        </Link>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Twitter
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Table>
                  <Thead>
                    <Tr>
                      <Th>Post</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {twitterPosts.map((post, index) => (
                      <Tr key={index}>
                        <Link href={post.url}>
                          <HStack spacing="24px">
                            <FaTwitter display={"inline"} color="#1877F2" />
                            <span style={{ color: "#1877F2" }}>
                              {" "}
                              {post.url}
                            </span>
                          </HStack>
                        </Link>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      )}
    </>
  );
};

export default ShowAllSocialPosts;
