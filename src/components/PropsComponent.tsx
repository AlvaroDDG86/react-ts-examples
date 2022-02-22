type HeaderProps = {
    title: string
}

const Header = ({ title }: HeaderProps) => {
    return (
        <header>{ title }</header>
    )
}

const PropsComponent = () => {
    return (
        <Header title="Title uahuuu" />
    )
}

export default PropsComponent