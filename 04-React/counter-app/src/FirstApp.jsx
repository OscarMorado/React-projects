// import { Fragment } from "react"
import PropTypes from 'prop-types'

// const testFunction = () => {
//     if(navigator.userAgent.indexOf("Chrome")){
//         return "It looks like you use Chrome!"
//     }
// }



export const FirstApp = ({title, subtitle, name}) => {

    return( 
        <>  {/* Sinónimo de Fragmento, evita el tener que realizar la importación */}
            {/* <h3>{JSON.stringify(testFunction())}</h3> No se pueden mandar objetos, por tanto, se requiere usar una conversión*/}
            <h1 data-testid="test-title">{title}</h1>
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired,
    name: 'A name',
}

// FirstApp.defaultProps = {
//     title: 'No title',
//     subTitle: 'No sub either',
//     name: 'Welp',
// }
