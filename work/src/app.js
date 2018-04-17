import React,{Component} from 'react';
import { LocaleProvider } from 'antd';
import { Route,Switch,Link } from 'react-router-dom';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import Home from './pages/home';

export default class App extends Component {
    constructor() {
        super()
    }
    render(){
        const { path } = this.props.match;
        console.log(path);
        return (
            <LocaleProvider locale={zh_CN}>
                <div className="page-content">
                    <ul>
                        <li><Link to={`${path}home`}>toHome</Link></li>
                    </ul>
                    App
                    <Switch>
                        <Route path={`${path}home`} component={Home} />
                    </Switch>
                </div>
            </LocaleProvider>
        )
    }
}