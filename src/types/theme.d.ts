declare global {
  namespace Jss {
    export interface Theme {
      colors: {
        primary: string;
        secondary: string;
        tertiary: string;

        surface: string;

        success: string;
        error: string;

        onPrimary: string;
        onSecondary: string;
        onTertiary: string;

        onSurface: string;
        onSurfaceHighlight: string;

        onSuccess: string;
        onError: string;
      };
    }
  }
}

export {};
