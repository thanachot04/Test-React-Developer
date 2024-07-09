import { Card, Col, Layout, Row } from "antd";
import '../assets/css/number1.css';
import { Content } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import CardShape from "../components/cardShape";
import { useTranslation } from 'react-i18next';
// import '../assets/css/number1.css';




const Number1: React.FC = () => {

    // interface Items {
    //     item: string[];
    // }
    const [items, setItems] = useState<string[]>(['square', 'circle', 'oval', 'trapezium', 'rectangle', 'rhombus']);
    const [isUpDown, setIsUpDown] = useState<boolean>(true);
    const { t } = useTranslation();
    const createTriangle = (rotate: string) => {
        return <div className={`triangle-up rotate${rotate}`}></div>;
    }
    const changePosition = (position: string) => {
        let arr = [...items];
        // console.log('arr 1', arr)
        switch (position) {
            case 'left':
                const first = arr.shift() as string
                arr.push(first)
                setItems(arr)
                break;
            case 'right':
                const last = items[items.length - 1]
                arr.pop()
                arr.unshift(last)
                setItems(arr)
                console.log('last', last)
                console.log('items', items)
                break;
            case 'upDown':
                for (let i = 0; i < 3; i++) {
                    let tmp = arr.shift()
                    arr.push(tmp as string)
                    console.log('tmp', tmp)
                    console.log('arr', arr)
                }
                setItems(arr)
                setIsUpDown(!isUpDown)
                break;
            case 'random':
                for (let i = arr.length-1 ; i > 0; i--) {
                    console.log('i', i)
                    const random = Math.floor(Math.random() * i);
                    // console.log('random', random)
                    // console.log('Math.floor(Math.random() * i)', Math.floor(Math.random() * i))
                    [arr[i],arr[random]] = [arr[random],arr[i]]
                    // console.log('random', random)
                    // console.log('i', i)        
                }
                setItems(arr)
                // console.log('arr', arr)  
                break;
            default:
                break;
        }
    }


    useEffect(() => {
        console.log('state change')
    }, [items])

    return (
        <Layout className="layout" style={{ background: 'transparent', marginLeft: '200px', marginRight: '200px' }}>
            <Content style={{ padding: '0 50px' }}>
                <Row justify="center" gutter={16}>
                    <Col span={6}>
                        <Card className="card-hover" onClick={() => { changePosition('left') }}>
                            <Row>
                                <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    {createTriangle('-90')}
                                </Col>
                                <Col className="tip">
                                    {t('Move Shape')}
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card className="card-hover" onClick={() => { changePosition('upDown') }}>
                            <Row>
                                <Col span={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{createTriangle('-180')}</Col>
                                <Col span={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>{createTriangle('180')}</Col>
                                <Col className="tip">
                                    {t('Move Position')}
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card className="card-hover" onClick={() => { changePosition('right') }}>
                            <Row>
                                <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    {createTriangle('90')}
                                </Col>
                                <Col className="tip">
                                    {t('Move Shape')}
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <CardShape shapes={items} isUpDown={isUpDown} changePosition={changePosition}/>
            </Content>
        </Layout>




    );
};

export default Number1;