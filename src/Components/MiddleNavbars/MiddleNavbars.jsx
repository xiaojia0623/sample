//中間菜單區塊
import '../../Components/MiddleNavbars/MiddleNavbars.css'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


const MiddleNavbars = () => {
  return (
    <div className='middleNav py-3 border-top border-bottom border-dark'>
      <Container>
        <Nav>
          <Nav.Item className='underline-hover'>
            <Nav.Link href="/" className='text-dark fw-bold'>專案介紹</Nav.Link>
          </Nav.Item>
          <Nav.Item className='underline-hover'>
            <Nav.Link href="/question" className='text-dark fw-bold'>常見問答</Nav.Link>
          </Nav.Item>
          <Nav.Item className='underline-hover'>
            <Nav.Link href="/currentprogress" className='text-dark fw-bold '>目前進度</Nav.Link>
          </Nav.Item>
          <Nav.Item className='underline-hover'>
            <Nav.Link href="/message" className='text-dark fw-bold'>留言</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  )
}


export default MiddleNavbars;