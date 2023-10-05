import {AiOutlineDelete} from 'react-icons/ai'

import {
  MusicItem,
  Image,
  Flex,
  P,
  Div1,
  DeleteButton,
  Div2,
} from './styledComponents'

const MusicPlayListItem = props => {
  const {musicPlaylistDetails, renderFilteredTracksList} = props
  const {imageUrl, name, genre, duration, id} = musicPlaylistDetails
  const onClickOfDelete = () => {
    renderFilteredTracksList(id)
  }
  return (
    <MusicItem>
      <Div1>
        <Image src={imageUrl} alt="track" />
        <Flex>
          <P color="#ffffff" margin="5px">
            {name}
          </P>
          <P color="#3b82f6" margin="5px">
            {genre}
          </P>
        </Flex>
      </Div1>
      <Div2>
        <P color="#ffffff" margin="15px">
          {duration}
        </P>
        <DeleteButton
          type="button"
          onClick={onClickOfDelete}
          data-testid="delete"
        >
          <AiOutlineDelete size={20} color="#ffffff" />
        </DeleteButton>
      </Div2>
    </MusicItem>
  )
}

export default MusicPlayListItem
