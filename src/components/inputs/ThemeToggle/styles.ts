import { StyleSheet } from "react-native";

export const createStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 24,
    },
    switch: {
      transform: [{ scale: 0.85 }],
    },
  });
