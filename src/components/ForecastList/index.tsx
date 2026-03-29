import { ForecastListType } from "@/types/weather";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ForecastCard from "../cards/ForecastCard";

type Props = {
  readonly data: ForecastListType;
};

export default function ForecastList({ data }: Props) {
  if (!data) return null;

  console.log(data[0]);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.dt.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <ForecastCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    padding: 12,
    borderRadius: 16,
    alignItems: "center",
    marginRight: 12,
  },
  icon: {
    width: 40,
    height: 40,
    marginVertical: 4,
  },
});
