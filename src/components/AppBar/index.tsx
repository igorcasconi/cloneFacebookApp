import React from 'react';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, Text, Row, Button } from './style';

const AppBar = () => {

    return(
        <Container>
            <Text>clonebook</Text>
            <Row>
                <Button>
                    <Feather name="search" size={29} color="black" />
                </Button>

                <Button>
                    <MaterialCommunityIcons name="facebook-messenger" size={29} />
                </Button>
            </Row>
        </Container>
    );
}

export default AppBar;