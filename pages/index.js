import Link from 'next/link';
import React from 'react';
import {Container} from 'react-bootstrap';
import {Footer} from '../components/footer';
import {Header} from '../components/header';

const Index = () => (
  <div>
    <Header/>

    <Container>
      <Link href="/about">
        <button>Go to About Page</button>
      </Link>
      <p>Hello Next.js</p>
      <h1>ENV: {process.env.TEST}</h1>
    </Container>
    <Footer/>
  </div>
);

export default Index;
