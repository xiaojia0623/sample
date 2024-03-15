import React from 'react'
import './CSS/CurrentProgress.css'
import Container from 'react-bootstrap/Container';
import SideCards from '../Components/SideCards/SideCards';
import SponsorshipProject from '../Components/SponsorshipProject/SponsorshipProject';
import news1_img from '../Components/Assets/news01.jpg'
import news2_img from '../Components/Assets/news02.jpg'
import news3_img from '../Components/Assets/news03.jpg'
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';


function CurrentProgress() {
  return (
    <Container className='currpro py-5 px-3 d-flex justify-content-between'>
      <div className='leftCard me-lg-5'>
        <div>
          <ListGroup className='border-2 border-dark mb-5' horizontal>
            <ListGroup.Item className='border-end-0 p-0'>
              <Image src={news1_img} className='h-100'/>
            </ListGroup.Item>
            <ListGroup.Item className='border-start-0 pt-2'>
              <h3 className='fw-bold'>高雄體驗會｜免費參加送帆布袋</h3>
              <p className='list-date text-dark'>2021-6-20</p>
              <p className='list-content text-dark d-none d-md-block'>
              大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！
              </p>
              <button className='text-danger fw-bold border-0 bg-none btn p-0'>MORE</button>
            </ListGroup.Item>
          </ListGroup>

          <ListGroup className='border-2 border-dark mb-5' horizontal>
            <ListGroup.Item className='border-end-0 p-0'>
              <Image src={news2_img} className='h-100'/>
            </ListGroup.Item>
            <ListGroup.Item className='border-start-0 pt-2'>
              <h3 className='fw-bold '>高雄體驗會｜免費參加送帆布袋</h3>
              <p className='list-date text-dark'>2021-6-20</p>
              <p className='list-content text-dark d-none d-md-block'>
              大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！
              </p>
              <button className='text-danger fw-bold border-0 bg-none btn p-0'>MORE</button>
            </ListGroup.Item>
          </ListGroup>

          <ListGroup className='border-2 border-dark mb-5' horizontal>
            <ListGroup.Item className='border-end-0 p-0'>
              <Image src={news3_img} className='h-100'/>
            </ListGroup.Item>
            <ListGroup.Item className='border-start-0 pt-2'>
              <h3 className='fw-bold '>高雄體驗會｜免費參加送帆布袋</h3>
              <p className='list-date text-dark'>2021-6-20</p>
              <p className='list-content text-dark d-none d-md-block'>
              大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！
              </p>
              <button className='text-danger fw-bold border-0 bg-none btn p-0'>MORE</button>
            </ListGroup.Item>
          </ListGroup>  
        </div>
        <div>
          <SponsorshipProject/>
        </div>
      </div>
      <div className='sideContent'>
        <SideCards/>
      </div>
    </Container>
  )
}


export default CurrentProgress