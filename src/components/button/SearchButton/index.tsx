import { useWeather } from "@/context/WeatherContext";
import { useTheme } from "@/theme/ThemeProvider";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { createStyles } from "./styles";

export default function SearchButton() {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const { setOpenSearch } = useWeather();

  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => {
        setOpenSearch(true);
      }}
    >
      <Ionicons name="search" size={24} color={theme.colors.primary} />
    </TouchableOpacity>
  );
}
