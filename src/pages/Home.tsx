import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { list } from '../api/product';
import { Link } from 'react-router-dom';

const { Meta } = Card;
interface Props {

}

export const Home = (props: Props) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        list()
            .then(res => {
                const { data } = res
                setProduct(data)

            })
    }, [])

    return (
        <div>
            <Row gutter={40}>

                {product.map(item => (
                    <Col span={6} key={item._id}>
                        <Card
                            hoverable
                            style={{ width: '100%' }}
                            cover={<img alt="example" src={item.image} />}
                        >
                            <Meta title={(
                                <Link to={`/home/${item._id}`}>{item.name}</Link>
                            )} description={`$${item.price}`} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

