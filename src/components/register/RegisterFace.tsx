import styled from 'styled-components'

const RegisterFaceStyles = styled.div`
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
    background-position: 5.555555555555555% 62.666666666666664%;
    background-size: 325% 287.5%;
  }
`
const RegisterFace = ({ className = '' }) => {
  return (
    <RegisterFaceStyles className={`${className}`}>
      <div className='img-meta'></div>
      <span>Facebook</span>
    </RegisterFaceStyles>
  )
}

export default RegisterFace
