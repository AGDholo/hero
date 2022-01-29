import React from 'react';
import Link from '@docusaurus/Link';
import {Alert, Box} from '@mui/material';

export const AD = React.memo(function OfferCard() {
    return (
        <>
            <Box my={2}>
                <Link
                    to="https://cloud.tencent.com/act/cps/redirect?redirect=10488&cps_key=cda9baf8f446b0c7f98e6638d83ad7ae&from=activity">
                    <Alert severity="info" variant="outlined">
                        【腾讯云】618 特惠，1核2G5M 服务器低至95元一年！
                    </Alert>
                </Link>
            </Box>
        </>
    );
});

export default AD;
