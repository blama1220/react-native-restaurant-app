import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultsShowScreen = ({ navigation }) => {
  //using the id from ResultList of each item to connect with
  const id = navigation.getParam("id");
  return (
    <View>
      <Text>Result Show</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
