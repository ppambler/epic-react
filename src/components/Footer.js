import React from 'react'
import styled from "styled-components";

const Footer = styled.footer`
  padding: 10px 10px;
  text-align: center;
  font-size: 12px;
  color: #aaa;
`
console.log(Footer) // 一个对象
function Component() {
  return (
    <Footer>
      <h1>Footer</h1>
    </Footer>
  )
}

export default Component
