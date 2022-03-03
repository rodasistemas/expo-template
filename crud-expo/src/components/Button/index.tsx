import { FC } from "react"
import {Text} from "react-native"
import {ButtonStyled} from "./style";
const Button:FC<any> = (props) => {
    const {children} = props;

    return (
        <ButtonStyled {...props}><Text>{children}</Text></ButtonStyled>
    )
}

export default Button;