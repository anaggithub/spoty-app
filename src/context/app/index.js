import React, { useState } from "react"

const AppConsumer = React.createContext();

const AppProvider = ({ children }) => {

    const [appStorage, setStorage] = useState(
        {
            artists: [],
            favorites: {},
        }
    )

    // useEffect(() => {
    //     const myArticle = window.localStorage.getItem('myArticle');
    //     console.log(myArticle)
    //     if (myArticle) {
    //         setStorage((prevState) => ({
    //             ...prevState,
    //             article: window.JSON.parse(myArticle)
    //         }))
    //     }

    // }, [])

    return (
        <AppConsumer.Provider value={[appStorage, setStorage]}>
            {children}
        </AppConsumer.Provider>
    )
}

export default AppConsumer
export { AppProvider }