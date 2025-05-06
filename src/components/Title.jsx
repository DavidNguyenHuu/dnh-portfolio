// Centered3DTitle.jsx
import { Text } from '@react-three/drei'

export default function Title({
  text = 'My Centered Title',
  fontSize = 1,
  color = 'white',
  position = [0, 0, 0],
}) {
  return (
    <Text
      font="/fonts/Roboto-Bold.ttf" // Make sure this font is available
      fontSize={fontSize}
      color={color}
      anchorX="center"
      anchorY="middle"
      position={position}
    >
      {text}
    </Text>
  )
}
