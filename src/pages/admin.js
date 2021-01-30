import React from "react";
import Layout from '@theme/Layout';

function admin() {
    return (
        <Layout title="Hero Admin 下一代业务开发框架" style={{overflow: "none"}}>
            <div style={{height: `calc(100vh - 60px)`}}>
                <iframe src="https://admin.heroui.net/" frameBorder={0} style={{height: "100%", width: '100%'}}/>
            </div>
        </Layout>
    )
}

export default admin;