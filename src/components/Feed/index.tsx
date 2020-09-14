import React from 'react';
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import Avatar from '../Avatar';

import { Container, Header, Row, Div, User, 
    Time, Post, Photo, Footer, FooterCount, IconCount, 
    TextCount, Separator, FooterMenu, Button, Icon, Text } from './style';

import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';
import post1 from '../../assets/post1.jpg';
import post2 from '../../assets/post2.jpg';
import { BottomDivider } from '../Toolbar/style';

const Feed = () => {

    return(
    <>
        <Container>
            <Header>
                <Row>
                    <Avatar source={user3}/>
                    <Div>
                        <User>Regi P.</User>
                        <Row>
                            <Time>9m</Time>
                            <Entypo name="dot-single" size={12} color="#747476" />
                            <Entypo name="globe" size={10} color="#747476" />
                        </Row>
                    </Div>
                </Row>

                <Entypo name="dots-three-horizontal" size={12} color="#747476" />
            </Header>

            <Post>
                Crie na prática uma aplicação utilizando RRACT NATIVE
            </Post>

            <Photo source={post1} />

            <Footer>
                <FooterCount>
                    <Row>
                        <IconCount>
                            <AntDesign name="like1" size={12} color="#FFF" />
                        </IconCount>
                        <TextCount>88 likes</TextCount>
                    </Row>
                    <TextCount>2k comments</TextCount>
                </FooterCount>

                <Separator />

                <FooterMenu>
                    <Button>
                        <Icon>
                            <AntDesign name="like2" size={20} color="#424040" />
                        </Icon>
                        <Text>Like</Text>
                    </Button>

                    <Button>
                        <Icon>
                            <MaterialCommunityIcons name="comment-outline" size={20} color="#424040" />
                        </Icon>
                        <Text>Comment</Text>
                    </Button>

                    <Button>
                        <Icon>
                            <MaterialCommunityIcons name="share-outline" size={20} color="#424040" />
                        </Icon>
                        <Text>Share</Text>
                    </Button>
                </FooterMenu>
            </Footer>

            <BottomDivider />

            <Header>
                <Row>
                    <Avatar source={user2}/>
                    <Div>
                        <User>Wannesa J.</User>
                        <Row>
                            <Time>9m</Time>
                            <Entypo name="dot-single" size={12} color="#747476" />
                            <Entypo name="globe" size={10} color="#747476" />
                        </Row>
                    </Div>
                </Row>

                <Entypo name="dots-three-horizontal" size={12} color="#747476" />
            </Header>

            <Post>
                Teste
            </Post>

            <Photo source={post2} />

            <Footer>
                <FooterCount>
                    <Row>
                        <IconCount>
                            <AntDesign name="like1" size={12} color="#FFF" />
                        </IconCount>
                        <TextCount>88 likes</TextCount>
                    </Row>
                    <TextCount>2k comments</TextCount>
                </FooterCount>

                <Separator />

                <FooterMenu>
                    <Button>
                        <Icon>
                            <AntDesign name="like2" size={20} color="#424040" />
                        </Icon>
                        <Text>Like</Text>
                    </Button>

                    <Button>
                        <Icon>
                            <MaterialCommunityIcons name="comment-outline" size={20} color="#424040" />
                        </Icon>
                        <Text>Comment</Text>
                    </Button>

                    <Button>
                        <Icon>
                            <MaterialCommunityIcons name="share-outline" size={20} color="#424040" />
                        </Icon>
                        <Text>Share</Text>
                    </Button>
                </FooterMenu>
            </Footer>

            <BottomDivider />
        </Container>
    </>
    );
}

export default Feed;