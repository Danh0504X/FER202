// Trang giới thiệu (Home) chứa thông tin tác giả 
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import HeroCarousel from '../components/HeroCarousel';
import { banners } from '../data/bannerImages';
function Home() {
  return (
    <>
    <HeroCarousel slides={banners} />

    <Container className="mt-4">
   
          
          {/* các section khác nằm ngay dưới */}
    

      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>1. Thông tin tác giả </Card.Title>
          <Card.Text>
          * <strong>Mã SV:</strong> DE190155 <br/>
          * <strong>Họ tên:</strong> DanhVT <br/>
          * <strong>GitHub:</strong> <a href="https://github.com/Danh0504X">Link Github</a>
        </Card.Text>
        <hr />
        <Card.Title>2. Cấu trúc project </Card.Title>
        <p>Project được tổ chức theo cấu trúc Component-based với React-Bootstrap.</p>
      </Card.Body>
    </Card>
  </Container>

  </>
);
}

export default Home;