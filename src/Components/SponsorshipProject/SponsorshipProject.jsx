//贊助專案區塊
import React from 'react'
import '../../Components/SponsorshipProject/SponsorshipProject.css'
import Container from 'react-bootstrap/Container'
import heart_icon from '../../Components/Assets/icon_heart.svg'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

function SponsorshipProject() {
  return (
    <Container>
        <div className='Sponsorshi'>
            <div className="line-primary align-items-end"></div>
            <div className="sponContent mx-3 flex-column align-items-center justify-content-center">
                <img src={heart_icon} alt="" className='pl-2'/>
                <h3 className="fw-bold fs-24">贊助專案</h3>
            </div>
            <div className="line2-primary align-items-end"></div>
        </div>

        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>贊助方案</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>請選擇一個方案</option>
                    <option value="1">方案一</option>
                    <option value="2">方案二</option>
                    <option value="3">方案三</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>收件人姓名</Form.Label>
                <Form.Control type="text" placeholder="請輸入姓名" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>聯絡電話</Form.Label>
                <Form.Control type="phone" placeholder="請輸入電話" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>連絡信箱</Form.Label>
                <Form.Control type="email" placeholder="請輸入 email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPay">
                <Form.Label>付款方式</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>信用卡付款</option>
                    <option value="1">Line Pay</option>
                    <option value="2">台灣 Pay</option>
                    <option value="3">水果 Pay</option>
                </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit" className='btn radius-26 fw-bold fs-20'>
            贊助專案
            </Button>
        </Form>
    </Container>
  )
}

export default SponsorshipProject