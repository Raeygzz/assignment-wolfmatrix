import React, { useMemo } from "react";
import { Text, TouchableOpacity } from "react-native";

import { ListResponse } from "@/redux/models";

interface ListRenderProps {
  item: ListResponse;
  onPress: () => void;
  selectedData: ListResponse[];
}

const ListRender = ({ item, onPress, selectedData = [] }: ListRenderProps) => {
  let render = useMemo(
    () => (selectedData.find((obj) => obj.id === item.id) ? "border-2 border-blue-400" : null),
    [selectedData, item],
  );

  return (
    <TouchableOpacity className={`bg-blue-50 ${render} p-2 mb-4`} onPress={onPress}>
      <Text className="font-normal not-italic text-base text-black">{item?.title}</Text>
    </TouchableOpacity>
  );
};

export { ListRender };
