import React from 'react'
import style from '@/styles/Home.module.css'
import TopBanner from '@/components/TopBanner'
import PageWrapper from '@/layouts/PageWrapper'
import Cover from '@/components/Cover'
import About from '@/components/About'
import Footer from '@/components/Footer'
import News from '@/components/News'

const Home = () => {
    return (
        <PageWrapper>
            <div
                className={`${style.bg} w-full min-h-screen flex flex-col gap-10`}
            >
                <TopBanner />
                <About />
                <Cover />
                <News />
                <Footer />
            </div>
        </PageWrapper>
    )
}

export default Home
