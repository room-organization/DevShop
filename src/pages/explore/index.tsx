import React, { useEffect, useState } from 'react'


import { 
  Container,
  SearchSection,
  SearchBar,
  IconSearch,
  Input,
  Categories,
  CategoryItem,
  IconCategoryItem,
  Title
 } from './styles'

export function Explore() {
  const [search, setSearch] = useState('')  
  useEffect(()=> {
   console.log(search)
 },[search])

  return (
    <Container>
      <SearchSection>
        <SearchBar>
          <IconSearch name="search"/>
          <Input
            placeholder="Search Product"
            onChangeText={(text) => setSearch(text)} 
          />
        </SearchBar>
      </SearchSection>
    <Categories>
      <CategoryItem>
        <IconCategoryItem name="tshirt"/>
        <Title>Camisas</Title>
      </CategoryItem>
      <CategoryItem>
        <IconCategoryItem name="shoe-prints"/>
        <Title>Sapatos Masculinos</Title>
      </CategoryItem>
      <CategoryItem>
        <IconCategoryItem name="tshirt"/>
        <Title>Roupas Infantis</Title>
      </CategoryItem>
      <CategoryItem>
        <IconCategoryItem name="hat-cowboy"/>
        <Title>Chapéus</Title>
      </CategoryItem>
      <CategoryItem>
        <IconCategoryItem name="socks"/>
        <Title>Meias</Title>
      </CategoryItem>
      <CategoryItem>
        <IconCategoryItem name="suitcase"/>
        <Title>Bolsas</Title>
      </CategoryItem>
      <CategoryItem>
        <IconCategoryItem name="tshirt"/>
        <Title>Camisas</Title>
      </CategoryItem>
      <CategoryItem>
        <IconCategoryItem name="shoe-prints"/>
        <Title>Sapatos Masculinos</Title>
      </CategoryItem>
      <CategoryItem>
        <IconCategoryItem name="tshirt"/>
        <Title>Roupas Infantis</Title>
      </CategoryItem>
      <CategoryItem>
        <IconCategoryItem name="hat-cowboy"/>
        <Title>Chapéus</Title>
      </CategoryItem>
      <CategoryItem>
        <IconCategoryItem name="socks"/>
        <Title>Meias</Title>
      </CategoryItem>
      <CategoryItem>
        <IconCategoryItem name="suitcase"/>
        <Title>Bolsas</Title>
      </CategoryItem>
      
    </Categories>
  </Container>

  )
}