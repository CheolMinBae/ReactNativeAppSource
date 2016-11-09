import React, { Component } from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import QRCodeReader from './pages/QRCodeReader';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

export default class App extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="tabbar" tabs={true}>
                        <Scene key="tab1" title="Tab #1" icon={TabIcon} navigationBarStyle={{backgroundColor: 'red'}} titleStyle={{color:'white'}}>
                            <Scene key="tab1_1" component={QRCodeReader} title="Tab #1_1" onRight={() =>alert('Right button')} rightTitle="Right" />
                        </Scene>
                        <Scene key="tab2" icon={TabIcon} initial={true} title="Tab #2" navigationBarStyle={{backgroundColor: 'red'}} titleStyle={{color:'white'}}>
                            <Scene key="tab2_1" component={Tab2} title="Tab #2_1" onRight={() =>alert('Right button')} rightTitle="Right" />
                        </Scene>
                        <Scene key="tab3" icon={TabIcon} title="Tab #3" navigationBarStyle={{backgroundColor: 'red'}} titleStyle={{color:'white'}}>
                            <Scene key="tab3_1" component={Tab3} title="Tab #3_1" onRight={() =>alert('Right button')} rightTitle="Right" />
                        </Scene>
                    </Scene>
                </Scene>
            </Router>
        );
    }
}