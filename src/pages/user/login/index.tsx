import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import './style.scss';

const NormalLoginForm = () => {
    const history = useHistory()
    const onFinish = (values: any) => {
      console.log('Received values of form: ', values);
      
      history.push('/dashboard/about')
    };
  
    return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" block>
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  };
  
//   ReactDOM.render(<NormalLoginForm />, mountNode);


const Login: React.FC = () => {

    return (
      <div className="page-login">
        <NormalLoginForm />
      </div>
    ) 
}


export default Login
