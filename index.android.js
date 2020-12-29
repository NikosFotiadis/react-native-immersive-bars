import { NativeModules } from "react-native";

const { ImmersiveBars } = NativeModules;

const changeBarColors = (
    isDarkMode = false,
    translucentLightStr = "",
    translucentDarkStr = "",
) => {
    ImmersiveBars.changeBarColors(isDarkMode, translucentLightStr, translucentDarkStr);
};

const setTranslucentBarColor = (
    isDarkMode = false,
    translucentLightStr = "",
    translucentDarkStr = "",
) => {
    ImmersiveBars.setTranslucentBarColor(isDarkMode, translucentLightStr, translucentDarkStr);
};

export { changeBarColors, setTranslucentBarColor };
