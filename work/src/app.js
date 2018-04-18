import React,{Component} from 'react';
import { LocaleProvider, Layout } from 'antd';
import { Route,Switch,Link } from 'react-router-dom';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import Home from './pages/home';
import LeftNav from './component/leftNav';
const { Header, Footer, Sider, Content } = Layout;

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            data :[{
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York Park',
            }, {
                key: '2',
                name: 'Jim Green',
                age: 40,
                address: 'London Park',
            }]
        }

    }
    render(){
        return (
            <LocaleProvider locale={zh_CN}>
                <div className="page">
                    {/* 
                    <div className="child-tool">
                        <Switch>
                            <Route path="/tab" component={Home}></Route>
                        </Switch>
                    </div> */}
                    <Layout>
                        <Header>Header</Header>
                        <Layout>
                            <Sider><LeftNav /></Sider>
                            <Content>Content</Content>
                        </Layout>
                    </Layout>
                </div>
            </LocaleProvider>
        )
    }
}