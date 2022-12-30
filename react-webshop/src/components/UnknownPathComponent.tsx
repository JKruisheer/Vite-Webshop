import {Component} from "react";
import {Button} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

const UnknownPathComponent = () => {
    const navigate = useNavigate();

    function goBack() {
        navigate(-1 )
    }

    return (
        <div className={"main-unknown-page"}>
            <p>I think that you are on the wrong page?</p>
            <p>You might want to go back to find the correct page?</p>
            <Button onClick={() => goBack()}>Go back</Button>
        </div>
    )
}

export default UnknownPathComponent;