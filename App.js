import React, { useState, useCallback, useEffect } from "react";
import MainNavigator from "./navigator/MainNavigator";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import ReduxThunk from "redux-thunk";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import {
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from "@expo-google-fonts/lato";

import articlesReducer from "./store/reducers/articles";
import authReducer from "./store/reducers/auth";
import dateReducer from "./store/reducers/date";
import tempReducer from "./store/reducers/temp";
enableScreens();
const rootReducer = combineReducers({
  articles: articlesReducer,
  auth: authReducer,
  date: dateReducer,
  temp: tempReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
  });

  useEffect(() => {
    async function prepare() {
      try {
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render

        if (fontsLoaded) {
          setAppIsReady(true);
        }
      }
    }

    prepare();
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  /*
  return(
    <SafeAreaView>
      <Calendar />
    </SafeAreaView>
  );
  */
  return (
    <Provider store={store}>
      <StatusBar style="dark" />
      <MainNavigator onLayout={onLayoutRootView} />
    </Provider>
  );
}
