import React, { useEffect, useState } from "react";
import {
  Button,
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import axiosInstance from "../api/axios";
import { BASE_URL } from "./Banner";
import DetailsText from "./DetailsText";
import { LinearGradient } from "expo-linear-gradient";

const MovieDetails = ({ isModalVisible, movie, closeModal }) => {
  if (!movie) return null;
  const [details, setDetails] = useState(null);

  const type =
    movie.media_type === "movie" || !movie.media_type ? "movie" : "tv";
  const movieDetailsPath = `/${type}/${movie.id}?append_to_response=credits`;

  useEffect(() => {
    async function fetchDetails() {
      try {
        const response = await axiosInstance.get(movieDetailsPath);
        setDetails(response.data);
      } catch (error) {}
    }
    fetchDetails();
  });

  return (
    <Modal visible={isModalVisible}>
      <View style={styles.container}>
        <ScrollView>
          <ImageBackground
            source={{
              uri: `${BASE_URL}${movie.backdrop_path}`,
            }}
            style={styles.backDrop}
          >
            <LinearGradient
              colors={["transparent", "rgba(37,37,37,0.7)", "#171717"]}
              style={styles.radialGradient}
            />
          </ImageBackground>
          <DetailsText
            title={movie?.title || movie?.original_title || movie?.name}
            description={movie?.overview}
            genres={details?.genres}
          />
          <Button title="Close" onPress={closeModal} />
        </ScrollView>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
  },
  backDrop: {
    width: "100%",
    height: 450,
    objectFit: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
  },
  radialGradient: {
    position: "absolute",
    height: 180,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
export default MovieDetails;
