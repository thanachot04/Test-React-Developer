import { Card, Col, Layout, Row, Typography, Button, Checkbox, Form, Input, Select, DatePicker, Radio } from "antd";
import '../assets/css/number3.css';
import { Content } from "antd/es/layout/layout";
import { useEffect, useRef, useState } from "react";
import CardShape from "../components/cardShape";
import { useTranslation } from 'react-i18next';
import type { FormProps, InputRef } from 'antd';
import { RootState } from "../store";
import { useSelector, useDispatch } from 'react-redux';
import { addCandidate, updateCandidate, deleteCandidate } from '../store/slices/candidate';
import TableCandidate from "../components/tableCandidate";
import dayjs from 'dayjs';

const Number3: React.FC = () => {
    interface FieldType {
        candidateId: number;
        title: string;
        firstname: string;
        lastname: string;
        birthdate: dayjs.Dayjs;
        nationality: string;
        citizenIdPart1: string;
        citizenIdPart2: string;
        citizenIdPart3: string;
        citizenIdPart4: string;
        citizenIdPart5: string;
        gender: string;
        phonePrefix: string;
        phoneNumber: string;
        passportNo: string;
        expectedsalary: string;


    };
    const { Title, Text, Paragraph, Link } = Typography;
    const { t } = useTranslation();
    const [form] = Form.useForm();
    const part2Ref = useRef<InputRef>(null);
    const part3Ref = useRef<InputRef>(null);
    const part4Ref = useRef<InputRef>(null);
    const part5Ref = useRef<InputRef>(null);
    const [idEdit, setIdEdit] = useState<number>(0);


    const candidateList = useSelector((state: RootState) => state.candidate.candidateList);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('candidateList', candidateList)
    }, [candidateList])

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('values.candidateId ', values.candidateId)
        console.log('Success:', values);
        let randomId = Math.floor(Math.random() * 10000)
        console.log('randomId', randomId)
        const candidateData: FieldType = {
            candidateId: idEdit === 0 ? randomId : idEdit,
            title: values.title,
            firstname: values.firstname,
            lastname: values.lastname,
            birthdate: values.birthdate,
            nationality: values.nationality,
            citizenIdPart1: values.citizenIdPart1,
            citizenIdPart2: values.citizenIdPart2,
            citizenIdPart3: values.citizenIdPart3,
            citizenIdPart4: values.citizenIdPart4,
            citizenIdPart5: values.citizenIdPart5,
            gender: values.gender,
            phonePrefix: values.phonePrefix,
            phoneNumber: values.phoneNumber,
            passportNo: values.passportNo,
            expectedsalary: values.expectedsalary,
        };
 
        form.resetFields();
        if (idEdit === 0) {
            alert('Save Success');
            dispatch(addCandidate(candidateData));
            setIdEdit(0)
        } else {
            alert('Edit Success');
            dispatch(updateCandidate(candidateData));
            setIdEdit(0)
        }
    };


    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
        alert('Save Fail');
    };

    const handleInput = (
        e: React.ChangeEvent<HTMLInputElement>,
        nextRef: React.RefObject<InputRef>,
        maxLength: number
    ) => {
        if (e.target.value.length === maxLength && nextRef.current) {
            nextRef.current.focus();
        }
    };

    const handleReset = () => {
        form.resetFields();
        setIdEdit(0)
    };

    const handleUpdate = (candidateId: number) => {
        console.log('candidateId', candidateId)
        console.log('handleUpdate')
        const foundEditCandidate = candidateList.find(candidate => candidate.candidateId === candidateId);
        setIdEdit(candidateId)
        if (foundEditCandidate) {
            // const birthdate = dayjs(foundEditCandidate.birthdate);
            const defaultValueUpdate: FieldType = {
                candidateId: candidateId,
                title: foundEditCandidate.title,
                firstname: foundEditCandidate.firstname,
                lastname: foundEditCandidate.lastname,
                birthdate: dayjs(foundEditCandidate.birthdate),
                nationality: foundEditCandidate.nationality,
                citizenIdPart1: foundEditCandidate.citizenIdPart1,
                citizenIdPart2: foundEditCandidate.citizenIdPart2,
                citizenIdPart3: foundEditCandidate.citizenIdPart3,
                citizenIdPart4: foundEditCandidate.citizenIdPart4,
                citizenIdPart5: foundEditCandidate.citizenIdPart5,
                gender: foundEditCandidate.gender,
                phonePrefix: foundEditCandidate.phonePrefix,
                phoneNumber: foundEditCandidate.phoneNumber,
                passportNo: foundEditCandidate.passportNo,
                expectedsalary: foundEditCandidate.expectedsalary,
            };
            // setDefaultValue(foundEditCandidate)
            form.setFieldsValue(defaultValueUpdate)
        }
    }

    // useEffect(() => {
    //     console.log('defaultValue', defaultValue)
    // },[defaultValue])
    return (
        <Layout className="layout-style-number3" >
            {/* <Typography  className="header-name">sds</Typography> */}
            <Title level={2} className="header-name">{t('Form & Table')}</Title>

            <Row justify={"center"}>
                <Col span={15}>
                    <Form
                        name="formTable"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        // style={{ maxWidth: 600 }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        className="form-number3"
                        form={form}
                    >
                        <Row gutter={8}>
                            <Col span={5}>
                                <Form.Item<FieldType>
                                    label={t("Title")}
                                    name="title"
                                    rules={[{ required: true, message: 'Please input your title!' }]}
                                >
                                    <Select placeholder={t("Title")}>
                                        <Select.Option value="Mr.">{t('Mr.')}</Select.Option>
                                        <Select.Option value="Mrs.">{t('Mrs.')}</Select.Option>
                                        <Select.Option value="Ms.">{t('Ms.')}</Select.Option>
                                    </Select>

                                </Form.Item>
                            </Col>
                            <Col span={9}>
                                <Form.Item<FieldType>
                                    label={t("Firstname")}
                                    name="firstname"
                                    rules={[{ required: true, message: 'Please input your firstname!' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={10}>
                                <Form.Item<FieldType>
                                    label={t("Lastname")}
                                    name="lastname"
                                    rules={[{ required: true, message: 'Please input your lastname!' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item<FieldType>
                                    label={t("Birthday")}
                                    name="birthdate"
                                    rules={[{ required: true, message: 'Please input your birthdate!' }]}>
                                    <DatePicker format="MM-DD-YYYY" placeholder={t("mm//dd//yy")} />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item<FieldType>
                                    label={t("Nationality")}
                                    name="nationality"
                                    rules={[{ required: true, message: 'Please input your title!' }]}
                                >
                                    <Select placeholder={t("-- please select --")}>
                                        <Select.Option value="Thai">{t('Thai')}</Select.Option>
                                        <Select.Option value="French">{t('French')}</Select.Option>
                                        <Select.Option value="American">{t('American')}</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={8}></Col>
                        </Row>
                        <Row gutter={8} style={{ display: 'flex', alignItems: 'center' }}>
                            <Col span={4}>
                                <Form.Item<FieldType>
                                    label={t('CitizenIdPart1')}
                                    name="citizenIdPart1"
                                    rules={[{ required: true, message: 'Please input the first part of your citizen ID!' }]}
                                >
                                    <Input maxLength={1} onChange={(e) => handleInput(e, part2Ref, 1)} />
                                </Form.Item>
                            </Col>
                            -
                            <Col span={4}>
                                <Form.Item<FieldType>
                             
                                    name="citizenIdPart2"
                                    rules={[{ required: true, message: 'Please input the second part of your citizen ID!' }]}
                                >
                                    <Input ref={part2Ref} maxLength={4} onChange={(e) => handleInput(e, part3Ref, 4)} />
                                </Form.Item>
                            </Col>
                            <Col span={4}>
                                <Form.Item<FieldType>
                           
                                    name="citizenIdPart3"
                                    rules={[{ required: true, message: 'Please input the third part of your citizen ID!' }]}
                                >
                                    <Input ref={part3Ref} maxLength={5} onChange={(e) => handleInput(e, part4Ref, 5)} />
                                </Form.Item>
                            </Col>
                            <Col span={4}>
                                <Form.Item<FieldType>
                            
                                    name="citizenIdPart4"
                                    rules={[{ required: true, message: 'Please input the fourth part of your citizen ID!' }]}
                                >
                                    <Input ref={part4Ref} maxLength={2} onChange={(e) => handleInput(e, part5Ref, 2)} />
                                </Form.Item>
                            </Col>
                            <Col span={4}>
                                <Form.Item<FieldType>
                      
                                    name="citizenIdPart5"
                                    rules={[{ required: true, message: 'Please input the fourth part of your citizen ID!' }]}
                                >
                                    <Input ref={part5Ref} maxLength={1} />
                                </Form.Item>
                            </Col>
                            <Col span={4}></Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={24}>
                                <Form.Item<FieldType>
                                    label={t('Gender')}
                                    name="gender"
                                    rules={[{ required: true, message: 'Please input the fourth part of your gender!' }]}
                                >
                                    <Radio.Group>
                                        <Radio value="Male"> {t('Male')} </Radio>
                                        <Radio value="Female"> {t('Female')} </Radio>
                                        <Radio value="Unsex">{t('Unsex')}  </Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Col span={12}></Col>
                        <Row gutter={8}>
                            <Col span={8}>
                                <Form.Item<FieldType>
                                    label={t('Mobile Phone')}
                                    name="phonePrefix"
                                    rules={[{ required: true, message: 'Please input your Mobile Phone!' }]}
                                >
                                    <Select>
                                        <Select.Option value="+66">{t('+66')}</Select.Option>
                                        <Select.Option value="+1.">{t('+1')}</Select.Option>
                                        <Select.Option value="+33">{t('+33')}</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item<FieldType>
                                    // label="-"
                                    name="phoneNumber"
                                    rules={[{ required: true, message: 'Please input your Mobile Phone!' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={8}>
                            <Col span={12}>
                                <Form.Item<FieldType>
                                    label={t('Passport No')}
                                    name="passportNo"
                                    rules={[{ required: false }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>

                        </Row>
                        <Row gutter={8}>
                            <Col span={12}>
                                <Form.Item<FieldType>
                                    label={t('Expected Salary')}
                                    name="expectedsalary"
                                    rules={[{ required: true, message: 'Please input your Expected Salary!' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={4}>
                                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                    <Button type="primary" htmlType="reset" className="btn-form" onClick={()=>handleReset()}>
                                        RESET
                                    </Button>
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                    <Button type="primary" htmlType="submit"  className="btn-form">
                                        SUBMIT
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>

            <Row style={{ marginTop: '48px' }}>
                <Col span={24}>
                    <TableCandidate handleUpdate={handleUpdate} />
                </Col>
            </Row>
        </Layout >

    );
};

export default Number3;