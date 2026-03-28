import { ReactNode } from "react";

type HeaderProps = {
  title?: string;
  right?: ReactNode;
  left?: ReactNode;
};

export const createHeaderOptions = ({ title, right, left }: HeaderProps) => ({
  title,
  headerRight: right ? () => right : undefined,
  headerLeft: left ? () => left : undefined,
});
