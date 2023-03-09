import React from "react"

function DarkMode(p) {

    const [darkMode, setDarkMode] = React.useState({
        isDarkMode: false
    })

    function toggle(){
        setDarkMode(prev => {
            return{
                isDarkMode: !prev.isDarkMode,
                backgroundColor: prev.isDarkMode ? "black" : "white",
            }
        })
    }
    return(
        <div className="">
            <button onClick={toggle}>dark mode</button>
        </div>
    )
}

export default DarkMode;