import React from 'react';

import Box from '@material-ui/core/Box';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import Link from '@docusaurus/Link';

import {Row, Column, Item} from '@mui-treasury/components/flex';

const CardHeader = (props) => {
  return (
    <Row display="flex" alignItems="center">
      <Box>
        <Typography style={{fontSize: '1.25rem', color: '#fff'}}>
          <b>{props.text}</b>
        </Typography>
        <Typography style={{fontSize: '0.875rem', color: '#fff'}}>
          {props.desc}
        </Typography>
      </Box>
    </Row>
  );
};

export const ShowcaseCard = React.memo(function ShowcaseCard(props) {
  const gap = {xs: 1, sm: 1.5, lg: 2};
  return (
    <Link to={props.href}>
      <Column
        style={{
          border: '1px solid',
          borderColor: 'rgba(255,255,255,0.3)',
          borderRadius: 16,
          transition: '0.4s',
        }}
        p={{xs: 0.5, sm: 0.75, lg: 1}}
        gap={gap}>
        <CardHeader {...props} />
        <Item>
          <Box minHeight={200} borderRadius={1}>
            <img
              src={props.img}
              height="200px"
              style={{display: 'block', margin: '0 auto'}}
            />
          </Box>
        </Item>
      </Column>
    </Link>
  );
});
export default ShowcaseCard;
