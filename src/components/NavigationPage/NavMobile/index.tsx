import {
  MdOutlineHome,
  MdOutlinePeople,
  MdOutlinePersonOutline,
  MdOutlineSearch
} from 'react-icons/md'
import { MenuItem } from '../MenuItem'

export function NavMobile() {
  return (
    <>
      <ul className="flex items-center justify-around">
        <MenuItem menuTitle="Inicio" path="/home">
          <MdOutlineHome size={32} />
        </MenuItem>
        <MenuItem menuTitle="Pesquisar" path="/search">
          <MdOutlineSearch size={32} />
        </MenuItem>
        <MenuItem menuTitle="Amigos" path="/friends">
          <MdOutlinePeople size={32} />
        </MenuItem>
        <MenuItem menuTitle="Perfil" path="/profile">
          <MdOutlinePersonOutline size={32} />
        </MenuItem>
      </ul>
    </>
  )
}
