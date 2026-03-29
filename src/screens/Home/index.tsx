import ErrorModal from "@/components//ErrorModal";
import Loading from "@/components//Loading";
import EmptyState from "@/components/EmptyState";
import ForecastList from "@/components/ForecastList";
import { useFetch } from "@/hooks/useFetch";
import { useTheme } from "@/theme/ThemeProvider";
import { ForecastResponseType } from "@/types/weather";
import { Feather } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createStyles } from "./styles";

export default function Home() {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const [showError, setShowError] = useState(false);

  const { data, loading, error, fetchData } = useFetch<ForecastResponseType>({
    url: "https://api.openweathermap.org/data/2.5/forecast",
  });

  useEffect(() => {
    const appid = process.env.EXPO_PUBLIC_WEATHER_KEY;

    fetchData({
      params: {
        q: "Belo Horizonte",
        appid,
        units: "metric",
        lang: "pt_br",
      },
    });
  }, []);

  useEffect(() => {
    if (error) setShowError(true);
  }, [error]);

  const isEmpty = !data && !loading && !error;
  const hasData = !!data;
  const current = data?.list[0];

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safe}>
        {data && current && (
          <View style={styles.header}>
            {/* Cidade */}
            <View style={styles.locationRow}>
              <Feather name="map-pin" size={14} color={theme.colors.primary} />
              <Text style={styles.locationText}>{data.city.name}</Text>
            </View>

            {/* Temperatura */}
            <Text style={styles.temp}>{Math.round(current.main.temp)}°C</Text>

            {/* Descrição */}
            <Text style={styles.description}>
              {current.weather[0].description}
            </Text>
          </View>
        )}

        {/* Divider */}
        <View style={styles.divider} />

        {/* LOADING */}
        {loading && <Loading />}

        {hasData && <ForecastList data={data.list} />}

        {/* EMPTY */}
        {isEmpty && (
          <EmptyState
            title="Sem dados"
            description="Não foi possível carregar o clima"
            icon="cloud-offline-outline"
          />
        )}

        {/* ERROR */}
        <ErrorModal
          visible={showError}
          message={error}
          onClose={() => setShowError(false)}
        />
      </SafeAreaView>
    </View>
  );
}
