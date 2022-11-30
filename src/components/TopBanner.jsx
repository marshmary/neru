import character from '@/assets/sitting.webp'
import style from '@/styles/TopBanner.module.css'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useWindowDimensions } from '@/utils/useWindowDimensions'
import { TABLET_BREAKPOINT } from '@/utils/constants'

const TopBanner = () => {
    const { t } = useTranslation()
    const { width } = useWindowDimensions()

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4" id="top">
            <div className="order-last lg:order-first">
                <motion.img
                    initial={{ opacity: 0, x: '-10%' }}
                    whileInView={{ opacity: 1, x: '0%' }}
                    transition={{
                        type: 'spring',
                        stiffness: 80,
                        duration: 2,
                        delay: 0.3,
                    }}
                    src={`${character}`}
                    className="object-cover h-screen"
                />
            </div>
            <motion.div
                className="absolute top-1/2 -translate-y-1/2 lg:translate-y-0 left-2/3 lg:static flex flex-col gap-4 justify-center items-center"
                initial={{
                    opacity: 0,
                    x: '10%',
                    y: width > TABLET_BREAKPOINT ? 0 : '-50%',
                }}
                whileInView={{
                    opacity: 1,
                    x: '0%',
                    y: width > TABLET_BREAKPOINT ? 0 : '-50%',
                }}
                transition={{
                    type: 'spring',
                    stiffness: 80,
                    duration: 2,
                    delay: 0.3,
                }}
            >
                <p
                    className={`text-lg lg:text-3xl bg-slate-50 ${style.vericaltext}`}
                >
                    {t('quote')}
                </p>
                <p className="bg-slate-50 p-1">{t('quoteBy')}</p>
            </motion.div>
        </div>
    )
}

export default TopBanner
