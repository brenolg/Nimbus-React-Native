import { useTheme } from "../theme/ThemeProvider";

export function useNavigationTheme() {
  const { theme } = useTheme();

  return {
    headerStyle: {
      backgroundColor: theme.colors.card,
      elevation: 2,
      shadowOpacity: 0.1,
    },
    headerTitleStyle: {
      color: theme.colors.text,
    },
    headerTintColor: theme.colors.text,
    headerRightContainerStyle: {
      paddingRight: 36,
    },
    headerLeftContainerStyle: {
      paddingLeft: 36,
    },
    headerShadowVisible: false,
  };
}
