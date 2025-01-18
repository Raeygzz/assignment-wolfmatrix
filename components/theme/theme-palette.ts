interface ThemePalette {
  colors: {
    [key: string]: {
      light: string;
      DEFAULT: string;
      dark: string;
    };
  };
}

const ThemePalette: ThemePalette = {
  colors: {
    primary: {
      light: "#7C83FD", // Light variant
      DEFAULT: "#5A67D8", // Base primary color
      dark: "#3B49DF", // Dark variant
    },
    secondary: {
      light: "#FCD34D", // Light variant
      DEFAULT: "#FBBF24", // Base secondary color
      dark: "#F59E0B", // Dark variant
    },
    accent: {
      light: "#34D399", // Light variant
      DEFAULT: "#10B981", // Base accent color
      dark: "#059669", // Dark variant
    },
    neutral: {
      light: "#E5E7EB", // Light variant
      DEFAULT: "#9CA3AF", // Base neutral color
      dark: "#4B5563", // Dark variant
    },
    background: {
      light: "#F9FAFB", // Light background
      DEFAULT: "#FFFFFF", // Default background
      dark: "#1F2937", // Dark background
    },
  },
};

export { ThemePalette };
