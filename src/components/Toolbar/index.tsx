import React from 'react';
import { Container, Row, Input, Divider, Menu, MenuText, Separator, BottomDivider } from './style';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import Avatar from '../Avatar';

import User1 from '../../assets/user1.jpg';

const Toolbar = () => {

    return (
        <>
            <Container>
                <Row>
                    <Avatar source={User1} />
                    <Input  placeholder="What's on your mind?" />
                </Row>

                <Divider />

                <Row>
                    
                    <Menu>
                        <Ionicons name="ios-videocam" size={22} color="#F44337"/>
                        <MenuText>Live</MenuText>
                    </Menu>
                    

                    <Separator />

                    <Menu>
                        <MaterialIcons name="photo-size-select-actual" size={22} color="#4CAF50"/>
                        <MenuText>Photo</MenuText>
                    </Menu>

                    <Separator />
                    
                    <Menu>
                        <MaterialCommunityIcons name="video-plus" size={22} color="#E141FC"/>
                        <MenuText>Room</MenuText>
                    </Menu>
                </Row>
            </Container>

            <BottomDivider />
        </>
    );
}

export default Toolbar;