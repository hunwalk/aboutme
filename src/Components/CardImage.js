import styled from 'styled-components'

import { Media } from '../Theme'

const CardImage = styled.img.attrs({
    className: 'CardImage'
})({
    width: '100%',
    maxWidth: '100%',
    transform: 'translateY(-30%)'
},
    Media.lessThan('md')({
        transform: 'translateY(-20%)'
    }), 
)

export default CardImage