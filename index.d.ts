declare module "react-native-immersive-bars" {
    export function changeBarColors(
        isDarkMode: boolean,
        translucentLightStr?: string,
        translucentDarkStr?: string
    ): void;

    export function setTranslucentBarColor(
        isDarkMode: boolean,
        translucentLightStr?: string,
        translucentDarkStr?: string
    ): void;
}
