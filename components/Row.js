import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import axiosInstance from "../api/axios";
import { BASE_URL } from "./Banner";

const Row = ({ title, fetchUrl, isLargeRow, onOpenModal }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axiosInstance.get(fetchUrl);

      setMovies(response.data.results);
    }
    fetchData();
  }, []);

  return (
    <View style={{ marginTop: 20, marginBottom: 20 }}>
      <Text style={styles.row__title}>{title}</Text>
      <ScrollView horizontal contentContainerStyle={styles.row__posters}>
        {movies.map((movie) => (
          <Pressable key={movie.id} onPress={() => onOpenModal(movie)}>
            <Image
              source={{ uri: `${BASE_URL}${movie.poster_path}` }}
              style={{
                width: isLargeRow ? 150 : 100,
                height: isLargeRow ? 220 : 150,
                marginRight: 10,
                borderRadius: 5,
              }}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  row__title: {
    paddingLeft: 10,
    color: "#f2f2f2",
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 6,
  },
  row__posters: {
    paddingLeft: 10,
  },
});

export default Row;
