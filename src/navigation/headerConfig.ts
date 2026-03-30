import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { ReactNode } from "react";

type HeaderProps = {
  title?: string;
  right?: ReactNode;
  left?: ReactNode;
};

export const createHeaderOptions = ({
  title,
  right,
  left,
}: HeaderProps): NativeStackNavigationOptions => ({
  title,
  headerTitleAlign: "center",
  headerRight: right ? () => right : undefined,
  headerLeft: left ? () => left : undefined,
});
