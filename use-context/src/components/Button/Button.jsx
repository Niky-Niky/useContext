import { Context } from "../../App";
import { Button } from "./Button.styled";
import { useContext } from "react";
export const SignButton = () => {
const {signedIn, setSignedIn} = useContext(Context)
return(
    <Button onClick={() => {setSignedIn(!signedIn)}}>
        {signedIn ? 'Sign Out' : 'Sign In'}
    </Button>
)
}