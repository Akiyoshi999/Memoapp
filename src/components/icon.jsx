import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import React from 'react'
import { useFonts } from '@use-expo/font'
import { number, oneOf, string } from 'prop-types'

import icomoon from '../../assets/fonts/icomoon.ttf'
import selection from '../../assets/fonts/selection.json'

const Icon = (props) => {
  const [fontLoaded] = useFonts({ icomoon })
  const { name, size, color } = props
  const CustomIcon = createIconSetFromIcoMoon(selection)

  if (!fontLoaded) {
    return null
  }
  return <CustomIcon name={name} size={size} color={color} />
}

Icon.propTypes = {
  name: oneOf(['plus', 'delete', 'pencil', 'check']).isRequired,
  size: number,
  color: string,
}

Icon.defaultProps = {
  size: 24,
  color: '#000000',
}

export default Icon
