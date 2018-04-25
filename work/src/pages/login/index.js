import React, { Component } from 'react'
import { Card, Form, Icon, Input, Button, Checkbox } from 'antd'
const FormItem = Form.Item;
import "./index.less"

class Login extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  // 提交登录信息
  handleSubmit = () => {
    this.props.history.push(`/index`);
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login f-c">
        <div className="login-card">
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            bordered={true}
            style={{ width: 400 }}
            hoverable
          >
            <Form onSubmit={this.handleSubmit}>
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    prefix={
                      <Icon
                        type="user"
                        style={{ color: 'rgba(0,0,0,.25)' }}
                      />}
                    placeholder="Username" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={
                      <Icon
                        type="lock"
                        style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </FormItem>
            </Form>
          </Card>
        </div>
      </div>
    )
  }
}
export default Form.create()(Login);