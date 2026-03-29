import { ForecastListType } from "@/types/weather";
import React from "react";
import { FlatList, View } from "react-native";
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
