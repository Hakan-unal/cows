import { Row, Col, Card, Carousel } from "antd";
import { useState } from "react";
import cow1 from "../src/assets/cow1.jpg";
import carousel1 from "../src/assets/carousel1.jpg";
import carousel2 from "../src/assets/carousel2.jpg";
import carousel3 from "../src/assets/carousel3.jpg";
import carousel4 from "../src/assets/carousel4.jpg";

const cows = [
  { name: "Kurbanlık", description: "Kurbanlık", image: cow1 },
  { name: "Adaklık", description: "Kurbanlık", image: cow1  },
  { name: "Büyükbaş", description: "Kurbanlık", image: cow1  },
  { name: "Küçükbaş", description: "Kurbanlık", image: cow1  },
  { name: "Kurbanlık", description: "Kurbanlık", image: cow1 },
  { name: "Adaklık", description: "Kurbanlık", image: cow1  },
  { name: "Büyükbaş", description: "Kurbanlık", image: cow1  },
  { name: "Küçükbaş", description: "Kurbanlık", image: cow1  },
];

const { Meta } = Card;

const CowsComponent = () => {
    return cows.map((obj, index) => 
       (
        <Col key={index} xs={24} sm={12} md={8} xl={6}>
          <Card
            hoverable
            cover={<img draggable={false} alt="example" src={obj.image} />}
          >
            <Meta title={obj.name} description={obj.description} />
          </Card>
        </Col>
      )
    );
  };

const App = () => {
  

  return (
    <Row gutter={[12, 36]}>
      <Col span={24} className="header" />

      <Col xs={{span:24,offset:0}} lg={{span:16,offset:4}} >
        <Carousel autoplay>
          <div>
            <img draggable={false} alt="example" src={carousel1} />
          </div>
          <div>
            <img draggable={false} alt="example" src={carousel2} />
          </div>
          <div>
            <img draggable={false} alt="example" src={carousel3} />
          </div>
          <div>
            <img draggable={false} alt="example" src={carousel4} />
          </div>
        </Carousel>
      </Col>

      <CowsComponent />
    </Row>
  );
};

export default App;
