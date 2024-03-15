//旁邊卡片區塊
import React from 'react'
import '../../Components/SideCards/SideCards.css'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import store_img from '../Assets/store_img.jpg'
import plan_img from '../Assets/plan_img.jpg'
function SideCards() {
  return (
    <>
        <Card className='contactCard'>
            <Card.Body>
                <div className='d-flex align-items-center justify-content-around mb-3'>
                    <div>
                        <img src={store_img} alt=""/>
                    </div>
                    <div>
                        <Card.Title className='fw-bold fs-20 fontNoto'>缺錢事務所</Card.Title>
                        <Card.Subtitle className="fs-16 fontNoto">已發起 1 個專案</Card.Subtitle>
                    </div>
                </div>
                <Card.Text className='d-none d-lg-block'>
                    需要點錢錢做些酷酷的東西，拜託各位乾爹乾媽囉！
                </Card.Text>
                <div className='d-flex align-items-center justify-content-between'>
                    <div>
                    <Card.Link href="#" className='fb-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                        </svg>
                    </Card.Link>
                    <Card.Link href="#" className='youtube-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                        </svg>
                    </Card.Link>
                    </div>
                    <div>
                        <Button variant="outline-dark" type="submit" className='btn radius-26 fw-bold fs-12'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots me-1" viewBox="0 0 16 16">
                                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
                            </svg>聯絡我們
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
        <div className='SideH2 mt-4 mb-3  border-start border-end border-4 border-primary bradius-8'>
            <h2 className='fw-bold text-center fs-20'>選擇一個方案來支持</h2>
        </div>

        <Card border="gray" className='secondCard radius-8'>
            <Card.Body className='m-0 p-0'>
                <Card.Img  src={plan_img} className='rounded-bottom-0'/>
                <Card.Text className=' px-3'>
                    <div className='d-flex align-items-center justify-content-between h-20 mt-4'>
                        <p className='fs-14'>限時優惠</p>
                        <p className='fs-14'>2 days 20:05:20</p>
                    </div>
                    <hr className='w-95 mx-auto'/>
                    <h3 className='fw-bold fs-20 text-start '>買一送一，只有兩百組別錯過</h3>
                    <h3 className='fw-bold fs-20 text-start '>NT$ 1600</h3>
                    <div className='badgetag d-flex align-items-center justify-content-start'>
                        <Badge bg='gray' className='badge-first me-3 fs-12'>已被贊助88次</Badge>
                        <Badge bg='secondary' className='badge-right  fs-12 align-items-center'>
                            <p className='text-white '>限量<span className='text-yellco'>200</span>個</p>
                        </Badge>
                    </div>
                    <p className='text-secondary fontNoto'>
                    受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。
                    </p>
                </Card.Text>
                <Button variant="primary" className='card-btn fs-16 radius-19 mb-3 mx-3 w-90 '>贊助此專案</Button>
            </Card.Body>
        </Card>
        <br />

        <Card border="gray" className='secondCard radius-8'>
            <Card.Body className='m-0 p-0'>
                <Card.Img  src={plan_img} className='rounded-bottom-0'/>
                <Card.Text className=' px-3'>
                    <div className='d-flex align-items-center justify-content-between h-20 mt-4'>
                        <p className='fs-14'>限時優惠</p>
                        <p className='fs-14'>2 days 20:05:20</p>
                    </div>
                    <hr className='w-95 mx-auto'/>
                    <h3 className='fw-bold fs-20 text-start '>買一送一，只有兩百組別錯過</h3>
                    <h3 className='fw-bold fs-20 text-start '>NT$ 1600</h3>
                    <div className='badgetag d-flex align-items-center justify-content-start'>
                        <Badge bg='gray' className='badge-first me-3 fs-12'>已被贊助88次</Badge>
                        <Badge bg='secondary' className='badge-right  fs-12 align-items-center'>
                            <p className='text-white '>限量<span className='text-yellco'>200</span>個</p>
                        </Badge>
                    </div>
                    <p className='text-secondary fontNoto'>
                    受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。
                    </p>
                </Card.Text>
                <Button variant="primary" className='card-btn fs-16 radius-19 mb-3 mx-3 w-90'>贊助此專案</Button>
            </Card.Body>
        </Card>
        <br />

        <Card border="gray" className='secondCard radius-8'>
            <Card.Body className='m-0 p-0'>
                <Card.Img  src={plan_img} className='rounded-bottom-0'/>
                <Card.Text className=' px-3'>
                    <div className='d-flex align-items-center justify-content-between h-20 mt-4'>
                        <p className='fs-14'>限時優惠</p>
                        <p className='fs-14'>2 days 20:05:20</p>
                    </div>
                    <hr className='w-95 mx-auto'/>
                    <h3 className='fw-bold fs-20 text-start '>買一送一，只有兩百組別錯過</h3>
                    <h3 className='fw-bold fs-20 text-start '>NT$ 1600</h3>
                    <div className='badgetag d-flex align-items-center justify-content-start'>
                        <Badge bg='gray' className='badge-first me-3 fs-12'>已被贊助88次</Badge>
                        <Badge bg='secondary' className='badge-right  fs-12 align-items-center'>
                            <p className='text-white '>限量<span className='text-yellco'>200</span>個</p>
                        </Badge>
                    </div>
                    <p className='text-secondary fontNoto'>
                    受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。
                    </p>
                </Card.Text>
                <Button variant="primary" className='card-btn fs-16 radius-19 mb-3 mx-3 w-90'>贊助此專案</Button>
            </Card.Body>
        </Card>
    </>

    
  )
}

export default SideCards