import { useWeather } from "@/context/WeatherContext";
import { useFetch } from "@/hooks/useFetch";
import { useTheme } from "@/theme/ThemeProvider";
import { ForecastResponseType } from "@/types/weather";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import ForecastCard from "../cards/ForecastCard";
import EmptyState from "../EmptyState";
import ErrorModal from "../ErrorModal";
import Loading from "../Loading";

export default function ForecastList() {
  const { setScrollForecast } = useWeather();
  const { theme } = useTheme();
  const [showError, setShowError] = useState(false);
  const [refreshing, setRefreshing] = useState(false); // Controle do pull-to-refresh

  const { setResponse, setSelectedForecast, citySearch, response } =
    useWeather(); // Dados globais: cidade atual, resposta da API e forecast selecionado

  // Hook de fetch configurado com endpoint
  const { data, loading, error, fetchData } = useFetch<ForecastResponseType>({
    url: "https://api.openweathermap.org/data/2.5/forecast",
  });

  //Função responsável por buscar dados do clima
  const fetchWeather = async (shouldReset: boolean) => {
    if (shouldReset) {
      setResponse(null);
      setSelectedForecast(null);
    } // Não reseta os dados no refresh
    const result = await fetchData({
      params: {
        q: citySearch,
        appid: process.env.EXPO_PUBLIC_WEATHER_KEY,
        units: "metric",
        lang: "pt_br",
      },
    });

    if (result != null) {
      setResponse(result);
      setSelectedForecast(result.list[0]);
    }
  };

  // Executa nova busca sempre que a cidade mudar
  useEffect(() => {
    fetchWeather(true);
  }, [citySearch]);

  // Pull to refresh
  const handleRefresh = async () => {
    setRefreshing(true);

    await fetchWeather(false);

    setRefreshing(false);
  };

  // Atualiza estado global quando novos dados chegam do hook
  useEffect(() => {
    if (data) {
      setSelectedForecast(data.list[0]);
      setResponse(data);
    }
  }, [data]);

  // Detecta qual item está visível na tela
  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setScrollForecast(viewableItems[0].item);
    }
  }).current;

  //Exibe modal de erro quando houver erro na requisição
  useEffect(() => {
    if (error) setShowError(true);
  }, [error]);

  // Configuração de visibilidade dos itens
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  // Renderização de cada item
  const renderItem = useCallback(
    ({ item }) => <ForecastCard item={item} />,
    [],
  );

  // Renderização do estado vazio
  const renderEmpty = () => {
    if (!isEmpty) return null;

    if (refreshing) return null;

    if (loading) return <Loading />;

    return (
      <EmptyState
        title="Sem dados"
        description="Não foi possível carregar o clima"
        icon="cloud-offline-outline"
      />
    );
  };

  // Lista de dados do forecast
  const listData = response?.list ?? [];
  // Verifica se está vazio
  const isEmpty = listData.length === 0;
  // Largura fixa de cada item
  const ITEM_WIDTH = 102;
  return (
    <View>
      <FlatList
        data={listData}
        keyExtractor={(item) => item.dt.toString()}
        horizontal
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        showsHorizontalScrollIndicator={false}
        initialNumToRender={10} // Otimizações de performance
        maxToRenderPerBatch={10} // Otimizações de performance
        windowSize={5} // Otimizações de performance
        ListEmptyComponent={renderEmpty}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={[theme.colors.primary]}
            tintColor={theme.colors.primary}
            progressBackgroundColor={theme.colors.card}
          />
        }
        getItemLayout={(_, index) => ({
          length: ITEM_WIDTH,
          offset: ITEM_WIDTH * index,
          index,
        })}
        contentContainerStyle={{
          paddingHorizontal: 36,
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        renderItem={renderItem}
      />

      {/* Modal de erros */}
      <ErrorModal
        visible={showError}
        message={error}
        onClose={() => setShowError(false)}
      />
    </View>
  );
}
