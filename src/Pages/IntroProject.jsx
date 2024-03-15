//專案介紹區塊
import React from 'react'
import './CSS/IntroProject.css'
import Container from 'react-bootstrap/Container';
import SideCards from '../Components/SideCards/SideCards';
import SponsorshipProject from '../Components/SponsorshipProject/SponsorshipProject';
import magic_img from '../Components/Assets/p1.jpg'
import camaera_img from '../Components/Assets/p2.jpg'

function IntroProject() {
  return (
    <Container className='intro py-5 px-3 d-flex justify-content-between'>
        <div className="introContent">
            <div className='mb-2 intro-content'>
                <img src={magic_img} alt="" />
                <h2 className='fw-bold fs-24 fontNoto'>施了魔法的照片</h2>
                <p className='fs-16 fontNoto line-32 w-724'>
                受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。
                </p>
            </div>
            <div className='mb-3 intro-content'>
                <img src={camaera_img} alt="" />
                <h2 className='fw-bold fs-24 fontNoto'>留下當下的美好</h2>
                <p className='fs-16 fontNoto line-32 w-724'>
                受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。
                </p>
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

export default IntroProject