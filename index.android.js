import { NativeModules, Platform } from "react-native";

const { ImmersiveBars } = NativeModules;

const changeBarColors = (
    isDarkMode = false,
    translucentLightStr = "",
    translucentDarkStr = "",
) => {
    if(Platform.OS === 'android'){
        ImmersiveBars.changeBarColors(isDarkMode, translucentLightStr, translucentDarkStr);
    }
};

const setTranslucentBarColor = (
    isDarkMode = false,
    translucentLightStr = "",
    translucentDarkStr = "",
) => {
    if(Platform.OS === 'android'){
        ImmersiveBars.setTranslucentBarColor(isDarkMode, translucentLightStr, translucentDarkStr);
    }
};

export { changeBarColors, setTranslucentBarColor };
