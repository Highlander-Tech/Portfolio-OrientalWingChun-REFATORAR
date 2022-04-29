import { VscTriangleRight } from 'react-icons/vsc'

import { TypeCity, useSelect } from '@/hooks/useSelect'

import { Button as StyledButton } from './styles'

interface Props {
  title: string
}

function Button({ title }: Props) {
  const text = title.replace(/[^0-9a-zA-Z]+/g, '').toLowerCase()
  const { setSelect } = useSelect()

  return (
    <StyledButton onClick={() => setSelect(text as TypeCity)}>
      <VscTriangleRight size={20} /> {title}
    </StyledButton>
  )
}

export { Button }
export type { Props as ButtonProps }