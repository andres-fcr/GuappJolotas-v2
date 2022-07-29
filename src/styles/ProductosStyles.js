
import { Card, } from "react-bootstrap";
import styled from "styled-components";

export const Foto = styled(Card.Img) `
height: 80px;
width: 80px;
`


export const Producto = styled.li`
list-style:none;
font-style: 1.5rem;
text-align:center;
margin-top:10px;
:hover {
    opacity: 0.8;
}
`
export const ListProducto = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
padding:0 300px 0 300px;
justify-content: center;
margin-bottom:50px;
`

export const Precio = styled(Card.Text)`
color: #FA4A0C;
font-weight: bold;
`
export const TProducto = styled(Card.Title)`
font-size: 14px;
line-height: 21px;
`

export const Ul = styled.ul`
display: flex;
align-items: center;
justify-content: center;
margin-bottom:10px;
margin-top:10px;
`

export const Guajolotes = styled.div`

padding-left: 0px;
padding-right: 10px;

`

export const Tamales = styled.div`

padding-left: 0px;
padding-right: 10px;

`
export const Bebidas = styled.div`

padding-left: 0px;
padding-right: 10px;

`

export const ConjuntoTexto = styled.div`
padding-right:20px;
`

export const Li = styled.li`
list-style:none;
margin-right:30px;
`

export const Head = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 50px;
`

export const Texto = styled.div`
font-size:25px;
color: #FA4A0C;
text-align: center;
margin-top:30px;
margin-left: 200px;
margin-right: 200px;
margin-bottom: 50px;
box-sizing: border-box;
`
export const Imagenes = styled.div`

top: 100px;

`


export const Link = styled.div`

float: left;
margin-top: 40px;
margin-right: 50px;
width: 64px;
height: 64px;

`

export const Carrito = styled.div`

float: right;
margin-top: 30px;
margin-left: 10px;
width: 70px;
height: 70px;
`


export const Busca = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const Input = styled.input`

width: 450px;
height: 60px;
font-size: 18px;
outline: none;
border-color: #FF3E00;
border-radius: 30px;

`
