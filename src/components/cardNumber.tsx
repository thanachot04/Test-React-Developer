import '../assets/css/card-number.css';
import { useTranslation } from 'react-i18next';
import { Menu, Carousel, Card, Row, Col, Rate,Typography } from 'antd'


interface CardNumberProps {
    type: string;
    title: string;
    description: string;
    selectCard: (cardType: string) => void;
}

const { Title, Text, Paragraph, Link } = Typography;
const CardNumber: React.FC<CardNumberProps> = ({ type,title, description,selectCard }: CardNumberProps) => {
    console.log('title', title)
    console.log('description', description)
    const { t } = useTranslation();
    return (
        <Card onClick={()=>{selectCard(type)}}>
            <div className="custom-card card-number">
                <div className="card-body">
                    <Paragraph className="card-text">{t(title)}</Paragraph>
                    <Paragraph className="card-text">{t(description)}</Paragraph>
                </div>
            </div>
        </Card>
    );
};
export default CardNumber;