import { formatDateToHour } from "@/helpers/formatDate";
import { useTheme } from "@/theme/ThemeProvider";
import { WeatherItemType } from "@/types/weather";
import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { createStyles } from "./styles";

type Props = {
  readonly item: WeatherItemType;
};

import { useWeather } from "@/context/WeatherContext";
export default function ForecastCard({ item }: Props) {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const { setSelectedForecast, selectedForecast, response } = useWeather();

  const isSelected = selectedForecast?.dt === item.dt;
  return (
    <TouchableOpacity
      style={[styles.card, isSelected && { borderColor: theme.colors.primary }]}
      activeOpacity={0.6}
      onPress={() =>
        setSelectedForecast(
          selectedForecast?.dt === item.dt ? response.list[0] : item,
        )
      }
    >
      {/* Hora */}
      <Text
        style={[
          styles.time,
          isSelected && {
            backgroundColor: theme.colors.card,
            borderColor: theme.colors.primary,
          },
        ]}
      >
        {formatDateToHour(item.dt_txt)}
      </Text>
      {/* Temperatura */}
      <Text style={styles.temp}>{Math.round(item.main.temp)}°C</Text>
      {/* Ícone */}
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`,
        }}
        style={styles.icon}
      />
      {/* Descrição */}

      {/* Probabilidade de chuva */}
      <View style={styles.row}>
        <Feather name="droplet" size={14} color={theme.colors.primary} />
        <Text style={styles.rowText}>{(item.pop * 100).toFixed(0)}%</Text>
      </View>
      <View style={styles.hint}>
        <Feather
          name={isSelected ? "chevron-up" : "chevron-down"}
          size={14}
          color={theme.colors.secondaryText}
        />
      </View>
    </TouchableOpacity>
  );
}
