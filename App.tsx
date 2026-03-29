import { WeatherProvider } from "@/context/WeatherContext";
import Navigation from "./src/navigation";
import { AppThemeProvider } from "./src/theme/ThemeProvider";

export default function App() {
  return (
    <WeatherProvider>
      <AppThemeProvider>
        <Navigation />
      </AppThemeProvider>
    </WeatherProvider>
  );
}
