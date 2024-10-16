import { Text, View } from "react-native";

type userProps = {
  name: string;
  age: string;
};
export default function UserCard(props: userProps) {
  return (
    <View className="border-solid border-2 border-green-500 p-4 mb-5">
      <Text className="text-3xl">Name: {props.name}</Text>
      <Text className="text-lg">Age: {props.age}</Text>
    </View>
  );
}
