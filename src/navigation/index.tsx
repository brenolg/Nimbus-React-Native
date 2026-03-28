import ThemeToggle from "@/components/inputs/ThemeToggle";
import { useTheme } from "@/theme/ThemeProvider";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import Home from "../screens/Home";
import { createHeaderOptions } from "./headerConfig";
import { createNavigationTheme } from "./navigationTheme";
import { useNavigationTheme } from "./useNavigationTheme";

type RootStackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  const { theme } = useTheme();
  const screenOptions = useNavigationTheme();
  const navigationTheme = createNavigationTheme(theme);

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator id="root" screenOptions={screenOptions}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={createHeaderOptions({
            title: "Clima",
            right: (
              <View>
                <ThemeToggle />
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
