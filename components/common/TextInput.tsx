import React, { RefObject, useState } from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
  editable?: boolean;
  error?: string;
  inputRef?: RefObject<TextInput> | null | undefined;
  label?: string;

  onChangeText: (val: string) => void;
  placeholder: string;
  required?: boolean;
  returnKeyType?:
    | "done"
    | "go"
    | "next"
    | "search"
    | "send"
    | "none"
    | "previous"
    | "default"
    | "emergency-call"
    | "google"
    | "join"
    | "route"
    | "yahoo";
  value: string;
}

const Input = ({
  editable = true,
  error = "",
  label,
  placeholder,
  onChangeText,
  value,
  required,
  returnKeyType = "done",
  inputRef,
  ...props
}: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View className="mb-6">
      {label ? (
        <View className="flex-row justify-start items-center gap-1 mb-1">
          <Text className="font-semibold text-sm not-italic text-black">{label}</Text>
        </View>
      ) : null}

      <TextInput
        ref={inputRef}
        editable={editable}
        className={`h-10 border-1 pl-3 text-sm ${isFocus ? "not-italic" : "italic"} font-normal ${
          editable ? "text-black" : "text-slate-600"
        } bg-slate-50 border-[1px] border-slate-300 rounded-lg`}
        onFocus={({ nativeEvent }) => setIsFocus(typeof nativeEvent?.target === "number" ? true : false)}
        placeholderTextColor="#94a3b8"
        placeholder={placeholder}
        returnKeyType={returnKeyType}
        onChangeText={onChangeText}
        value={value}
        {...props}
      />

      {error ? <Text className="text-sm pl-2 font-normal not-italic text-red-600">{error}</Text> : null}
    </View>
  );
};

export { Input };
