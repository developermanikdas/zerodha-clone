import React from 'react';
import Hero from './Hero';
import Team from "./Team"
import Story from './Story';
import Founder from './Founder';

function AboutPage() {
    return (
        <>
            <Hero />
            <Story />
            <Founder />
            <Team />
        </>
    );
}

export default AboutPage;