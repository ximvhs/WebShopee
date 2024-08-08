import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

interface Props {
  children?: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <Header>{children}</Header>
      <Footer></Footer>
    </div>
  )
}
