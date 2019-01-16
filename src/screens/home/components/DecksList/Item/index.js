import React from "react"
import { FlatList, Text } from "react-native"

import { Container, Title, CardsCount } from "./styles"

export default class Item extends React.Component {
  render() {
    const { name, id, ...rest } = this.props

    return (
      <Container {...rest}>
        <Title>{name}</Title>
        <CardsCount>{3} cards</CardsCount>
      </Container>
    )
  }
}