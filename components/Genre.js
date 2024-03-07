import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Genre = ({ genres }) => {
  return (
    <View style={styles.genres}>
      {genres?.map((genre, index) => (
        <View key={index} style={styles.genre}>
          <Text style={styles.genre__text}>{genre.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default Genre;

const styles = StyleSheet.create({
  genres: {
    flexDirection: "row",
    gap: 7,
  },
  genre: {
    paddingHorizontal: 3,
    paddingVertical: 5,
    borderRadius: 25,
    borderColor: "#f2f2f2",
    borderWidth: 1,
    marginBottom: 16,
  },
  genre__text: {
    color: "#f2f2f2",
  },
});
