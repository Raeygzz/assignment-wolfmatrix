import { Provider } from "react-redux";
import { Stack } from "expo-router";

import "../global.css";

import { store } from "@/redux/store";
// import mockApi from "@/services/api/mock";
import { AppConfiguration } from "@/components";
import { SafeAreaProvider } from "react-native-safe-area-context";

// mockApi({ delayResponse: 2000, onNoMatch: "passthrough" });

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppConfiguration>
          <Stack />
        </AppConfiguration>
      </Provider>
    </SafeAreaProvider>
  );
}
