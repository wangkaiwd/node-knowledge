import React, { Component } from 'react'
import { Card, Form, Icon, Input, Button, Checkbox, Row, Col, message } from 'antd'
import { fetchLoginGetcode, fetchLogin } from 'src/http/api'
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
      // 验证码
      codeImg: '',
      // 登录loading
      loginLoading: false,
    }
  }
  // 提交登录信息
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) {
        return
      }
      const { remember, ...params } = values;
      this.setState({ loginLoading: true });
      fetchLogin(params, (res) => {
        // message.warning(res.message);
        this.setState({ loginLoading: false })
        message.success('登录成功');
        this.props.history.push(`/index`);
      })
    })
  }
  // 获取验证码
  getCode = () => {
    this.setState({ isGetCode: false });
    fetchLoginGetcode({}, (res) => this.setState({ codeImg: res.code }));
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
            // title="Login System"
            cover={
              <img
                alt="example"
                src={this.state.codeImg || "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}
              />
            }
            bordered={true}
            style={{ width: 400 }}
            hoverable
          >
            <Form onSubmit={this.handleSubmit}>
              <FormItem hasFeedback>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    prefix={
                      <Icon
                        type="user"
                        style={{ color: 'rgba(0,0,0,.25)' }}
                      />}
                    placeholder="usename"
                  />
                )}
              </FormItem>
              <FormItem hasFeedback>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your password!' }],
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
              <FormItem hasFeedback>
                {getFieldDecorator('captcha_code', {
                  // rules: [{ required: true, message: 'Please input verification code!' }],
                })(
                  <Input
                    prefix={
                      <Icon
                        type="key"
                        style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="verification code"
                  />
                )}
              </FormItem>
              <FormItem>
                {this.state.isGetCode
                  ?
                  <Button type="primary" onClick={this.getCode}>获取验证码</Button>
                  :
                  <Button type="primary" disabled>
                    <span>{this.state.countdown}</span>
                    后继续获取
                  </Button>
                }
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  loading={this.state.loginLoading}
                >
                  Login
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
