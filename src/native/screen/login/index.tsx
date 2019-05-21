import * as React from 'react';
import {
    Container,
    Content,
    View,
    Button,
    Text
} from 'native-base';
import InputText from '../../component/textInput';
import { commonStyle } from '../../common/style';
import { inject, observer } from 'mobx-react';
import SessionStore from '../../../store/sessionStore';
import { observable } from 'mobx';
import { styles } from './style';

interface IProps{
    sessionStore?: SessionStore
}

interface IInputData{
    name: string,
    value: string,
    error: string
}

@observer
@inject('sessionStore')
export default class Login extends React.Component<IProps, any>{
    @observable inputMap = new Map();

    componentWillMount(){
        const username : IInputData = {name: "username", value: this.props.sessionStore!.username, error: ''};
        const password : IInputData = {name: "password", value: this.props.sessionStore!.password, error: ''};

        this.inputMap.set('username', username);
        this.inputMap.set('password', password);
    }
    
    onChangeText = (name: string, value: string) => {
        const input : IInputData = this.inputMap.get(name);
        if(!input)  return;

        input.value = value;
    }

    login = () => {
        if(this.props.sessionStore){
            this.props.sessionStore.login();
        }
    }

    validateInput(){
        
    }

    render(){
        const username = this.inputMap.get('username');
        const password = this.inputMap.get('password');
        return(
            <Container>
                <View style={commonStyle.container}>
                    <Content>
                        <View style={styles.form}>
                            <InputText {...username} onChange={this.onChangeText} icon="ios-person"/>
                            <InputText {...password} onChange={this.onChangeText} secure={true} icon="ios-key"/>
                            <Button 
                                style={commonStyle.btn}
                                onPress={this.login}
                            >
                                <Text>Login</Text>
                            </Button>
                        </View>
                    </Content>
                </View>
            </Container>
        )
    }
}