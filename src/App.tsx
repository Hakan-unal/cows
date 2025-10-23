import { Row, Typography, Col } from "antd";
import { useState } from "react";




const App = () => {
  const [current, setCurrent] = useState<number>(3);



  return (
    <Row justify={"center"}>
      <Col span={16} md={8}>
        
      </Col>
    </Row>
  );
};

export default App;
