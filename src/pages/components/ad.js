import React from 'react';
import cx from 'clsx';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import {Column, Item} from '@mui-treasury/components/flex';
import {Info, InfoTitle, InfoSubtitle} from '@mui-treasury/components/info';
import {useSoftRiseShadowStyles} from '@mui-treasury/styles/shadow/softRise';
import Link from '@docusaurus/Link';

const family = 'Rubik';

const useStyles = makeStyles(() => ({
  card: {
    position: 'relative',
    borderRadius: 16,
    padding: 12,
    minWidth: 300,
    margin: '20px 0',
  },
  learnMore: {
    backgroundColor: '#fff !important',
    color: '#fb703c',
    borderRadius: 12,
    minWidth: 120,
    minHeight: 42,
    fontFamily: family,
    textTransform: 'initial',
    fontSize: '0.875rem',
    fontWeight: 700,
    letterSpacing: 0,
  },
  img: {
    position: 'absolute',
    width: '40%',
    bottom: 0,
    right: 0,
    display: 'block',
  },
  shell: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    transform: 'translate(70%, 50%)',
    borderRadius: '50%',
    backgroundColor: 'rgba(71, 167, 162, 0.12)',
    padding: '40%',
    '&:before': {
      position: 'absolute',
      borderRadius: '50%',
      content: '""',
      display: 'block',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: '-16%',
      backgroundColor: 'rgba(71, 167, 162, 0.08)',
    },
  },
}));

const useOfferInfoStyles = makeStyles(() => {
  return {
    title: {
      color: 'black',
      fontFamily: family,
      fontSize: '1.125rem',
      fontWeight: 700,
    },
    subtitle: {
      color: '#48bbb5',
      fontFamily: family,
      fontSize: '0.875rem',
      fontWeight: 500,
    },
  };
});

export const AD = React.memo(function OfferCard() {
  const styles = useStyles();
  const shadowStyles = useSoftRiseShadowStyles();
  return (
    <>
      <NoSsr>
        <GoogleFontLoader fonts={[{font: family, weights: [500, 700]}]} />
      </NoSsr>

      <Link to="https://curl.qcloud.com/DMXuZLih">
        <Card className={cx(styles.card, shadowStyles.root)}>
          <Column gap={2} mr={2}>
            <Info position="middle" useStyles={useOfferInfoStyles}>
              <InfoTitle>
                【腾讯云】便宜好用的云服务器，1 核 2G 低至 99
                元/年，个人用户不二之选！
              </InfoTitle>
              <InfoSubtitle />
            </Info>
            <Item mt={2}>
              <Button className={styles.learnMore}>立即抢购！</Button>
            </Item>
          </Column>
          <img
            className={styles.img}
            alt=""
            src="https://cdn.pixabay.com/photo/2014/03/25/16/34/hair-ribbon-297431_1280.png"
          />
          <div className={styles.shell} />
        </Card>
      </Link>
    </>
  );
});

export default AD;
