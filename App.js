import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import Banner from "./components/Banner";
import requests from "./api/requests";
import Row from "./components/Row";
import MovieDetails from "./components/MovieDetails";
import { useState } from "react";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  function openModal(movie) {
    setIsModalVisible(true);
    setSelectedMovie(movie);
  }
  function closeModal() {
    setIsModalVisible(false);
    setSelectedMovie(null);
  }

  return (
    <View style={styles.container}>
      <MovieDetails
        isModalVisible={isModalVisible}
        movie={selectedMovie}
        closeModal={closeModal}
      />
      <ScrollView style={styles.scrollView}>
        <Banner fetchUrl={requests.fetchNowPlaying} />
        <Row
          onOpenModal={openModal}
          title="NetFlix Originals"
          fetchUrl={requests.fetchNowPlaying}
          isLargeRow
        />
        <Row
          onOpenModal={openModal}
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
        />
        <Row
          onOpenModal={openModal}
          title="Top Rated"
          fetchUrl={requests.fetchTopRated}
        />
        <Row
          onOpenModal={openModal}
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
        />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#171717",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  scrollView: {
    width: "100%",
  },
});
