
import {AspectRatio, Button, Input, Stack, Text, Image} from "@chakra-ui/react";
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

    const handleKeyDown = (event : any) => {
        if(event.key === 'Enter'){
            handleClicker();
        }
    }

    return (
        <div className="welcome-div-style">
            <Stack spacing={6} className="flex-center">
                <Text fontSize='4xl'>Welkom bij de woenzende zondag!</Text>
                <Text>
                    Vandaag gaan we een webshop bouwen
                </Text>
                <Input
                    placeholder='Vul de URL in die je denkt dat de webshop is'
                    variant='flushed'
                    onChange={handleChange}
                    type={'password'}
                    onKeyDown={handleKeyDown}
                    value={url}></Input>
                <Button
                    onClick={handleClicker}>
                    Ga naar de webshop</Button>
                {/*<Image src='https://media.tenor.com/7Wiek7XlUY8AAAAC/haha-so-funny.gif' alt='funny AF' objectFit='cover' />*/}

            </Stack>
        </div>
    )
}

export default WelcomeComponent;