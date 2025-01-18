const AppConstants = Object.freeze({
  Config: {
    Api: {
      apiURL: process.env.EXPO_PUBLIC_BASE_URL,
      maxConnectionTimeout: 20000, // twenty-second
    },
    Pagination: {
      pageSize: 15,
      pageNumber: 1,
    },
    Component: {
      actionDebounceTime: 1500, // 1.5 seconds
      otp: {
        otpLength: 6,
        otpResendTimeout: 60, // 1 minutes
      },
    },
    Validation: {
      passwordLength: 8,
      MOBILE_NUMBER_DIGIT: 10,
    },
    IMAGE_FILE_TYPE: ["image/png", "image/jpeg", "image/jpg"],
  },
  StorageKey: {
    appSession: "app-session",
    appLanguage: "app_language",
    onboardingState: "onboarding-state",
    rememberUser: "remember-user",
    userSession: "user-session",

    biometricInfo: "biometric-info",
    biometricEnabled: "biometric-enabled",
    biometricAppSession: "biometric-app-session",
    biometricUserSession: "biometric-user-session",
    biometricFirstScreenDismissed: "biometric-first-screen-dismissed",
  },
  Static: {
    YES_NO_ARRAY: [
      { id: "0", label: "Yes", value: "1" },
      { id: "1", label: "No", value: "0" },
    ],
  },
  ApiKeys: {
    list: {
      fetchList: "/todos",
    },
  },
});

export { AppConstants };
