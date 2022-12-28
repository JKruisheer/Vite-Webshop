
import {Button, Input, Stack, Text} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import {useRef, useState} from "react";

const WelcomeComponent = () => {

    const navigate = useNavigate();

    const [url, setUrl] = useState('');

    function handleClicker() : void {
        navigate(url);
    }

    const handleChange = (event : any ) => {
        setUrl(event.target.value);
    };

    return (
        <div className="WelcomeDivStyle">
            <Stack spacing={3} className="FlexCenter">
                <Text fontSize='4xl'>Welkom bij de woenzende zondag!</Text>
                <Text>
                    Vandaag gaan we een webshop bouwen
                </Text>
                <Input onChange={handleChange} value={url}></Input>
                <Button
                    onClick={handleClicker}>
                    Ga naar de webshop</Button>
                <div className="environment-data">
                    <Text fontSize='1xl'>Environment var: {import.meta.env.VITE_SOME_KEY}</Text>
                </div>
            </Stack>
        </div>
    )
}

export default WelcomeComponent;