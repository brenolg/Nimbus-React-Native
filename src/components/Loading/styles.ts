import { StyleSheet } from "react-native";

export const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingTop: 36,
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
  });
