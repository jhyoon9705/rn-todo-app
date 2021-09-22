import React from 'react'
import { Pressable } from 'react-native'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'
import { images } from '../images'

const Icon = styled.Image`
  tint-color: ${({ theme }) => theme.text};
  width: 30px;
  height: 30px;
  margin: 10px;
`

const IconButton = ({ type, onPressOut, id }) => {
  const _onPressOut = () => {
    onPressOut(id)
  }
  return (
    <Pressable onPressOut={_onPressOut} hitSlop={50}>
      <Icon source={type} />
    </Pressable>
  )
}

IconButton.defaultProps = {
  onPressOut: () => {},
}

IconButton.proptypes = {
  type: PropTypes.oneOf(Object.values(images)).isRequired,
  onPressOut: PropTypes.func,
  id: PropTypes.string,
}

export default IconButton
