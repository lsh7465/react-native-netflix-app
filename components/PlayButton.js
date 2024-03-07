import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const PlayButton = () => {
  return (
    <Pressable>
      <View style={styles.playButton}>
        <Icon name="caretright" size={24} />
        <Text style={styles.buttonText}>Play</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  playButton: {
    backgroundColor: "#fcffff",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
  },
});

export default PlayButton;
