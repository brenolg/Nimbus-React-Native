import { useWeather } from "@/context/WeatherContext";
import React, { useRef } from "react";
import { FlatList, View } from "react-native";
import ForecastCard from "../cards/ForecastCard";

export default function ForecastList() {
  const { response, setScrollForecast } = useWeather();

  const data = response?.list;

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setScrollForecast(viewableItems[0].item);
    }
  }).current;
  if (!data) return null;

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.dt.toString()}
        horizontal
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 36,
        }}
        renderItem={({ item }) => <ForecastCard item={item} />}
      />
    </View>
  );
}
