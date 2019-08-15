import React, { Component } from 'react';
import { withNamespaces } from '../services/i18n';
import axios from 'axios';

class LinkedinCallback extends Component {
  constructor(params) {
    super(params);
  }

  componentDidMount = async () => {
    const { code } = this.props;
    const response = await axios.get('/api/linkedin-callback?code=' + code);
    window.opener?.postMessage({ type: 'LINKED_IN', data: response.data });
    window.close();
  };

  render() {
    return <div>Loading...</div>;
  }
}

LinkedinCallback.getInitialProps = async context => {

  return {
    namespacesRequired: ['common'],
    code: context.query.code
  };
};

export default withNamespaces('common')(LinkedinCallback);
