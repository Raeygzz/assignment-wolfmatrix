import React, { PropsWithChildren, useEffect } from "react";
import { SplashScreen } from "expo-router";
import {
  useFonts,
  HankenGrotesk_100Thin,
  HankenGrotesk_200ExtraLight,
  HankenGrotesk_300Light,
  HankenGrotesk_400Regular,
  HankenGrotesk_500Medium,
  HankenGrotesk_600SemiBold,
  HankenGrotesk_700Bold,
  HankenGrotesk_800ExtraBold,
  HankenGrotesk_900Black,
  HankenGrotesk_100Thin_Italic,
  HankenGrotesk_200ExtraLight_Italic,
  HankenGrotesk_300Light_Italic,
  HankenGrotesk_400Regular_Italic,
  HankenGrotesk_500Medium_Italic,
  HankenGrotesk_600SemiBold_Italic,
  HankenGrotesk_700Bold_Italic,
  HankenGrotesk_800ExtraBold_Italic,
  HankenGrotesk_900Black_Italic,
} from "@expo-google-fonts/hanken-grotesk";

const AppConfiguration = ({ children }: PropsWithChildren) => {
  const [loaded, error] = useFonts({
    HankenGrotesk_100Thin,
    HankenGrotesk_200ExtraLight,
    HankenGrotesk_300Light,
    HankenGrotesk_400Regular,
    HankenGrotesk_500Medium,
    HankenGrotesk_600SemiBold,
    HankenGrotesk_700Bold,
    HankenGrotesk_800ExtraBold,
    HankenGrotesk_900Black,
    HankenGrotesk_100Thin_Italic,
    HankenGrotesk_200ExtraLight_Italic,
    HankenGrotesk_300Light_Italic,
    HankenGrotesk_400Regular_Italic,
    HankenGrotesk_500Medium_Italic,
    HankenGrotesk_600SemiBold_Italic,
    HankenGrotesk_700Bold_Italic,
    HankenGrotesk_800ExtraBold_Italic,
    HankenGrotesk_900Black_Italic,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return <>{children}</>;
};

export { AppConfiguration };
