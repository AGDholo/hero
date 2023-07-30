import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <div className="relative">
            <div style={{}}
                 className=" hero text-center bg-gradient-to-b from-gray-50 via-slate-100 to-stone-200 ">
                <div className="space-y-5  py-36 z-10">
                    <h1 className="text-8xl font-extrabold">
                        <span className="text-sky-950">Your</span>
                        <span
                            className={" text-transparent text-9xl bg-clip-text bg-gradient-to-r from-sky-500 via-fuchsia-500 to-yellow-500"}> Hero UI</span>
                    </h1>

                    <p className="max-w-3xl  leading-7 text-lg font-bold text-accent-content/80">
                        HeroUI
                        是一个综合性平台，我们致力于为您提供一站式的服务，从网页模板到软件开发解决方案，从书籍教程到咨询服务，我们都有最佳的解决方案，满足您各种需求。我们的服务遍布各种行业和领域，我们的客户包括初创公司、中小企业和大型企业，我们的目标是为客户提供最优质的服务和最大的价值。
                    </p>
                </div>
            </div>
            <div className="absolute top-0 left-0 z-[1]">
                <div className=" bg-transparent p-28">
                    <div className="bg-purple-950/50 w-10 h-10 shadow-2xl shadow-purple-500 rounded"></div>
                    <div className="bg-purple-500/50 w-10 h-10 shadow-2xl shadow-purple-500 rounded ml-10"></div>
                </div>
            </div>
            <div className="absolute top-0 right-0 z-[1]">
                <div className=" bg-transparent p-16">
                    <div className="bg-green-950/50 w-10 h-10 shadow-2xl shadow-green-500 rounded"></div>
                    <div className="bg-green-500/50 w-10 h-10 shadow-2xl shadow-green-500 rounded ml-10"></div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 z-[1]">
                <div className=" bg-transparent pb-16 pl-64">
                    <div className="bg-cyan-500/50 w-10 h-10 shadow-2xl shadow-cyan-500-500 rounded"></div>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 z-[1]">
                <div className=" bg-transparent pb-16 pr-64">
                    <div className="bg-blue-500/50 w-10 h-10 shadow-2xl shadow-blue-500 rounded"></div>
                </div>
            </div>
            <div
                className="absolute top-0 left-0 z-[0]  w-full h-full overflow-hidden grid grid-cols-4 gap-0">
                {
                    Array.apply(null, Array(100)).map(() => (
                        <div className="border border-t-gray-50/5 w-full h-36 border-l-gray-50">
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`专业的网站业务解决方案 ｜ ${siteConfig.title}`}
            description="HeroUI 是一个综合性平台，我们致力于为您提供一站式的服务，从网页模板到软件开发解决方案，从书籍教程到咨询服务，我们都有最佳的解决方案，满足您各种需求。我们的服务遍布各种行业和领域，我们的客户包括初创公司、中小企业和大型企业，我们的目标是为客户提供最优质的服务和最大的价值。">
            <div className="bg-gray-50">
                <HomepageHeader/>
                <main>
                    <HomepageFeatures/>
                </main>
            </div>
        </Layout>
    );
}
