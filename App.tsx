import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./src/navigation";
import { AppThemeProvider } from "./src/theme/ThemeProvider";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppThemeProvider>
      <Navigation />
    </AppThemeProvider>
  );
}
