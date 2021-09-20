import { Typography } from "antd";
import { FC } from "react";

const { Text } = Typography;

export const Task: FC = ({ children }) => {
  return <Text>{children}</Text>;
};
