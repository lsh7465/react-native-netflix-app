import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const AddWatchListButton = () => {
  return (
    <Pressable>
      <View style={styles.playButton}>
        <Icon name="plus" size={24} color="#fcffff" />
        <Text style={styles.buttonText}>Add Watch</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  playButton: {
    backgroundColor: "#171717",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  buttonText: {
    color: "#fcffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AddWatchListButton;
