import Footer from '../../components/Footer/Footer'
import RegisterHeader from '../../components/RegisterHeader/RegisterHeader'

interface Props {
  children?: React.ReactNode
}

export default function RegisterLayout({ children }: Props) {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  )
}
