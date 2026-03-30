import ForecastList from "@/components/ForecastList";
import SelectModal from "@/components/inputs/SelectModal";
import SelectedForecast from "@/components/SelectedForecast";
import { useWeather } from "@/context/WeatherContext";
import { formatDayOfWeek } from "@/helpers/formatDate";
import { useTheme } from "@/theme/ThemeProvider";
import { Feather } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { cityOptions } from "./factory";
import { createStyles } from "./styles";

export default function Home() {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const { response, scrollForecast, setCitySearch } = useWeather();

  // Dados do dia atual
  const current = response?.list[0];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Dados do dia */}
        {response && (
          <View style={styles.header}>
            {/* Cidade */}
            <View style={styles.locationRow}>
              <Feather name="map-pin" size={14} color={theme.colors.primary} />
              <Text style={styles.locationText}>{response.city.name}</Text>
            </View>
            {/* Temperatura */}
            <Text style={styles.temp}>{Math.round(current.main.temp)}°C</Text>
            {/* Descrição */}
            <Text style={styles.description}>
              {current.weather[0].description}
            </Text>
            {/* Dia q esta no scroll*/}
            <Text style={styles.description}>
              {formatDayOfWeek((scrollForecast ?? current)?.dt_txt || "")}
            </Text>
            {/* Divider */}
            <View style={styles.divider} />
          </View>
        )}
        {/* Lista de cards*/}
        <ForecastList />
        {/* Detalhes do card selecionado*/}
        <SelectedForecast />
      </ScrollView>

      {/* Modal se selecionar cidade*/}
      <SelectModal
        onChange={setCitySearch}
        options={cityOptions}
        iconName="location-outline"
      />
    </SafeAreaView>
  );
}
