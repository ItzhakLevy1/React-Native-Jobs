import { Stack } from "expo-router";

import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

const Layout = () => {
  useEffect(() => {
    const prepare = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    };

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
