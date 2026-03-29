import { formatDateToHour } from "@/helpers/formatDate";
import { useTheme } from "@/theme/ThemeProvider";
import { WeatherItemType } from "@/types/weather";
import { Feather } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import { createStyles } from "./styles";

type Props = {
  readonly item: WeatherItemType;
};

export default function ForecastCard({ item }: Props) {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.card}>
      {/* Hora */}
      <Text style={styles.time}>{formatDateToHour(item.dt_txt)}</Text>
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
      <Text style={styles.info}>{item.weather[0].description}</Text>
      {/* Probabilidade de chuva */}
      <View style={styles.row}>
        <Feather name="droplet" size={14} color={theme.colors.primary} />
        <Text style={styles.rowText}>{(item.pop * 100).toFixed(0)}%</Text>
      </View>
    </View>
  );
}
