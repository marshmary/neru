import { useTranslation } from 'react-i18next'

const Cover = () => {
    const { t } = useTranslation()

    return (
        <div
            className="relative h-fit lg:h-screen flex flex-row-reverse"
            id="cover"
        >
            <iframe
                src="https://www.youtube.com/embed/3iIOiWX-m4k?autoplay=1&mute=1&playlist=3iIOiWX-m4k&loop=1&playsinline=1&rel=0&controls=0&modestbranding=1&iv_load_policy=1&enablejsapi=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full lg:w-auto lg:h-5/6 aspect-[21.65/9]"
            ></iframe>
            {/* Overlay for disable hover */}
            <div className="h-5/6 aspect-[21.65/9] absolute"></div>
            <div className="absolute top-3/4 right-5 lg:right-36 text-7xl lg:text-8xl uppercase">
                {t('cover.title')}
            </div>
        </div>
    )
}

export default Cover
