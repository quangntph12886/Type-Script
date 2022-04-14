import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import { add } from '../../../api/product';

const Add = () => {
    const navigate = useNavigate()
  const onFinish = (values: any) => {
    add(values).then(res=>{
        navigate("/")
    })
  };

  return (
    <div className=""> 
        <Form
          name="basic"
          labelAlign="left"
          labelCol={{ span: 2}}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input product name' }]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: 'Please input product Price!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Imgae"
            name="image"
            rules={[{ required: true, message: 'Please input product image!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Desc"
            name="desc"
            rules={[{ required: true, message: 'Please input product desc!' }]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </div>
      );
    };

export default Add