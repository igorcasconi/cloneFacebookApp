import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 58px;
    flex-direction: row;
    align-items: center;
`;

export const Scroll = styled.ScrollView`
    padding-left: 11px;
`;

export const Room = styled.TouchableOpacity`
    width: 115px;
    height: 40px;
    flex-direction: row;
    align-items: center;
    border-radius: 20px;
    border-width: 1px;
    border-color: #82b1ff;
    padding: 0 15px;
    margin-right: 12px;
`;

export const Text = styled.Text`
    color: #1777f2;
    font-size: 14px;
    padding-left: 6px;
`;

export const UserList = styled.View`
    margin-right: 13px;
`;