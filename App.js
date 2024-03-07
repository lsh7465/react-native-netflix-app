import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Banner from "./components/Banner";
import requests from "./api/requests";
import Row from "./components/Row";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <Banner fetchUrl={requests.fetchNowPlaying} />
        <Row title="Trending" fetchUrl={requests.fetchTrending} isLargeRow />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
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
  ScrollView: {
    width: "100%",
  },
});
