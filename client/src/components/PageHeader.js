import React, { Fragment } from 'react';
import { Header, Icon } from 'semantic-ui-react';

const PageHeader = () => {
  return (
    <Fragment>
      <Header as="h2">
        <Icon name="chain" />
        <Header.Content>Manage your Blockchain</Header.Content>
      </Header>
    </Fragment>
  );
};

export default PageHeader;
