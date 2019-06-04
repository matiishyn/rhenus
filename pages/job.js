import {Link} from '../i18n';
import React from 'react';
import {Container} from 'react-bootstrap';
import {Footer} from '../components/footer';
import {Header} from '../components/header';

export default function Job() {
  return (
    <div>
      <Header/>
      <Container>
        <Link href="/">
          <button>Go home</button>
        </Link>
        <p>About</p>
      </Container>
      <Footer/>
    </div>
  );
}
