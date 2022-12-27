import {Component} from "react";
import {Button, Stack, Text} from "@chakra-ui/react";
import {TextStyles} from "../styles/TextStyles";
import {StackStyles} from "../styles/StackStyles";
import {DivStyles} from "../styles/DivStyles";

export class WelcomeComponent extends Component {
    render () {

        return (
            <div style={DivStyles.WelcomeDivStyle}>
                <Stack spacing={3} style={StackStyles.FlexCenter}>
                    <Text fontSize='4xl'>Environment var: {import.meta.env.VITE_SOME_KEY}</Text>
                    <Text fontSize='4xl'>Welkom bij de XXX dag</Text>
                    <Text style={TextStyles.welcomeStyle}>
                        Vandaag gaan we een webshop bouwen
                    </Text>
                    <Button>Ga naar de webshop</Button>
                </Stack>
            </div>
        )
    }
}