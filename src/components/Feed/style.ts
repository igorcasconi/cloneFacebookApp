import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;  
    background: #FFF;
`;

export const Header = styled.View`
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 6px;
    padding: 0 11px;
    
`;

export const Row = styled.View`
    align-items: center;
    flex-direction: row;
`;

export const Div = styled.View`
    padding-left: 10px;
`;

export const User = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #222121;
`;

export const Time = styled.Text`
    font-size: 9px;
    color: #747476;
`;

export const Post = styled.Text`
    font-size: 12px;
    color: #222121;
    line-height: 16px;
    padding: 0 11px;
`;

export const Photo = styled.Image`
    margin-top: 9px;
    width: 100%;
    height: 300px;
`;

export const Footer = styled.View`
    padding: 0 11px;
    background: #FFF;
`;

export const FooterCount = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 9px 0;
`;

export const IconCount = styled.View`
    background: #1878f3;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    margin-right: 6px;
`;

export const TextCount = styled.Text`
    font-size: 11px;
    color: #424040;
`;

export const Separator = styled.View`
    width: 100%;
    height: 1px;
    background: #cdcdcd;
`;

export const FooterMenu = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 11px 0;
`;

export const Button = styled.TouchableOpacity`
    flex-direction: row;
`;

export const Icon = styled.View`
    margin-right: 6px;
`;

export const Text =  styled.Text`
    font-size: 12px;
    color: #424040;
`;
