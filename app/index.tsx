import React, { useEffect } from "react";
import { Stack } from "expo-router";

import { fetchList } from "@/redux/features";
import { MyComponent } from "@/components/@app";
import { useAppDispatch, useAppSelector } from "@/redux/store";

export default function Index() {
  const { data: list } = useAppSelector((state) => state.list.fetchList);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchList());
  }, []);

  return (
    <>
      <Stack.Screen
        name="index"
        options={{
          title: "List",
          headerStyle: { backgroundColor: "#60a5fa" },
          headerTitleAlign: "center",
        }}
      />

      <MyComponent data={list} />
    </>
  );
}
