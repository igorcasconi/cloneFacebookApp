import React from 'react';
import {Container, User, UserActive} from './style';

interface UserProps {
    source: string;
    online?: boolean;
    story?: boolean;
}

const Avatar: React.FC<UserProps> = ({ source, online, story }) => {
    
    return (
        <Container>
            <User source={source} story={story} />
            {online && <UserActive /> }
        </Container>
    );
}

export default Avatar;