import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import styled from "styled-components/native";

import Route from './src/routes/Route';

const Container = styled.SafeAreaView`
  flex: 1;
`;

export default function App() {
  return (
    <>
     <StatusBar style="auto" />
      <Container>
        <Route />
      </Container>
    </>
  );
}

