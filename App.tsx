import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./src/navigation";

const Stack = createNativeStackNavigator();

export default function App() {
  return <Navigation />;
}
