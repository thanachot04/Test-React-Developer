import { Card, Col, Layout, Row } from "antd";
import '../assets/css/number1.css';


interface PropTypes {
    shapes: string[]
    isUpDown: boolean
    changePosition: (position: string) => void
}
const CardShape: React.FC<PropTypes> = ({ shapes, isUpDown, changePosition }) => {
    console.log('shapes', shapes)

    const renderShape = (shape: string) => {
        console.log('shape', shape)
        switch (shape) {
            case 'square':
                return <div className="square"></div>
            case 'circle':
                return <div className="circle"></div>
            case 'oval':
                return <div className="oval"></div>
            case 'trapezium':
                return <div className="trapezium"></div>
            case 'rectangle':
                return <div className="rectangle"></div>
            case 'rhombus':
                return <div className="rhombus"></div>
            default:
                return <div className="">none</div>
        }
    }

    return (

        <Row gutter={[8, 8]} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '48px' }}>
            {/* <Col span={6}>
                </Col> */}
            {shapes.map((shape: string, index: number) => (
                <Col className="gutter-row" key={index} span={6} offset={isUpDown ? (index === 0 ? 6 : 0) : (index === 3 ? 6 : 0)}>
                    <Card className="card-hover" onClick={() => changePosition('random')}>
                        {renderShape(shape)}
                    </Card>
                </Col>
            ))}
        </Row>




    );
}
export default CardShape;