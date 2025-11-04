import React from 'react';
import { Col, Row } from '@sigma-ui-kit/grid';

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

const BasicGrid: React.FC = () => (
  <>
    <Row>
      <Col span={24}>
        <div style={style}>col</div>
      </Col>
    </Row>
    <Row>
      <Col span={12}>
        <div style={style}>col-12</div>
      </Col>
      <Col span={12}>
        <div style={style}>col-12</div>
      </Col>
    </Row>
    <Row>
      <Col span={8}>
        <div style={style}>col-8</div>
      </Col>
      <Col span={8}>
        <div style={style}>col-8</div>
      </Col>
      <Col span={8}>
        <div style={style}>col-8</div>
      </Col>
    </Row>
    <Row>
      <Col span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
  </>
);

export default BasicGrid;
