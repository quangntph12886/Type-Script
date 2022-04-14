import { Form, Input, Button, Checkbox } from 'antd';
import { Navigate, useParams,useNavigate } from 'react-router-dom';
import { getProductById, update } from '../../../api/product';
import { useEffect, useState } from 'react';
const UpdateProduct = () => {
    const [form] = Form.useForm()
    const navigate = useNavigate()
    const {id} = useParams()
    const [product, setProduct] = useState({
        price: null
    })
    const onFinish = (values: any) => {
        update(id,values).then(res=>{
          navigate("/")
        })
        
    };

    useEffect(()=>{
        console.log(id)
        getProductById(id).then(res=>{
            const {data} = res
            console.log(data)
            form.setFieldsValue(data)
            
        })
    },[])
  return (
<div className=""> 
    <Form
      form = {form}
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

export default UpdateProduct