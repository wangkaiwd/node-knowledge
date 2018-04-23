import React, { Component } from 'react';
import MyTabs from 'component/tabs';
import { Switch, Route, Redirect } from 'react-router-dom';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabConfig: [
                { title: '主页', key: '1', link: Con1 },
                { title: '商品', key: '2', link: Con2 }
            ]
        }
    }
    render() {
        return (
            <div>
                <MyTabs
                    tabConfig={this.state.tabConfig}
                    history={this.props.history}
                    path={this.props.match.path}
                />
            </div>
        )
    }
}


const Con1 = () => <h2>内容1</h2>
const Con2 = () => <h2>内容2</h2>