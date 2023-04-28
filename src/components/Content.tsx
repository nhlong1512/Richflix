import React from 'react'
import {Col, Row} from 'antd'
import Banner from './Banner'
import ListMovies from './ListMovies'

const Content:React.FC = () => {
  return (
    <Col span={24}>
      <Banner/>
      <ListMovies/>
    </Col>
  )
}

export default Content