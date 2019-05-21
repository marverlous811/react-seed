# React + Typescript + Mobx Seed

## 1.Description

- A template project for both platform web and moblie

- Base from reactjs and react-native

- Data layer: Mobx

- Complier typescript and babel

- Test framework: jest

## 2.Useage

- require: 

    - nodejs >= 8.10.0

    - react-native cli

- install 

    `npm insall`

- run for web 
    
    `npm run start-web`

- run for android 

    `react-native run-android`

- run for IOS 

    `react-native run-IOS`

## 3. Folder constructor

- native: view for moblie using react-native

- web : view for web using reactjs + html

- store: data layer

- services: api call and some service control data

- util: other method


## 4. View Structure

- in both of view folder will be organized by this structure (or you can organize it with other structure)

    - component: nested view of project, its can't be work with store or have a data logic. It's function is only render data from props of parent

    - container: it maybe use component, can have data logic but can't be work with store. 

    - screen: can use both component and container, have data logic and working with store

    - navigator/ route: route for web and navigator for moblie

    - style: for common style apply maybe apply for all view