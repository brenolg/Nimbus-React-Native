import { useWeather } from "@/context/WeatherContext";
import { formatDateToHour } from "@/helpers/formatDate";
import { useTheme } from "@/theme/ThemeProvider";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { createStyles } from "./styles";

export default function SelectedForecast() {
  const { selectedForecast } = useWeather();
  const { theme } = useTheme();
  const styles = createStyles(theme);

  if (!selectedForecast) return null;

  return (
    <View style={styles.container}>
      {/* Descrição + divider */}
      <View style={styles.headerRow}>
        <Text style={styles.description}>
          {formatDateToHour(selectedForecast.dt_txt)} -{" "}
          {selectedForecast.weather[0].description}
        </Text>
        <View style={styles.line} />
      </View>

      {/* Sensação térmica */}
      <View style={styles.item}>
        <View style={styles.header}>
          <Feather name="thermometer" size={16} color={theme.colors.primary} />
          <Text style={styles.label}>Sensação</Text>
        </View>
        <Text style={styles.value}>
          {Math.round(selectedForecast.main.feels_like)}°C
        </Text>
      </View>

      {/* Min / Max */}
      <View style={styles.item}>
        <View style={styles.header}>
          <Feather name="thermometer" size={16} color={theme.colors.primary} />
          <Text style={styles.label}>Min / Máx</Text>
        </View>
        <Text style={styles.value}>
          ↓ {Math.round(selectedForecast.main.temp_min)}° / ↑{" "}
          {Math.round(selectedForecast.main.temp_max)}°
        </Text>
      </View>

      {/* Umidade */}
      <View style={styles.item}>
        <View style={styles.header}>
          <Feather name="droplet" size={16} color={theme.colors.primary} />
          <Text style={styles.label}>Umidade</Text>
        </View>
        <Text style={styles.value}>{selectedForecast.main.humidity}%</Text>
      </View>

      {/* Vento */}
      <View style={styles.item}>
        <View style={styles.header}>
          <Feather name="wind" size={16} color={theme.colors.primary} />
          <Text style={styles.label}>Vento</Text>
        </View>
        <Text style={styles.value}>
          {selectedForecast.wind.speed.toFixed(1)} m/s
        </Text>
      </View>

      {/* Nuvens */}
      <View style={styles.item}>
        <View style={styles.header}>
          <Feather name="cloud" size={16} color={theme.colors.primary} />
          <Text style={styles.label}>Nuvens</Text>
        </View>
        <Text style={styles.value}>{selectedForecast.clouds.all}%</Text>
      </View>

      {/* Pressão*/}
      <View style={styles.item}>
        <View style={styles.header}>
          <Feather name="bar-chart-2" size={16} color={theme.colors.primary} />
          <Text style={styles.label}>Pressão</Text>
        </View>
        <Text style={styles.value}>{selectedForecast.main.pressure} hPa</Text>
      </View>
    </View>
  );
}
