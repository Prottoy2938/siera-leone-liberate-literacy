"use client";
import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  getFirestore,
} from "firebase/firestore";
import { Heading, Spinner, Box } from "@chakra-ui/react";
import firebase_app from "../firebase/config";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const db = getFirestore(firebase_app);

const TotalPostByPlatform = () => {
  const [totalFacebookPost, setTotalFacebookPost] = useState(0);
  const [totalInstagramPost, setTotalInstagramPost] = useState(0);
  const [totalTwitterPost, setTotalTwitterPost] = useState(0);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTotalPost = async () => {
      const facebookDocRef = doc(
        collection(db, "analytics"),
        "facebook-analytics"
      );
      const instagramDocRef = doc(
        collection(db, "analytics"),
        "insta-analytics"
      );
      const twitterDocRef = doc(
        collection(db, "analytics"),
        "twitter-analytics"
      );

      const [facebookDocSnap, instagramDocSnap, twitterDocSnap] =
        await Promise.all([
          getDoc(facebookDocRef),
          getDoc(instagramDocRef),
          getDoc(twitterDocRef),
        ]);

      if (facebookDocSnap.exists()) {
        setTotalFacebookPost(facebookDocSnap.data().totalPost);
      }
      if (instagramDocSnap.exists()) {
        setTotalInstagramPost(instagramDocSnap.data().totalPost);
      }
      if (twitterDocSnap.exists()) {
        setTotalTwitterPost(twitterDocSnap.data().totalPost);
      }

      setLoading(false);
    };

    const unsubscribe = onSnapshot(
      doc(collection(db, "posts"), "facebook"),
      () => {
        fetchTotalPost();
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <Box textAlign={"center"}>
      {loading ? (
        <Box pos="fixed" left="45vw" top="45vh">
          <Spinner />
        </Box>
      ) : (
        <>
          <Heading size="md" mb={5}>
            Total Posts by Platform
          </Heading>
          <Pie
            options={{
              plugins: {
                legend: {
                  labels: {
                    font: {
                      size: 16, // Change this value to increase or decrease the font size
                    },
                  },
                },
              },
            }}
            data={{
              labels: [
                `Facebook ${totalFacebookPost}`,
                `Instagram ${totalInstagramPost}`,
                `Twitter ${totalTwitterPost}`,
              ],
              datasets: [
                {
                  data: [
                    totalFacebookPost,
                    totalInstagramPost,
                    totalTwitterPost,
                  ],
                  backgroundColor: ["#3b5998", "#C13584", "#1DA1F2"],
                },
              ],
            }}
          />
        </>
      )}
    </Box>
  );
};

export default TotalPostByPlatform;
