import React  from 'react';
import './index.less'
import axios from 'axios';
import { Form, Input, Button } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class Login extends React.Component{
    constructor(props) {
        super(props)
        this.onFinish = this.onFinish.bind(this);
        this.onFinishFailed = this.onFinishFailed.bind(this);
    }
    
    componentDidMount() {
        const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get('http://localhost:3000/api/blog/list')
        .then(res => {
            console.log(res)
        })
        .catch( err => {
            console.log(err);
        })
    }
    
    onFinish(values) {
        console.log('Success:', values);
    };

    onFinishFailed(errorInfo) {
        console.log('Failed:', errorInfo);
    };
    render() {
        return (
            <Form
                className="login_form"
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: '请输入用户名' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input.Password />
                </Form.Item>
                {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item> */}
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        提交
                </Button>
                </Form.Item>
            </Form>
        );
    }
};

export default Login


