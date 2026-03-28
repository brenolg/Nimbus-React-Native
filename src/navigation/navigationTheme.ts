import { Theme as NavigationTheme } from "@react-navigation/native";

export const createNavigationTheme = (theme: any): NavigationTheme => {
  return {
    dark: theme.mode === "dark",
    colors: {
      background: theme.colors.background,
      card: theme.colors.background,
      text: theme.colors.text,
      primary: theme.colors.primary,
      border: theme.colors.border,
      notification: theme.colors.primary,
    },
    fonts: {
      regular: {
        fontFamily: "Poppins_400Regular",
        fontWeight: "400",
      },
      medium: {
        fontFamily: "Poppins_500Medium",
        fontWeight: "500",
      },
      bold: {
        fontFamily: "Poppins_600SemiBold",
        fontWeight: "600",
      },
      heavy: {
        fontFamily: "Poppins_700Bold",
        fontWeight: "700",
      },
    },
  };
};
