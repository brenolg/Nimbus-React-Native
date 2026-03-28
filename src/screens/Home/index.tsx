import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../../components/EmptyState";
import ErrorModal from "../../components/ErrorModal";
import ThemeToggle from "../../components/inputs/ThemeToggle";
import Loading from "../../components/Loading";
import { useFetch } from "../../hooks/useFetch";
import { useTheme } from "../../theme/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();
  const [showError, setShowError] = useState(false);

  const { data, loading, error, fetchData } = useFetch({
    url: "https://api.openweathermap.org/data/2.5/weather",
  });

  useEffect(() => {
    const appid = process.env.EXPO_PUBLIC_WEATHER_KEY;

    fetchData({
      params: {
        q: "Belo Horizonte",
        appid: appid,
        units: "metric",
        lang: "pt_br",
      },
    });
  }, []);

  useEffect(() => {
    // console.log(data, error);
  }, [data, loading, error]);

  useEffect(() => {
    if (error) {
      setShowError(true);
    }
  }, [error]);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <SafeAreaView style={styles.safe}>
        <Text style={{ color: theme.colors.text }}>Home</Text>
        <ThemeToggle />

        <EmptyState
          title="Sem dados"
          description="Não foi possível carregar o clima"
          icon="cloud-offline-outline"
        />
        {/* LOADING */}
        {loading && <Loading />}
        {/* Modal de erro */}
        <ErrorModal
          visible={showError}
          message={error}
          onClose={() => setShowError(false)}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safe: {
    flex: 1,
  },
});
