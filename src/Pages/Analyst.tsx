import React from 'react';
import 'antd/dist/antd.css';
import './Analyst.css'
import { Descriptions, Row, Col, Card } from 'antd';
import {
    AppstoreOutlined,
} from '@ant-design/icons';

interface cardInfo {
    labelColor?: string,
    label?: string,
    title: any,
    content: string,
}

const MyCardItem = (cardInfo: cardInfo) => {
    return (
        <Card
            bodyStyle={{ padding: '12px' }}
            hoverable>
            <p className='card_item_label' style={{ color: cardInfo.labelColor }}>{cardInfo.label}</p>
            <p className='card_item_title' style={{ color: cardInfo.labelColor }}>{cardInfo.title}</p>
            <p className='card_item_content'>{cardInfo.content}</p>
        </Card>
    )
}

const Analyst = () => {
    const totalTestCase = 50;
    const totalAutomationTest = 100;

    const TotalTask = {
        title: totalTestCase,
        content: 'Total Test Case',
    }
    const OnProgressTask = {
        title: totalAutomationTest,
        content: 'Automation Test Case',
    }

    const cardsList = [TotalTask, OnProgressTask]
    const TaskDone = {
        title: totalTestCase - totalAutomationTest,
        content: 'Percent Auto Test Case',
        label: `${(totalAutomationTest / totalTestCase)} %`,
        labelColor: '#d466d6',
    }
    cardsList.push(TaskDone)
    const length = cardsList.length
    const gutter = (24 % length) ? 0 : 12
    return (
        <>
            <Descriptions bordered={true}>
                <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                <Descriptions.Item label="Remark">Empty</Descriptions.Item>
                <Descriptions.Item label="Address">
                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China </Descriptions.Item>
            </Descriptions>
            <h3 className='area_subject'><AppstoreOutlined /> Dashboard</h3>
            <div className='dash_board'>
                <Row
                    gutter={gutter}
                    justify='space-around'>
                    {
                        cardsList.map((item) => {
                            console.log(item)
                            return (
                                <Col key={item.content} span={Math.floor(24 / length)}>
                                    <MyCardItem {...item} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </>
    );
}

export default Analyst;
