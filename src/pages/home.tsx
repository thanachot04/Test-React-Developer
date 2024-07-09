import '../assets/css/home.css';
import '../assets/css/card-number.css';
import CardNumber from '../components/cardNumber';
import { useEffect, useState } from 'react';
import { title } from 'process';
import { useTranslation } from 'react-i18next';
import Number1 from './number1';
import Number3 from './number2';
import { Button, Select } from "antd";
import i18n from '../components/i18n';



interface CardNumberProps {
    type: string;
    title: string;
    description: string;
    selectCard: (cardType: string) => void;
}

const Home: React.FC = () => {

    const { t } = useTranslation();
    const [cardProps, setCardProps] = useState<CardNumberProps[]>([])
    const [renderComponent, setRenderComponent] = useState<string>('home');

    const selectCard = (cardType: string) => {
        setRenderComponent(cardType)
    }
    const handleChangeLang = (value: string) => {
        console.log(`selected ${value}`);
        i18n.changeLanguage(value.toLocaleLowerCase())
    };

    useEffect(() => {
        setCardProps([
            {
                type: 'title1',
                title: 'title.title1',
                description: 'description.description1',
                selectCard: selectCard
            },
            {
                type: 'title2',
                title: 'title.title2',
                description: 'description.description2',
                selectCard: selectCard
            },
            {
                type: 'title3',
                title: 'title.title3',
                description: 'description.description3',
                selectCard: selectCard
            },
        ]);
    }, []);

    useEffect(() => {
        console.log(renderComponent)
        console.log(renderComponent.split('.')[1])

    }, [renderComponent])

    return (
        <div className='home'>
            <Select
                className="selectLang"
                defaultValue="EN"
                style={{ width: 70 }}
                onChange={handleChangeLang}
                options={[
                    { value: 'EN', label: <span>EN</span> },
                    { value: 'TH', label: <span>TH</span> }]} />

            <Button type="primary" className="btn-back" onClick={() => selectCard('home')}>Home</Button>

            {renderComponent === 'home' && <div className="card-style">
                {cardProps.map((card, index) => (
                    <CardNumber key={index} type={card.type} title={card.title} description={card.description} selectCard={selectCard} />
                ))}
            </div>}


            {renderComponent === 'title1' && <Number1 />}
            {renderComponent === 'title3' && <Number3 />}


        </div>
    );
};

export default Home;