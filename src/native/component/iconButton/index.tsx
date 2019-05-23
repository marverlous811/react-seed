import * as React from 'react';
import { Button, Icon } from 'native-base';

interface IProps{
    icon: string
    onPress: () => void;
}

const ButtonIcon = function(props: IProps){
    return(
        <Button transparent onPress={props.onPress}>
            <Icon name={props.icon}></Icon>
        </Button>
    )
}

export default ButtonIcon;