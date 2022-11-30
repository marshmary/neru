import { useTranslation } from 'react-i18next'

const News = () => {
    const { t } = useTranslation()

    return (
        <div
            className="w-11/12 lg:w-3/5 h-fit lg:h-screen self-center flex flex-col justify-center items-center gap-4"
            id="news"
        >
            <p className="text-3xl">{t('news.twitter.title')}</p>
            <div className="rounded-xl w-full h-[80%] overflow-scroll">
                <a
                    className="twitter-timeline"
                    href="https://twitter.com/nerul_oO?ref_src=twsrc%5Etfw"
                >
                    Tweets by nerul_oO
                </a>
            </div>
        </div>
    )
}

export default News
