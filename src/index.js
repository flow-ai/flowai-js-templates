
import Message from './generic/message'

import Card from './generic/templates/card'
import Text from './generic/templates/text'
import Image from './generic/templates/image'
import Video from './generic/templates/video'
import Audio from './generic/templates/audio'
import File from './generic/templates/file'
import Buttons from './generic/templates/buttons'
import Carousel from './generic/templates/carousel'
import List from './generic/templates/list'
import Location from './generic/templates/location'
import Custom from './generic/templates/custom'
import Action from './generic/components/action'
import Button from './generic/components/button'
import Media from './generic/components/media'
import ListItem from './generic/components/listItem'
import { Param } from './generic/components/param'
import QuickReply from './generic/components/quickReply'

// Phone templates
import Say from './phone/templates/say'
import Hangup from './phone/templates/hangup'
import Pause from './phone/templates/pause'
import Ask from './phone/templates/ask'
import Dial from './phone/templates/dial'

const Phone = {
  Say,
  Hangup,
  Pause,
  Ask,
  Dial
}

export {
  Message,

  Text,
  Card,
  Image,
  Video,
  Audio,
  File,
  Buttons,
  Carousel,
  List,
  Location,
  Custom,

  Action,
  Button,
  Media,
  ListItem,
  Param,
  QuickReply,

  Phone
}
