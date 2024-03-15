//留言區塊
import React from 'react'
import './CSS/Message.css'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import SideCards from '../Components/SideCards/SideCards'
import SponsorshipProject from '../Components/SponsorshipProject/SponsorshipProject'
import user_img from '../Components/Assets/user_img01.jpg'
import user2_img from '../Components/Assets/user_img02.jpg'


function Message()  {
  return (
    <Container className='message py-5 px-3 d-flex justify-content-between'>
      <div className='w-100 me-md-5'>
        <h2 className='fw-bold border-start border-primary border-3 p-3 fs-14 mb-3'>只有本專案的贊助者才可以留言哦，如果有任何專案相關的問題，歡迎<span className='text-light-pink'>聯絡提案人</span>！</h2>
        <Card className='mb-3'>
          <Card.Body>
            <Card.Title className='d-flex mb-3'>
              <img src={user_img} alt="" className='messageImg me-3 img-fluid'/>
              <div className="messageCardTitle">
                <h3 className='messageName fw-bold fs-20'>廖小杰</h3>
                <p className='messageDate text-dark fs-14'>2020年5月22日 11:32</p>
              </div>
            </Card.Title>
            <Card.Subtitle className="mb-3 text-muted">
            晚上起床上廁所看到照片裡的人一直動其實有點恐怖，希望可以有暫停或是定時的功能！
            </Card.Subtitle>
            <Card.Text className='bg-light-gray p-3 fw-bold'>
              <p className='tp fs-14 text-light-pink'>提案者回覆</p>
              <p className='textFeeBack fs-16'>你要嘛起床的時候開燈，要嘛給我們更多錢開發阿</p>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='mb-3'>
          <Card.Body>
            <Card.Title className='d-flex mb-3'>
              <img src={user2_img} alt="" className='messageImg me-3 img-fluid'/>
              <div className="messageCardTitle">
                <h3 className='messageName fw-bold fs-20'>卡阿伯</h3>
                <p className='messageDate text-dark fs-14'>2020年5月22日 11:32</p>
              </div>
            </Card.Title>
            <Card.Text className='fw-bold'>
            希望有更多花色可以選擇！我女兒最近喜歡綠色
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='mb-3'>
          <Card.Body>
            <Card.Title className='d-flex mb-3'>
              <img src={user2_img} alt="" className='messageImg me-3 img-fluid'/>
              <div className="messageCardTitle">
                <h3 className='messageName fw-bold fs-20'>賈師</h3>
                <p className='messageDate text-dark fs-14'>2020年5月22日 11:32</p>
              </div>
            </Card.Title>
            <Card.Text className='fw-bold'>
            可以做個相簿功能嗎？拍出好看的影片再讓我們選擇要印出哪一張這樣
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className='mb-3'>
          <Card.Body>
            <Card.Title className='d-flex mb-3'>
              <img src={user2_img} alt="" className='messageImg me-3 img-fluid'/>
              <div className="messageCardTitle">
                <h3 className='messageName fw-bold fs-20'>俊俊</h3>
                <p className='messageDate text-dark fs-14'>2020年5月22日 11:32</p>
              </div>
            </Card.Title>
            <Card.Text className='fw-bold'>
            test123 看一下我是不是真的可以留言
            </Card.Text>
          </Card.Body>
        </Card>
        <SponsorshipProject/>
      </div>
      <div className='sideContent'>
        <SideCards/>
      </div>
    </Container>
  )
}


export default Message