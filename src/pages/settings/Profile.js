import { Form, Input, Button } from 'antd';
import {useAuth} from '@/utils/hooks';

const Profile = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const {profile} = useAuth();

    return (
        <Form
            name="profile"
            onFinish={onFinish}
            layout='vertical'
            initialValues={profile}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
        >
            <Form.Item label="Name" name="name">
                <Input disabled />
            </Form.Item>
            <Form.Item label="Email" name="email">
                <Input disabled />
            </Form.Item>
            <Form.Item label="Company" name="company_name">
                <Input disabled />
            </Form.Item>
            <Form.Item label="Phone" name="phone">
                <Input disabled />
            </Form.Item>
            {/* <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
                <Button type="primary" htmlType="submit">
                    Change Password
                </Button>
            </Form.Item> */}
        </Form>
    );
};

export default Profile;
