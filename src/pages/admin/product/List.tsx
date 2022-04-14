import React, {useState,useEffect} from 'react'
import { list,remove } from '../../../api/product'
import { Table, Tag, Space } from 'antd';
import { useNavigate,Link } from 'react-router-dom';
interface Props {
    
}



const List = (props: Props) => {
    const [products, setProducts] = useState<{_id: number, name: string,price:number,image:string,desc:string}[]>([])
    const navigate = useNavigate();

    const columns = [
      {
          title: 'name',
          dataIndex: 'name',
          key: 'name',
      },
      {
        title: 'price',
        dataIndex: 'price',
        key: 'price',
    },
    {
      title: 'image',
      key: 'image',
      render:(text, record)=>(
        <img src={record.image} alt="" width={100}/>
      )
  },
  {
    title: 'desc',
    dataIndex: 'desc',
    key: 'desc',
},
      {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <Link to={`/admin/product/${record._id}`}>Update</Link>
              <button onClick={()=>handleRemove(record._id)}>delete</button>
            </Space>
          ),
        },
  ]

    const handleRemove=(id)=>{
      remove(id)
      navigate("/")
    }
  useEffect(() => {
    const getProducts = async () => {
        const { data } = await list();
        console.log(data)
        setProducts(data);
    }
    getProducts();
  },[])
    return (
           <Table
                columns={columns} 
                dataSource={products} 
                rowKey={products=>products._id}
            />


    )
}

export default List
