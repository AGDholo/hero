import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CallMade from '@material-ui/icons/CallMade';
import Link from '@docusaurus/Link';

import {Row, Column, Item} from '@mui-treasury/components/flex';
import {useSizedIconButtonStyles} from '@mui-treasury/styles/iconButton/sized';

const StyledTooltip = withStyles({
  tooltip: {
    marginTop: '0.2rem',
    backgroundColor: 'rgba(0,0,0,0.72)',
    color: '#fff',
  },
})(Tooltip);

const useBasicProfileStyles = makeStyles(({palette}) => ({
  avatar: {
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  overline: {
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#8D9CAD',
  },
  name: {
    fontSize: 14,
    fontWeight: 500,
    color: '#495869',
  },
}));

const BasicProfile = (props) => {
  const styles = useBasicProfileStyles();
  return (
    <Row>
      <Item>
        <Avatar className={styles.avatar}>
          <img src="/feather.svg"></img>
        </Avatar>
      </Item>
      <Item position={'middle'} pl={{sm: 0.5, lg: 0.5}}>
        <Typography className={styles.overline}>{props.type}</Typography>
        <Typography className={styles.name}>HeroUI</Typography>
      </Item>
    </Row>
  );
};

const useCardHeaderStyles = makeStyles(() => ({
  root: {paddingBottom: 0},
  title: {
    fontSize: '1.25rem',
    color: '#122740',
  },
  subheader: {
    fontSize: '0.875rem',
    color: '#495869',
  },
}));

const CardHeader = (props) => {
  const styles = useCardHeaderStyles();
  const iconBtnStyles = useSizedIconButtonStyles({padding: 8, childSize: 20});
  return (
    <Row>
      <Item position={'middle'}>
        <Typography className={styles.title}>
          <b>{props.text}</b>
        </Typography>
        <Typography className={styles.subheader}>{props.desc}</Typography>
      </Item>
      <Item position={'right'} mr={-0.5}>
        <StyledTooltip title={'See details'}>
          <IconButton classes={iconBtnStyles}>
            <CallMade />
          </IconButton>
        </StyledTooltip>
      </Item>
    </Row>
  );
};

const useStyles = makeStyles(() => ({
  card: {
    border: '2px solid',
    borderColor: '#E7EDF3',
    borderRadius: 16,
    transition: '0.4s',
    '&:hover': {
      borderColor: '#5B9FED',
    },
  },
}));

export const ShowcaseCard = React.memo(function ShowcaseCard(props) {
  const styles = useStyles();
  const gap = {xs: 1, sm: 1.5, lg: 2};
  return (
    <Link to={`theme/detail?template=${props.href}`}>
      <Column className={styles.card} p={{xs: 0.5, sm: 0.75, lg: 1}} gap={gap}>
        <CardHeader {...props} />
        <Item>
          <Box minHeight={200} bgcolor={'#F4F7FA'} borderRadius={8}>
            <img
              src={props.img}
              height="200px"
              style={{display: 'block', margin: '0 auto'}}></img>
          </Box>
        </Item>
        <BasicProfile {...props} />
      </Column>
    </Link>
  );
});
export default ShowcaseCard;
