import * as React from 'react';
import { observer } from 'mobx-react';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';

interface IProps{
    icon: string,
    onPress: () => void,
    haveNotify?: boolean
}

@observer
export default class AlertIcon extends React.Component<IProps, any>{
    render(){
        return(
            <Button transparent onPress={this.props.onPress}>
                <Icon name={this.props.icon} size={30}/>
                {
                    this.props.haveNotify ? 
                    <Icon 
                        name="circle" 
                        size={12} 
                        color="#FF0000"
                        style={styles.alertIcon}
                    /> 
                    : null}
            </Button>
        )
    }
}

const styles = StyleSheet.create({
    alertIcon: {
        position: "absolute",
        bottom: 10,
        right: 10,
    },
})