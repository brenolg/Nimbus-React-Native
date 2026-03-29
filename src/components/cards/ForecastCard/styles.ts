import { StyleSheet } from "react-native";

export const createStyles = (theme: any) =>
  StyleSheet.create({
    card: {
      borderRadius: 12,
      padding: 12,
      width: 90,
      marginRight: 12,
    },
    time: {
      fontSize: 16,
      textAlign: "center",
      color: theme.colors.secondaryText,
      marginBottom: 12,
      fontWeight: "500",
      borderRadius: 6,
      borderWidth: 1,
      borderColor: theme.colors.background,
    },
    icon: {
      width: 70,
      height: 70,
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
    hint: {
      position: "absolute",
      bottom: 12,
      right: 0,
      opacity: 0.6,
    },
  });
