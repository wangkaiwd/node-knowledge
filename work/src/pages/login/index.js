import React, { Component } from 'react'
import { Card, Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd'
const FormItem = Form.Item;
import "./index.less"

class Login extends Component {
  constructor() {
    super()
    this.state = {
      // 能否获取验证码
      isGetCode: true,
      // 倒计时
      countdown: 10,
    }
  }
  // 提交登录信息
  handleSubmit = () => {
    this.props.history.push(`/index`);
  }
  // 获取验证码
  getCode = () => {
    this.setState({ isGetCode: false });
    this.timeDown();
  }
  timeDown = () => {
    let { countdown } = this.state;
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (countdown <= 0) {
        this.setState({ countdown: 10, isGetCode: true });
        return clearInterval(this.timer);
      }
      countdown--;
      this.setState({ countdown });
    }, 1000)
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
              <Row gutter={16}>
                <Col span={12}>
                  <FormItem>
                    {getFieldDecorator('username', {
                      rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="user"
                            style={{ color: 'rgba(0,0,0,.25)' }}
                          />}
                        placeholder="usename" />
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
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
                        placeholder="password"
                      />
                    )}
                  </FormItem>
                </Col>
              </Row>
              <FormItem>
                {getFieldDecorator('captcha_code ', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={
                      <Icon
                        type="lock"
                        style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="verification code"
                  />
                )}
              </FormItem>
              <FormItem>
                <Row gutter={16}>
                  <Col span={8}>
                    {this.state.isGetCode
                      ?
                      <Button type="primary" onClick={this.getCode}>获取验证码</Button>
                      :
                      <Button type="primary" disabled>
                        <span>{this.state.countdown}</span>
                        后继续获取
                      </Button>
                    }
                  </Col>
                  <Col span={16}>
                    {getFieldDecorator('code')(
                      <Input
                        prefix={
                          <Icon
                            type="lock"
                            style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        disabled
                      />
                    )}
                  </Col>
                </Row>
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
