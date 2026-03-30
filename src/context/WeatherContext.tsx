import { ForecastResponseType, WeatherItemType } from "@/types/weather";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from "react";

type WeatherContextType = {
  response: ForecastResponseType | null;
  setResponse: Dispatch<SetStateAction<ForecastResponseType | null>>;

  selectedForecast: WeatherItemType | null;
  setSelectedForecast: Dispatch<SetStateAction<WeatherItemType | null>>;

  scrollForecast: WeatherItemType | null;
  setScrollForecast: Dispatch<SetStateAction<WeatherItemType | null>>;

  citySearch: string;
  setCitySearch: Dispatch<SetStateAction<string>>;

  openSearch: boolean;
  setOpenSearch: Dispatch<SetStateAction<boolean>>;
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
  const [citySearch, setCitySearch] = useState<string>("Belo Horizonte");
  const [openSearch, setOpenSearch] = useState<boolean>(false);

  const value = useMemo(
    () => ({
      response,
      setResponse,
      selectedForecast,
      setSelectedForecast,
      scrollForecast,
      setScrollForecast,
      citySearch,
      setCitySearch,
      openSearch,
      setOpenSearch,
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
