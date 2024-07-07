import { Button } from "compositions/ui/button"
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "compositions/ui/menu"

export const MenuWithLinks = () => {
  return (
    <MenuRoot>
      <MenuTrigger>
        <Button>Popular Animes</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem asChild value="naruto">
          <a href="https://www.crunchyroll.com/naruto" target="_blank">
            Naruto
          </a>
        </MenuItem>
        <MenuItem asChild value="one-piece">
          <a href="https://www.crunchyroll.com/one-piece" target="_blank">
            One Piece
          </a>
        </MenuItem>
        <MenuItem asChild value="attack-on-titan">
          <a href="https://www.crunchyroll.com/attack-on-titan" target="_blank">
            Attack on Titan
          </a>
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  )
}
