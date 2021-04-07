import React from 'react'
import { Button, TextArea, Input, Image, Flex, Grid, FlexItem } from '@fluentui/react-northstar'
import { ArrowRightIcon } from '@fluentui/react-icons-northstar'

export default function Intro() {



return (
    <div className="">
        <Flex column hAlign="center" vAlign="center" gap="gap.small" styles={{height: '100vh'}}>
            <FlexItem styles={{marginBottom: '40px'}}>
                <Image
                    styles={{ maxWidth: '350px'}}
                    src="https://static1.squarespace.com/static/5ff2282eb9839a498eab4b9f/t/5ff22edc5abd827cad8c4868/1617789800437/?format=1500w" 
                />
            </FlexItem>
            <Input 
                label="Sign in"
                placeholder="Username"
            />
            <Input 
                placeholder="Password"
            />
            <Button 
                content="Submit login" 
                icon={
                    <ArrowRightIcon 
                        outline
                        size="medium"
                    />
                }
                iconPosition="after" 
                primary
            />
        </Flex>
    </div>
)
}