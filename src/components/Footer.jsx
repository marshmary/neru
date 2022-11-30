import style from '@/styles/Footer.module.css'

const Footer = () => {
    return (
        <div className="flex justify-center items-center flex-col py-10 bg-white bg-opacity-40">
            <div className={`${style.name} text-7xl`}>Neru</div>
            <div>
                <a
                    href="https://github.com/marshmary"
                    target="_blank"
                    className="underline"
                >
                    @marshmary
                </a>
            </div>
        </div>
    )
}

export default Footer
