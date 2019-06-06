import { Link } from '../services/i18n';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Footer } from '../components/footer';
import { Nav } from '../components/nav';

export default function Job() {
  return (
    <div>
      <Nav />
      <Container>
        <Link href="/">
          <button>Go home</button>
        </Link>
        <p>About</p>
      </Container>
      <Footer />
    </div>
  );
}
