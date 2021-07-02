import React from 'react';

//Screens
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Welcome from './screens/Welcome';
import Video from './screens/Video';

// React navigation stack
import RootStack from './navigators/RootStack';

export default function App() {
  return <RootStack/>;
};