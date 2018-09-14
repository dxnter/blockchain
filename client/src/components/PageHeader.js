import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Header, Icon, Menu } from 'semantic-ui-react';
import CreateWallet from './CreateWallet';

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
          <Menu.Menu position="right">
            <Menu.Item>
              <Header as="h1" color="green">
                {this.props.funds} BTC
              </Header>
            </Menu.Item>
            {this.props.wallet && (
              <Menu.Item>
                <CreateWallet />
              </Menu.Item>
            )}
          </Menu.Menu>
        </Menu>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ network }) => {
  return {
    funds: network.funds,
    wallet: network.wallet
  };
};

export default withRouter(connect(mapStateToProps)(PageHeader));
