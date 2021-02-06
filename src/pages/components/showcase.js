import React from 'react';

import Box from '@material-ui/core/Box';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import Link from '@docusaurus/Link';

import {Row, Column, Item} from '@mui-treasury/components/flex';



const BasicProfile = (props) => {
  return (
    <Row>
      <Item>
        <Avatar style={{borderRadius: 8,
          backgroundColor: '#fff',}}>
          <img src="/feather.svg" />
        </Avatar>
      </Item>
      <Item position="middle" pl={{sm: 0.5, lg: 0.5}}>
        <Typography style={{    fontSize: 10,
          textTransform: 'uppercase',
          letterSpacing: 1,
          color: '#8D9CAD',}}>{props.type}</Typography>
        <Typography style={{    fontSize: 14,
          fontWeight: 500,
          color: '#495869',}}>HeroUI</Typography>
      </Item>
    </Row>
  );
};



const CardHeader = (props) => {

  return (
    <Row>
      <Typography style={{fontSize: '1.25rem',
        color: '#122740',}}>
        <b>{props.text}</b>
      </Typography>
      <Typography  style={{    fontSize: '0.875rem',
        color: '#495869',}}>{props.desc}</Typography>
    </Row>
  );
};

export const ShowcaseCard = React.memo(function ShowcaseCard(props) {
  const gap = {xs: 1, sm: 1.5, lg: 2};
  return (
    <Link to={props.href}>
      <Column style={{border: '2px solid',  borderColor: '#E7EDF3',
        borderRadius: 16,
        transition: '0.4s',}} p={{xs: 0.5, sm: 0.75, lg: 1}} gap={gap}>
        <CardHeader {...props} />
        <Item>
          <Box minHeight={200} bgcolor="#F4F7FA" borderRadius={8}>
            <img
              src={props.img}
              height="200px"
              style={{display: 'block', margin: '0 auto'}} />
          </Box>
        </Item>
        <BasicProfile {...props} />
      </Column>
    </Link>
  );
});
export default ShowcaseCard;
