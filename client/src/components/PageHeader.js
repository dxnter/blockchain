import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Header, Icon, Menu } from 'semantic-ui-react';

class PageHeader extends Component {
  fetchActiveTab() {
    return this.props.location.pathname;
  }
  render() {
    const activeTab = this.fetchActiveTab();
    return (
      <Fragment>
        <Header as="h2">
          <Icon name="chain" />
          <Header.Content>Manage your Blockchain</Header.Content>
        </Header>
        <Menu tabular>
          <Menu.Item
            as={Link}
            to="/"
            name="Wallet & Node"
            active={activeTab === '/'}
          />
          <Menu.Item
            as={Link}
            to="/network"
            name="Network"
            active={activeTab === '/network'}
          />
        </Menu>
      </Fragment>
    );
  }
}

export default withRouter(PageHeader);
