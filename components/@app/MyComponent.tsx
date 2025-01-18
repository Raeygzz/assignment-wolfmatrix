import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, FlatList, TextInput } from "react-native";

import { ListRender } from "./ListRender";
import { Input, Loader } from "../common";

import { ListResponse } from "@/redux/models";
import { setSelectedItem } from "@/redux/features";
import { useAppDispatch, useAppSelector } from "@/redux/store";

interface MyComponentProps {
  data: ListResponse[];
}

const MyComponent = ({ data }: MyComponentProps) => {
  const { selectedData } = useAppSelector((state) => state.list.fetchList);

  const [dataSource, setDataSource] = useState<ListResponse[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useAppDispatch();
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (data.length > 0) {
      setDataSource(data);
    }
  }, [data]);

  useEffect(() => {
    if (searchTerm.length > 1) {
      setDataSource(data.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase())));
      return;
    }

    setDataSource(data);
  }, [searchTerm]);

  const handleSelect = (item: ListResponse) => {
    dispatch(setSelectedItem(item));
  };

  const handleClear = () => {
    inputRef?.current?.clear();

    if (data.length > 0) {
      setDataSource(data);
    }
  };

  return (
    <View className="flex-1 bg-slate-100 w-full h-full px-5">
      <View className="mt-10" />

      <Input inputRef={inputRef} placeholder="Type here" onChangeText={setSearchTerm} value={searchTerm} />

      <TouchableOpacity onPress={handleClear} className="bg-blue-500 self-center p-2 w-20 rounded-md">
        <Text className="text-center text-white text-base font-normal not-italic">Clear</Text>
      </TouchableOpacity>

      <View className="mt-10" />

      <FlatList
        data={dataSource}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={() => <Loader />}
        renderItem={({ item }) => (
          <ListRender item={item} selectedData={selectedData} onPress={() => handleSelect(item)} />
        )}
      />
    </View>
  );
};

export { MyComponent };
