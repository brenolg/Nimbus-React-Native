import { StyleSheet } from "react-native";

export const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    icon: {
      marginBottom: 16,
    },
    title: {
      fontSize: 16,
      fontWeight: "600",
      color: theme.colors.text,
      marginBottom: 6,
      textAlign: "center",
    },
    description: {
      fontSize: 14,
      color: theme.colors.secondaryText,
      textAlign: "center",
    },
  });
