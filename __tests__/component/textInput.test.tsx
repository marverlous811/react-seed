import 'react-native';
import * as React from 'react';
import * as Renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import InputText from '../../src/native/component/textInput';

// it('test inputText component', () => {
//     const component = Renderer.create(
//         <InputText name="email" onChange={(name) => {}}/>
//     ).toJSON();

//     expect(component).toMatchSnapshot("inputText.snap");
// })

it('test inputText With error', () => {
    const component = shallow(
        <InputText name="email" onChange={(name) => {}} error="is not have any value"/>
    );

    expect(shallowToJson(component)).toMatchSnapshot();
})