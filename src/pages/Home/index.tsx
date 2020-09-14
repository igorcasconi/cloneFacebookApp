import React from 'react';
import { Container } from './style';
import AppBar from '../../components/AppBar';
import Toolbar from '../../components/Toolbar';
import User from '../../components/Users';
import Story from '../../components/Story';
import Feed from '../../components/Feed';
import { ScrollView } from 'react-native';

const Home = () => {

    return(
        <Container>
            
            <AppBar />
            
            <ScrollView>
                <Toolbar />
                
                <User />

                <Story />

                <Feed />
            </ScrollView>

        </Container>
    )

}

export default Home;