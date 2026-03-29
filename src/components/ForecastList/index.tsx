import { ForecastListType } from "@/types/weather";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

type Props = {
  readonly data: ForecastListType;
};

export default function ForecastList({ data }: Props) {
  if (!data) return null;

  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.dt.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              {/* Hora */}
              <Text>{item.dt_txt}</Text>
              {/* Descrição */}
              <Text>{item.weather[0].description}</Text>
              <Image
                source={{
                  uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`,
                }}
                style={styles.icon}
              />

              {/* Temperatura */}
              <Text>{item.main.temp}</Text>
              {/* Sessação térmica */}
              <Text>{item.main.feels_like}</Text>
              {/*variação no período */}
              <Text>
                {item.main.temp_min} {item.main.temp_max}
              </Text>
              {/* Umidade */}
              <Text>{item.main.humidity}</Text>
              {/* Velocidade do vento*/}
              <Text> {item.wind.speed}</Text>
              {/*Probabilidade de chuva */}
              <Text>{item.pop}</Text>
              {/*Cobertura de nuvens*/}
              <Text>{item.clouds.all}</Text>
            </View>
          );
        }}
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
