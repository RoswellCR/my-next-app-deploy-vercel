import { useRouter } from "next/router"
import Link from "next/link"

const style = {
    color: '#0070f3',
    textDecoration: 'underline'
}


export const ActiveLink = ({text, href}) => {
  const {asPath} = useRouter()

    return (
    // legacyBehavior: a partir de next 13 Link puede renderizar como a, por lo que intentar usar a como hijo es invalido
    <Link legacyBehavior href={href}>
        <a style={ asPath=== href ? style : null } >{text}</a>
    </Link>
  )
}

