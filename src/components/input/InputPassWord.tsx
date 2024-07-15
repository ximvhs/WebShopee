import Input from './Input'
import { useState } from 'react'
import EyeOpen from '../icon/EyeOpen'
import EyeClose from '../icon/EyeClose'
import styled from 'styled-components'

const InputPassWordStyles = styled.div`
  position: relative;
  .input {
    padding-right: 52px;
  }

  .input-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    padding: 10px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`

const InputPassWord = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <InputPassWordStyles>
      <Input type={toggle ? 'text' : 'password'} className='input' name='password' placeholder='Password'>
        {toggle ? (
          <EyeOpen className='input-icon' onClick={() => setToggle(false)}></EyeOpen>
        ) : (
          <EyeClose className='input-icon' onClick={() => setToggle(true)}></EyeClose>
        )}
      </Input>
    </InputPassWordStyles>
  )
}

export default InputPassWord
