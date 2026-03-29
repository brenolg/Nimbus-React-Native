import { ForecastResponseType, WeatherItemType } from "@/types/weather";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type WeatherContextType = {
  response: ForecastResponseType | null;
  setResponse: (data: ForecastResponseType) => void;

  selectedForecast: WeatherItemType | null;
  setSelectedForecast: (item: WeatherItemType | null) => void;

  scrollForecast: WeatherItemType | null;
  setScrollForecast: (item: WeatherItemType | null) => void;
};

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

type Props = Readonly<{
  children: ReactNode;
}>;

export function WeatherProvider({ children }: Props) {
  const [response, setResponse] = useState<ForecastResponseType | null>(null);
  const [selectedForecast, setSelectedForecast] =
    useState<WeatherItemType | null>(null);
  const [scrollForecast, setScrollForecast] = useState<WeatherItemType | null>(
    null,
  );

  const value = useMemo(
    () => ({
      response,
      setResponse,
      selectedForecast,
      setSelectedForecast,
      scrollForecast,
      setScrollForecast,
    }),
    [response, selectedForecast, scrollForecast],
  );

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
}

export function useWeather() {
  const context = useContext(WeatherContext);

  return context;
}
