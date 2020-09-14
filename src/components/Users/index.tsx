import React from 'react';
import { Container, Scroll, Room, Text, UserList} from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomDivider } from '../Toolbar/style';

import Avatar from '../Avatar';

import User1 from '../../assets/user1.jpg';
import User2 from '../../assets/user2.jpg';
import User3 from '../../assets/user3.jpg';
import User4 from '../../assets/user4.jpg';
import User5 from '../../assets/user5.jpg';


const User = () => {

    return (
        <>
            <Container>
                <Scroll horizontal showsHorizontalScrollIndicator={false} >
                    <Room>
                        <MaterialCommunityIcons name="video-plus" size={26} color="#E141FC" />
                        <Text>Create Room</Text>
                        
                    </Room>

                    <UserList>
                        <Avatar source={User1} online={true} />
                    </UserList>
                    
                    <UserList>    
                        <Avatar source={User2} online={true} />
                    </UserList>    
                    
                    <UserList>    
                        <Avatar source={User3} online={true} />
                    </UserList> 
                       
                    <UserList>    
                        <Avatar source={User4} online={true} />
                    </UserList> 

                    <UserList>    
                        <Avatar source={User5} online={true} />
                    </UserList>    
                </Scroll>
            </Container>
            <BottomDivider />
        </>
    )
}

export default User;