import styled from 'styled-components'

const RegisterGGStyles = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.26);
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 5px;
  border-radius: 4px;
  flex: 1;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  .img-meta {
    background-image: url(./icon-tonghop.png);
    height: 22px;
    width: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: 83.92857142857143% 5.154639175257732%;
    background-size: 722.2222222222222% 638.8888888888889%;
  }
`

const RegisterGG = ({ className = '' }) => {
  return (
    <RegisterGGStyles className={`${className}`}>
      <div className='img-meta'></div>
      <span>Google</span>
    </RegisterGGStyles>
  )
}

export default RegisterGG
