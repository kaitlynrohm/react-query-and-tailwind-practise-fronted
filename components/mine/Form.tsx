import { useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
import { useMutation } from "@tanstack/react-query";
import { addUser } from "@/api/users";

export default function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

  const { mutate, error, data } = useMutation({
    mutationFn: () => {
      const response = addUser({ name: name, id: id, age: age });
      setName("");
      setAge("");
      setId("");
      return response;
    },
  });
  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <SafeAreaView className="mt-14 flex flex-col items-center w-screen">
      <Text className="text-5xl mb-7">Add a User</Text>
      <View className="w-2/3 flex flex-row mb-5">
        <Text className="text-lg w-1/4">Name: </Text>
        <TextInput
          onChange={(e) => setName(e.nativeEvent.text)}
          value={name}
          className="w-3/4 order-solid border-2 pl-1 text-lg"
        />
      </View>
      <View className="w-2/3 flex flex-row mb-5">
        <Text className="text-lg w-1/4">Age: </Text>
        <TextInput
          onChange={(e) => setAge(e.nativeEvent.text)}
          value={age}
          className="w-3/4 border-solid border-2 pl-1 text-lg"
        />
      </View>
      <View className="w-2/3 flex flex-row mb-5">
        <Text className="text-lg w-1/4">ID: </Text>
        <TextInput
          onChange={(e) => setId(e.nativeEvent.text)}
          value={id}
          className="w-3/4 border-solid border-2 pl-1 text-lg"
        />
      </View>
      <Button
        title="submit"
        onPress={() => {
          mutate();
        }}
      />
      <Text>{data ? data.message : ""}</Text>
    </SafeAreaView>
  );
}
