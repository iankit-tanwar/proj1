import React from 'react'
import { Nav } from 'react-bootstrap'

export default function Navigation() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Register</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        
      </Nav.Item>
    </Nav>
  )
}
