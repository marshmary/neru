import Nav from '@/components/Nav'

const PageWrapper = ({ children, props }) => {
    return (
        <div {...props}>
            <Nav />
            {children}
        </div>
    )
}

export default PageWrapper
