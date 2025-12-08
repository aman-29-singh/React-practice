import { useState } from "react"

function Card() {
    const [display, setDisplay] = useState(true)
    const style = {
        backgroundColor: "slategray",
        color: "red"
    }
    return (
        <div>
        <div style={{ display: "flex" }}>
            <div style={{ margin: "10px" }}>
                <img style={{ width: "200px" }} src="https://png.pngtree.com/png-vector/20220210/ourmid/pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image_4384273.png" />
                <div 
                style={display ? style : null}>
                    <p>this is aman</p>
                    <p>study</p>
                </div>
            </div>

            <div style={{ margin: "10px" }}>
                <img style={{ width: "200px" }} src="https://png.pngtree.com/png-vector/20220210/ourmid/pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image_4384273.png" />
                <div style={display ? style : null}>
                    <p>this is aman</p>
                    <p>study</p>
                </div>
            </div>
            <div style={{ margin: "10px" }}>
                <img style={{ width: "200px" }} src="https://png.pngtree.com/png-vector/20220210/ourmid/pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image_4384273.png" />
                <div style={display ? style : null}>
                    <p>this is aman</p>
                    <p>study</p>
                </div>
            </div>

            <div style={{ margin: "10px" }}>
                <img style={{ width: "200px" }} src="https://png.pngtree.com/png-vector/20220210/ourmid/pngtree-avatar-bussinesman-man-profile-icon-vector-illustration-png-image_4384273.png" />
                <div style={display ? style : null}>
                    <p>this is aman</p>
                    <p>study</p>
                </div>
            </div>

        </div>
        <button onClick={()=> setDisplay(!display)}>change view</button>
        </div>
    )
}

export default Card