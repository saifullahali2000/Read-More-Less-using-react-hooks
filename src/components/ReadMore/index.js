// Write your code here
import {useState} from 'react'

import {MainContainer, Image, Para, Button,Heading} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [moreText, setMoreText] = useState(true)

  const onChangeReadMore = () => {
    setMoreText(prevState => !prevState)
  }

  return (
    <MainContainer>
      <Heading> React Hooks</Heading>
      <p>Hooks are a new addition to React</p>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />

      <Para>
        {moreText ? reactHooksDescription.slice(0, 170) : reactHooksDescription}
      </Para>
      <Button type="button" onClick={onChangeReadMore}>
        {moreText ? 'Read More' : 'Read Less'}
      </Button>
    </MainContainer>
  )
}

export default ReadMore
