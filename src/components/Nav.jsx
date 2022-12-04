import { TABLET_BREAKPOINT } from '@/utils/constants'
import { useWindowDimensions } from '@/utils/useWindowDimensions'
import Icon from './Icon'
import { Popover, Transition } from '@headlessui/react'
import { Fragment, useRef, useState } from 'react'
import { usePopper } from 'react-popper'
import LngSelector from './LngSelector'
import { motion, useCycle } from 'framer-motion'
import { useOutsideClick } from '@/utils/useOutsideClick'

const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
)

const Nav = () => {
    const navOptions = [
        {
            label: 'TOP',
            isIcon: false,
            to: '#top',
        },
        {
            label: 'ABOUT',
            isIcon: false,
            to: '#about',
        },
        {
            label: 'COVER',
            isIcon: false,
            to: '#cover',
        },
        {
            label: 'NEWS',
            isIcon: false,
            to: '#news',
        },
        {
            label: 'youtube',
            isIcon: true,
            to: 'https://www.youtube.com/@neruoO',
        },
        {
            label: 'twitter',
            isIcon: true,
            to: 'https://twitter.com/nerul_oO',
        },
        {
            label: 'bilibili',
            isIcon: true,
            to: 'https://space.bilibili.com/432194062',
        },
    ]

    const { width } = useWindowDimensions()

    // const [referenceElement, setReferenceElement] = useState(null)
    // const [popperElement, setPopperElement] = useState(null)
    // let { styles, attributes } = usePopper(referenceElement, popperElement)

    return (
        <div className="fixed z-20 top-8 lg:top-16 right-4 lg:right-16">
            {width > TABLET_BREAKPOINT ? (
                // Desktop nav
                <div className=" flex gap-5 flex-row">
                    {navOptions.map((option, index) =>
                        !option.isIcon ? (
                            <a
                                key={index}
                                href={option.to}
                                className="cursor-pointer"
                            >
                                {option.label}
                            </a>
                        ) : (
                            <a
                                key={index}
                                href={option.to}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon icon={['fab', option.label]} size="xl" />
                            </a>
                        )
                    )}

                    <LngSelector />
                </div>
            ) : (
                // Mobile nav
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                // ref={setReferenceElement}
                                className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex justify-center items-center rounded-full bg-white shadow-md px-3 py-3 text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                            >
                                <motion.nav
                                    initial={false}
                                    animate={open ? 'open' : 'closed'}
                                >
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                    >
                                        <Path
                                            variants={{
                                                closed: {
                                                    d: 'M 2 2.5 L 20 2.5',
                                                },
                                                open: {
                                                    d: 'M 3 16.5 L 17 2.5',
                                                },
                                            }}
                                        />
                                        <Path
                                            d="M 2 9.423 L 20 9.423"
                                            variants={{
                                                closed: { opacity: 1 },
                                                open: { opacity: 0 },
                                            }}
                                            transition={{ duration: 0.1 }}
                                        />
                                        <Path
                                            variants={{
                                                closed: {
                                                    d: 'M 2 16.346 L 20 16.346',
                                                },
                                                open: {
                                                    d: 'M 3 2.5 L 17 16.346',
                                                },
                                            }}
                                        />
                                    </svg>
                                </motion.nav>
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                                // ref={setPopperElement}
                                // style={styles.popper}
                                // {...attributes.popper}
                            >
                                <Popover.Panel className="absolute h-fit left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-[90%] transform px-4 sm:px-0 lg:max-w-3xl">
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                        <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                            {navOptions.map((item) => (
                                                <a
                                                    key={item.label}
                                                    href={item.to}
                                                    className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-opacity-50"
                                                    target={
                                                        !item.isIcon
                                                            ? '_self'
                                                            : '_blank'
                                                    }
                                                >
                                                    <div className="ml-4 inline-flex gap-4">
                                                        {!item.isIcon ? (
                                                            <p className="text-sm font-medium text-gray-900">
                                                                {item.label}
                                                            </p>
                                                        ) : (
                                                            <>
                                                                <Icon
                                                                    icon={[
                                                                        'fab',
                                                                        item.label,
                                                                    ]}
                                                                    size="xl"
                                                                />
                                                                <span className="uppercase">
                                                                    {item.label}
                                                                </span>
                                                            </>
                                                        )}
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                        <div className="bg-gray-50 p-4">
                                            <div className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                                                <LngSelector />
                                            </div>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            )}
        </div>
    )
}

export default Nav
