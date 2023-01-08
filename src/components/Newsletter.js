import { Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React from "react";
import styled from "styled-components"

const Container = styled.section`
    min-height: 350px;
    background-color: #fcf5f5;
`
const Wrapper = styled.div`
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h2`
    font-size: 4.37rem;
    margin-bottom: 1.25rem;
`
const Description = styled.div`
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 1.75rem;
`
const InputContainer = styled.form`
    width: 50%;
    min-height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
`

const Newsletter = () => {
    return (
        <Container>
            <Wrapper>
            <Title>Newsletter</Title>
            <Description>Sign up to get timely updates for your favourite products.</Description>
            <InputContainer>
                <TextField fullWidth id="outlined-basic" label="Email address" placeholder="Your email address" variant="outlined" required/>
                <Button variant="outlined" type="submit" fontSize="1.2rem" endIcon={<SendIcon fontSize="inherit"/>}>
                    Send
                </Button>
            </InputContainer>
            </Wrapper>
        </Container>
    );
};
export default Newsletter;