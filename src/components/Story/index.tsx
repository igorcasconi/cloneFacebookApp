import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import { Card, CardFooter, CardStory, CardUser, Container, Scroll, Text } from './style';

import Avatar from '../Avatar';

import story1 from '../../assets/story1.jpg';
import story2 from '../../assets/story2.jpg';
import story3 from '../../assets/story3.jpg';
import story4 from '../../assets/story4.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';
import user4 from '../../assets/user4.jpg';
import { BottomDivider } from '../Toolbar/style';

const Story = () => {

    return (
    <>
        <Container>
            <Scroll horizontal showsHorizontalScrollIndicator={false} >
                <Card>
                    <CardStory source={story1} />
                    <CardUser>
                        <AntDesign name='plus' size={24} color="#1777f2" />
                    </CardUser>
                    <CardFooter>
                        <Text>Add to Story</Text>
                    </CardFooter>
                </Card>

                <Card>
                    <CardStory source={story2} />
                    <CardUser>
                        <Avatar source={user2} story={true} />
                    </CardUser>
                    <CardFooter>
                        <Text>Wanessa J</Text>
                    </CardFooter>
                </Card>

                <Card>
                    <CardStory source={story3} />
                    <CardUser>
                        <Avatar source={user3} story={true} />
                    </CardUser>
                    <CardFooter>
                        <Text>Regi P</Text>
                    </CardFooter>
                </Card>

                <Card>
                    <CardStory source={story4} />
                    <CardUser>
                        <Avatar source={user4} story={true} />
                    </CardUser>
                    <CardFooter>
                        <Text>Anna M</Text>
                    </CardFooter>
                </Card>
            </Scroll>
        </Container>

        <BottomDivider />
    </>
    )
}

export default Story;