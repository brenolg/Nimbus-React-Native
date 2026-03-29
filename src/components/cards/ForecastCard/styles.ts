import { StyleSheet } from "react-native";

export const createStyles = (theme: any) =>
  StyleSheet.create({
    card: {
      width: 120,
      padding: 14,
      borderRadius: 20,
    },
    time: {
      fontSize: 16,
      textAlign: "center",
      color: theme.colors.secondaryText,
      marginBottom: 12,
      fontWeight: "500",
    },
    icon: {
      width: 90,
      height: 90,
      alignSelf: "center",
    },
    temp: {
      fontSize: 22,
      fontWeight: "bold",
      textAlign: "center",
      color: theme.colors.text,
    },
    info: {
      fontSize: 14,
      color: theme.colors.text,
      textAlign: "center",

      marginBottom: 12,
      lineHeight: 14,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    rowText: {
      fontSize: 14,
      color: theme.colors.text,
      marginLeft: 4,
      lineHeight: 14,
    },
  });
