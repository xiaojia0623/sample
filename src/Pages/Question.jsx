//留言區塊

import React from 'react'
import '../Pages/CSS/Question.css'
import Container from 'react-bootstrap/Container'
import Accordion from 'react-bootstrap/Accordion'
import SideCards from '../Components/SideCards/SideCards'
import SponsorshipProject from '../Components/SponsorshipProject/SponsorshipProject'
function Question (){
  return (
    <Container className='ques my-5 d-flex justify-content-between'>
      <div className='quesAccor'>
        <Accordion className='me-md-5 mb-5'>
          <Accordion.Item eventKey="0" className='w-100'>
              <Accordion.Header>
                <p><span>Q1</span> 影片拍完之後可以編輯嗎？</p>
              </Accordion.Header>
              <Accordion.Body>
              可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className='w-100'>
              <Accordion.Header>
                <p><span>Q2</span> 有提供保固或維修服務嗎？</p>
              </Accordion.Header>
              <Accordion.Body>
              可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className='w-100'>
              <Accordion.Header>
                <p><span>Q3</span> 補充包底片要去哪裡購買呢？</p>
              </Accordion.Header>
              <Accordion.Body>
              可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className='w-100'>
              <Accordion.Header>
                <p><span>Q4</span> 印出來的拍立得照片需要充電嗎？</p>
              </Accordion.Header>
              <Accordion.Body>
              可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className='w-100'>
              <Accordion.Header>
                <p><span>Q5</span> 運送方式及付款方式有哪些呢？</p>
              </Accordion.Header>
              <Accordion.Body>
              可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className='w-100'>
              <Accordion.Header>
                <p><span>Q6</span> 退換貨方式及規則</p>
              </Accordion.Header>
              <Accordion.Body>
              可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！
              </Accordion.Body>
          </Accordion.Item>
        </Accordion>

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


export default Question