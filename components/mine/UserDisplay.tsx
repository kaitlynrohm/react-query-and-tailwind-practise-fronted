import {
  Text,
  SafeAreaView,
  FlatList,
  Pressable,
  ActivityIndicator,
} from "react-native";
import UserCard from "./UserCard";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/api/users";

// type userDisplayProps = {
//   users: { name: string; age: string; id: string }[];
// };
export default function UserDisplay() {
  const {
    data: users,
    isLoading,
    error,
    refetch,
  } = useQuery({ queryKey: ["users"], queryFn: getUsers });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }
  const data = [...users];
  return (
    <SafeAreaView className="flex h-full flex-col w-screen items-center pt-14">
      <Text className="text-5xl">All Users</Text>
      <FlatList
        className="flex flex-col mt-3 w-5/6"
        data={data}
        renderItem={({ item }) => <UserCard name={item.name} age={item.age} />}
        keyExtractor={(item) => item.id}
      />
      <Pressable
        className="bg-emerald-400 border-solid border-2 pt-2 pb-2 pl-5 pr-5 m-6"
        onPress={() => refetch()}
      >
        <Text>Refresh</Text>
      </Pressable>
    </SafeAreaView>
  );
}
