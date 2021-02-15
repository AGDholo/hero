import React from 'react';
import Link from '@docusaurus/Link';
import {Alert, Box} from '@material-ui/core';

export const AD = React.memo(function OfferCard() {
  return (
    <>
      <Box my={2}>
        <Link to="https://curl.qcloud.com/DMXuZLih">
          <Alert severity="info" variant="outlined" sx={{color: 'white'}}>
            【腾讯云】便宜好用的云服务器，1 核 2G 年付低至
            99，个人用户不二之选！
          </Alert>
        </Link>
      </Box>
    </>
  );
});

export default AD;
