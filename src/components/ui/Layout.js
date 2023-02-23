import React from 'react'
import { Col, Nav, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  return (
    <>
    <Header/>
    <main>
        
        <Row className='h-100'>
            <Col sm={2} className='a_tbdr h-100'>
            <aside>Aside</aside>
            
            
            </Col>
            <Col sm={10} className='a_tbdr h-100'>
            
            <Outlet/>
            </Col>
        </Row>



    </main>
    <Footer/>
    </>
    
  )
}
