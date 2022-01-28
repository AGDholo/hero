/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import {Box, Container, Icon, Link, Typography} from "@mui/material";
import {EmailOutlined} from "@mui/icons-material";
import {grey, orange} from "@mui/material/colors";

const data = [{
    link: 'https://twitter.com/stackFlam1ngo',
    label: 'Twitter',
}, {
    link: 'https://github.com/AGDholo',
    label: 'Github',
}]

const Footer = () => {
    return (
        <>
            <Box bgcolor={'#041434'}>
                <Container maxWidth={"lg"} sx={{py: 10}}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <div>
                            <Icon><EmailOutlined sx={{color: orange[500]}}/></Icon>
                        </div>
                        <Typography variant={'h6'} color={'#fff'} sx={{ml: 2}}>
                            AGDholo@outlook.com
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant={'h2'} color={'#fff'} sx={{my: 4}}>
                            Make your life easier.
                        </Typography>

                        <Typography variant={'h6'} color={grey[400]}>
                            Contact me, let us create special things together.
                        </Typography>
                    </Box>

                    <Box mt={4} sx={{display: 'flex'}}>
                        <Box sx={{display: 'flex'}}>
                            {data.map((item, index) => (
                                <Typography variant={'h6'} color={'#fff'} sx={{mr: 2}}>
                                    <Link underline="none" href={item.link} target={'_blank'}
                                          sx={{color: grey[400]}}>{item.label}</Link>
                                </Typography>
                            ))}
                        </Box>

                        <Box ml={'auto'}>
                            <Typography variant={'h6'} color={grey[400]}>
                                © HeroUI 2022, All rights reserved
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default React.memo(Footer);
