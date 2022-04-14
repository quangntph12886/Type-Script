import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from "../api/product"
import { Row, Col,Button } from 'antd';
interface Props {

}

 const Detail = (props: Props) => {
    const [product, setProduct] = useState({
        image:null,
        name:null,
        price:null,
        desc:null   
    })
    const { id } = useParams()
    useEffect(() => {
        console.log(id)
        getProductById(id).then(res => {
            const { data } = res
            setProduct(data)

        })
    }, [])

    return (
        <Row gutter={40}>
            <Col span={8} >
                <img src={product.image} alt="" width="100%"/>
            </Col>
            <Col span={16}>
                <h1>{product.name}</h1>
                
                <h3>${product.price}</h3>
                
                <p>{product.desc}</p>

                <Button
                 type="primary"
                 size="large"
                 >Add to cart</Button>
            </Col>
        </Row>
    )
}

export default Detail