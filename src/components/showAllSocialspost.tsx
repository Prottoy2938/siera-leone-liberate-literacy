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
} from "@chakra-ui/react";

import {
  collection,
  getDocs,
  query,
  getFirestore,
  where,
  limit,
} from "firebase/firestore";
import firebase_app from "../firebase/config";

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
        const instagramQuery = query(collection(db, "instagram"), limit(30));
        const twitterQuery = query(collection(db, "twitter"), limit(30));
        const facebookQuery = query(collection(db, "facebook"), limit(30));

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
    <Tabs>
      <TabList>
        <Tab>Instagram</Tab>
        <Tab>Twitter</Tab>
        <Tab>Facebook</Tab>
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
              {instagramPosts.map((post, index) => (
                <Tr key={index}>
                  <Td>{index}</Td>
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
              {twitterPosts.map((post, index) => (
                <Tr key={index}>
                  <Td>{index}</Td>
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
              {facebookPosts.map((post, index) => (
                <Tr key={index}>
                  <Td>{index}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ShowAllSocialPosts;
