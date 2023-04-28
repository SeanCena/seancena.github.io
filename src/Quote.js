// Returns a random quote from a list

import { Link, Code } from '@chakra-ui/react';

const quotes = [
    <Link color='purple.900' href='https://youtu.be/apK2jCrfnsk' isExternal>Metallica - One</Link>,
    <Link color='purple.900' href='https://youtu.be/8DizBlRFMD4' isExternal>9mm Parabellum Bullet - Inferno</Link>,
    <Link color='purple.900' href='https://youtu.be/EjWeMg7kr0Q' isExternal>Yoko Takahashi - Soul's Refrain</Link>,
    <Link color='purple.900' href='https://youtu.be/Ep7Ni6dtQaA' isExternal>Jamie Christopherson - The Stains of Time</Link>,
    <Link color='purple.900' href='https://youtu.be/xemLN52jrUA' isExternal>Testament - Electric Crown</Link>,
    <Link color='purple.900' href='https://youtu.be/c2Bdsr7CwBI' isExternal>Black Sabbath - Children of the Sea</Link>,
    <Link color='purple.900' href='https://youtu.be/YmJIccPWnEk' isExternal>Rainbow - Stargazer</Link>,
    <Link color='purple.900' href='https://youtu.be/nM__lPTWThU' isExternal>Judas Priest - Painkiller</Link>,
    <Link color='purple.900' href='https://youtu.be/blWLvO_o-eQ' isExternal>Trivium - Crisis of Revelation</Link>,
    <Link color='purple.900' href='https://youtu.be/AxuTd9rwEHQ' isExternal>Foo Fighters - Everlong</Link>,
    <Link color='purple.900' href='https://youtu.be/bSpqLqC7U6g' isExternal>Opeth - Windowpane</Link>,
];

function Quote() {
    return (
        <Code>Made with Chakra UI. Song of the day is {quotes[Math.floor(Math.random()*quotes.length)]}</Code>
    );
}

export default Quote;