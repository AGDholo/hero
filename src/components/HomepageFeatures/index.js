import React from 'react';
import Link from "@docusaurus/Link";

const latestNews = [
    {
        title: "开发环境部署指南",
        url: "/docs/development-guide/base-software/chocolatey"
    },
    {
        title: "ThinkPHP5.1 入门",
        url: "/docs/thinkphp5.1-primer/chapter-1/1-1-introduction"
    },
    {
        title: "Vuetify2 技巧",
        url: "/docs/vuetify2-tricks/development/local-deployment-documentation"
    }
]

const apps = [
    {
        title: "Fiapp.pro",
        url: "https://fiapp.pro",
        description: "专业先进的 AI 大数据分析，任何领域任何数据我们都可以捕获并分析。"
    },
    {
        title: "Singularity Robotics",
        description: "专注于智能量化机器人的创新公司，提供高效、可靠的量化机器人，帮助客户在大数据领域获得更好回报。",
    },
    {
        title: "Steamhub",
        description: "智能游戏推荐应用程序，利用自动归集游戏评价和反馈的功能，为用户提供高度个性化的游戏推荐，并提供价格追踪和预测功能，帮助用户更好地进行购买决策。",
    },
]

export default function HomepageFeatures() {
    return (
        <>
            <div className="py-16 container">
                <div className="space-y-8">
                    <h2 className="text-5xl font-black underline underline-offset-8  decoration-blue-500">
                        最新消息
                    </h2>

                    <p className="font-bold text-gray-500 leading-7  w-1/2 text-lg">
                        我们会定期更新各种领域的最新资讯、行业动态和技术趋势，让您随时掌握最新信息。我们的内容涵盖了科技、商业、技术等多个领域，我们的编辑团队会为您筛选和整理最有价值的信息，让您不仅了解潮流、掌握趋势，更能获得启发和灵感。
                    </p>

                    <div className="flex overflow-x-hidden space-x-8 w-full pb-4 py-1">
                        {
                            latestNews.map((item, index) => (
                                <Link to={item.url}
                                      className={index == 0 ? "hover:no-underline hover:text-inherit shadow-lg flex-shrink-0 card p-8 bg-base-100 w-2/5 cursor-pointer" : "outline outline-gray-200 bg-transparent flex-shrink-0 card p-8  w-2/5 cursor-pointer hover:no-underline hover:text-inherit"}>
                                    <div className="card-body space-y-4">
                                        <h2 className="text-8xl text-gray-200 font-extrabold">
                                            0{index + 1}
                                        </h2>
                                        <p className="font-extrabold text-5xl">
                                            {item.title}
                                        </p>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>

                <div className="mt-28  bg-transparent flex justify-center w-full">
                    <div className="w-full space-y-8">
                        <div className="text-center  space-y-4 w-full">
                            <h2 className="text-5xl font-black">
                                服务平台
                            </h2>

                            <div className="justify-self-center">
                                <p className="font-bold text-gray-500 leading-7 text-lg ">
                                    我们的服务覆盖多个行业和领域，由专业人士组成的团队，为您提供定制化的服务和解决方案，帮助您实现您的项目目标。
                                </p>
                            </div>

                        </div>

                        <div className="stack  w-full">
                            {Array.from({length: 3}).map((_, idx) => (
                                <div className="card  w-full">
                                    <div className="flex align-middle p-24 gap-16">
                                        <div className="shadow-2xl">
                                            <img src={idx === 0 ? "/img/TinySnap-2023-07-30-14.50.38.png" : ""}
                                                 className="max-w-3xl"/>
                                        </div>

                                        <div className="space-y-6">
                                            <h2 className="text-4xl font-extrabold">
                                                <span
                                                    className=" bg-clip-text bg-gradient-to-l from-sky-500 via-fuchsia-500 to-yellow-500 text-transparent">
                                                    Darc
                                                </span> - Decentralized Autonomous Regulated Corporation
                                            </h2>

                                            <p className="font-bold text-lg text-gray-500">
                                                From accountability and transparency to innovative decision-making, DARC
                                                is
                                                revolutionizing the way we approach corporate structures. Join the
                                                movement
                                                and discover the power of decentralized autonomous corporations.
                                            </p>

                                            <a className="btn btn-neutral btn-lg hover:text-white hover:no-underline"
                                               href={"https://darc.app"} target={"_blank"}>
                                                了解更多
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-neutral-800 py-36 text-white space-y-16">
                <div className="container space-y-4">
                    <h2 className="text-5xl font-black">
                        我们的生态
                    </h2>

                    <p className="font-bold leading-7 text-lg   w-3/5 text-white/70">
                        我们的生态系统是一个旨在为所有参与者带来更多机会和价值的开放、共享和协作的平台。作为一个开放的平台，我们欢迎各种声音和想法，鼓励各方参与和贡献，共同推动技术和业务发展。
                    </p>
                </div>

                <div className="container flex overflow-x-hidden space-x-8 w-full pb-4 py-1">
                    {
                        apps.map((item, index) => (
                            <Link to={item.url}
                                  className={index == 0 ? "hover:no-underline hover:text-black shadow-lg flex-shrink-0 text-black card p-8 bg-white w-2/5 cursor-pointer" : " bg-transparent flex-shrink-0 card p-8  w-2/5 cursor-pointer hover:no-underline hover:text-inherit"}>
                                <div className="card-body space-y-4">
                                    <h2 className="text-5xl  font-extrabold">
                                        {item.title}
                                    </h2>
                                    <p className="font-extrabold text-lg">
                                        {item.description}
                                    </p>

                                    <div>
                                        <a className="btn btn-neutral mt-5 btn-lg hover:text-white hover:no-underline w-1/3"
                                           href={item.url} target={"_blank"}>
                                            {item.url ? "了解更多" : "敬请期待"}
                                        </a>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div className="bg-gradient-to-b from-gray-200 via-slate-100 to-stone-50 py-16">
                <div className="container grid grid-cols-2">
                    <h2 className="text-5xl font-black lg:max-w-sm">
                        为您的项目带来加速支持
                    </h2>

                    <div className="space-y-4">
                        <p className="font-bold text-gray-500 leading-7  text-lg lg:max-w-lg">
                            我们致力于为用户提供最好的产品和服务，并通过您的反馈和支持来不断改进和提高我们的服务质量。
                        </p>
                        <a className="btn btn-lg btn-neutral hover:no-underline hover:text-white"
                           href="mailto:agdholo@outlook.com">
                            快速联系我们
                        </a>

                    </div>

                </div>
            </div>
        </>
    );
}
