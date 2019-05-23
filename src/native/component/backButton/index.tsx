import * as React from 'react';
import { Button, Icon } from "native-base";

interface IProps{
    onPress: () => void,
}

const BackButton = function(props: IProps){
    return (
        <Button transparent onPress={props.onPress}>
            <Icon type="FontAwesome" name="chevron-left"/>
        </Button>
    );   
}

export default BackButton;