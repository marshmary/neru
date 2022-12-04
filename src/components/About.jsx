import CHARACTER from '@/assets/standing.webp'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const About = () => {
    const { t } = useTranslation()

    return (
        <div
            className="h-fit lg:h-screen w-4/5 self-center relative py-4 lg:py-20"
            id="about"
        >
            <motion.div
                className="relative z-10"
                initial={{ opacity: 0, x: '-10%' }}
                whileInView={{ opacity: 1, x: '0%' }}
                transition={{
                    type: 'spring',
                    stiffness: 80,
                    duration: 2,
                    delay: 0.3,
                }}
            >
                <p className="text-3xl mb-7">{t('profile.title')}</p>
                <div className="grid grid-cols-3 lg:grid-cols-5 gap-y-5 lg:gap-y-7 relative z-10">
                    <p className="font-bold">{t('profile.name.title')}</p>
                    <p className="col-span-4">{t('profile.name.value')}</p>

                    <p>{t('profile.birthday.title')}</p>
                    <p className="col-span-4">{t('profile.birthday.value')}</p>

                    <p>{t('profile.like.title')}</p>
                    <p className="col-span-4">{t('profile.like.value')}</p>

                    <p>{t('profile.dislike.title')}</p>
                    <p className="col-span-4">{t('profile.dislike.value')}</p>

                    <p>{t('profile.story.title')}</p>
                    <p className="col-span-4 whitespace-pre-line">
                        {t('profile.story.value')}
                    </p>

                    <p>{t('profile.illustrator.title')}</p>
                    <p className="col-span-4">
                        <a
                            href={`${t('profile.illustrator.link')}`}
                            target="_blank"
                            className="underline"
                        >
                            {t('profile.illustrator.value')}
                        </a>
                    </p>
                </div>
            </motion.div>
            <motion.img
                initial={{
                    opacity: 0,
                    x: '10%',
                }}
                whileInView={{
                    opacity: 1,
                    x: '0%',
                }}
                transition={{
                    type: 'spring',
                    stiffness: 80,
                    duration: 2,
                    delay: 0.3,
                }}
                className="absolute -right-10 lg:-right-40 -top-16 lg:-top-40"
                src={`${CHARACTER}`}
            />
        </div>
    )
}

export default About
