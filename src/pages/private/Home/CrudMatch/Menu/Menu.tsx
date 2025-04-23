import ButtonIcon from '@components/ButtonIcon/ButtonIcon'
import { CiTrash } from 'react-icons/ci'
import { IoMdCopy } from 'react-icons/io'
import css from './Menu.module.css'
interface MenuProps {
  onDelete: () => void
  onCopy: () => void
}
function Menu({ onDelete, onCopy }: MenuProps) {
  return (
    <div className={css.menu}>
      <ButtonIcon onClick={onDelete}>
        <CiTrash size={28} color='red' />
      </ButtonIcon>
      <ButtonIcon onClick={onCopy}>
        <IoMdCopy size={28} />
      </ButtonIcon>
    </div>
  )
}
export default Menu
