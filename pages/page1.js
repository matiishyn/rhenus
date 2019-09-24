import React from 'react';
import { withNamespaces } from '../services/i18n';
import { Nav } from '../components/common/nav';

class Page1 extends React.Component {
  render() {
    return <Nav />;
  }
}

export default withNamespaces('common')(Page1);
