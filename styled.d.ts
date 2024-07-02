import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      granto_color: string;
      granto_button: string;
      granto_button_hover: string;
    };
  }
}
