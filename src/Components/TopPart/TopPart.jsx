import React from 'react'
import './TopPart.css'
import Badge from 'react-bootstrap/Badge'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import produt_img from '../../Components/Assets/produt_image.jpg'
import good1 from '../../Components/Assets/icon_good01.svg'
import good2 from '../../Components/Assets/icon_good02.svg'
import good3 from '../../Components/Assets/icon_good03.svg'
import good4 from '../../Components/Assets/icon_good04.svg'

function WithLabelExample() {
  const now = 41;
  return <ProgressBar now={now} label={`${now}%`}/>;
}


const TopPart = () => {
  return (
    <div className='toppart' >
      <h6>
        <Badge bg="secondary">魔法科技</Badge>
      </h6>
      <h1 className='fw-bold'>拍出會動的照片｜LivePhotos 魔法拍立得</h1>

      <div className='toppartContent d-flex align-items-center justify-content-between mb-3'>
        <div className='toppartMainImg mb-md-5'>
            <img src={produt_img} alt="" className='img-fluid'/>
        </div>
        <div className='toppart-info flex-column align-items-center justify-content-start p-lg-3'>
          <p className='fs-6'>目標 $600,000</p>
          <p className='fw-bold fs-3'>$280,047</p>
          <div className='progressBar'>
            {WithLabelExample()}
          </div>
          <div className='topMainContent d-flex text-start align-items-center justify-content-start'>
            <div className='d-flex flex-column w-50'>
              <p className='fs-6'>贊助人數</p>
              <p className='fw-bold fs-3'>1374 人</p>
            </div>
            <div className='d-flex flex-column w-50'>
              <p className='fs-6'>募資倒數</p>
              <p className='fw-bold fs-3'>27 天</p>
            </div>
          </div>
          <Nav className='d-flex align-items-center mb-3'>
            <Nav.Link className='ps-0 d-flex align-items-center '>
              <img src={good1}/>
              <p className='d-block d-md-none text-dark ms-2 pt-3'>認證標章</p>
            </Nav.Link>
            <Nav.Link className='d-flex align-items-center '>
              <img src={good2}/>
              <p className='d-block d-md-none text-dark ms-2 pt-3'>認證標章</p>
            </Nav.Link>
            <Nav.Link className='d-flex align-items-center '>
              <img src={good3}/>
              <p className='d-block d-md-none text-dark ms-2 pt-3'>認證標章</p>
            </Nav.Link>
            <Nav.Link className='d-flex align-items-center '>
              <img src={good4}/>
              <p className='d-block d-md-none text-dark ms-2 pt-3'>認證標章</p>
            </Nav.Link>
          </Nav>

          <div className="py-3 px-2 border-start border-3 border-primary bg-white mb-3">
            <p className='mb-0 text-dark'>專案募資中！<br/>在 2021/06/14 23:59 募資結束前，您都可以贊助我們！</p>
          </div>

          <div className='btns'>
            <Row>
              <Col>
                <Button variant="primary" className='btn-hover-pink w-100 radius-26 mb-1'>贊助專案</Button>
              </Col>
            </Row>
            <Row>
              <Col xs={8}>
                <Button variant="outline-secondary" className='w-100 radius-26 py-2 btn-hover-primary text-secondary'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill=" #858377" className="bi bi-heart-fill me-1" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                  </svg>追蹤專案
                </Button>
              </Col>
              <Col xs={4}>
                <Button variant="outline-secondary" className='w-100 radius-26 py-2 text-secondary btn-hover-primary'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#858377" className="bi bi-share-fill me-1" viewBox="0 0 16 16">
                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
                  </svg>分享
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopPart;