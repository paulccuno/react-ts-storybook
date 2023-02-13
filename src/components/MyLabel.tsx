import './mylabel.css'

interface MyLabelProps {
  /**
   * Este es el mensaje por defecto del label
   */
  label: string
  /**
   * Este es el tamaño por defecto del label
   */
  size: 'normal' | 'h1' | 'h2' | 'h3'
  /**
   * Si quiere todo capitalizado
   */
  allCaps?: boolean
  /**
   * Este es el color por defecto del label
   */
  color?: 'primary' | 'secondary' | 'tertiary'
  /**
   * Este es el color de fuente por defecto del label
   */
  fontColor?: string
}

export const MyLabel = ({
  label = 'No label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor,
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
