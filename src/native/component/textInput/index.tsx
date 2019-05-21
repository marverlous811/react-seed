import * as React from 'react';
import {
    Text,
    Item,
    Input,
    Icon,
    Content
} from 'native-base';
import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

interface IProps{
    name: string,
    onChange?: (name: string, value: string) => void;
    icon?: string,
    error?: string,
    value?: string,
    secure?: boolean
}

@observer
export default class InputText extends React.Component<IProps, any>{
    onTextChange = (text: string) => {
        if(this.props.onChange)
            this.props.onChange(this.props.name, text);
    }

    render(){
        const hasError : boolean = !this.props.error || this.props.error === '' ? false : true;
        return(
            <View  style={style.inputContainer}>
                <Item error={hasError} style={style.input}>
                    {this.props.icon ? <Icon active name={this.props.icon}/>  : null}
                    <Input 
                        onChangeText={this.onTextChange}
                        secureTextEntry={this.props.secure}
                        defaultValue={this.props.value}
                        placeholder={this.props.name}
                    />
                </Item>
                <View>
                {
                    hasError ?
                    <Item style={style.errorContainer}>
                        <Icon
                            name="error" 
                            type="MaterialIcons"
                            style={[style.errorColor, style.errorIcon]}
                        ></Icon>
                        <Text 
                            style={[style.errorColor, style.errorText]}
                        >{this.props.error}</Text>
                    </Item> 
                    : null
                }
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    inputContainer:{
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 10,
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10
    },
    errorContainer: {
        borderColor: "transparent",
    },
    errorColor: {
        color: "red",
    },
    errorIcon: {
        marginTop: 5,
    },
    errorText: {
        fontSize: 15,
    }
})