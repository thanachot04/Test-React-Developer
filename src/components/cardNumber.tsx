import '../assets/css/card-number.css';
import { useTranslation } from 'react-i18next';
import { Menu, Carousel, Card, Row, Col, Rate } from 'antd'

interface CardNumberProps {
    type: string;
    title: string;
    description: string;
    selectCard: (cardType: string) => void;

}
const CardNumber: React.FC<CardNumberProps> = ({ type,title, description,selectCard }: CardNumberProps) => {
    const { t } = useTranslation();
    return (
        <Card onClick={()=>{selectCard(type)}}>
            <div className="custom-card card-number">
                <div className="card-body">
                    <p className="card-text">{t(title)}</p>
                    <p className="card-text">{t(description)}</p>
                </div>
            </div>
        </Card>
    );
};
export default CardNumber;