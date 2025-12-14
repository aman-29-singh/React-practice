function UserListing({ apidata, loading1 }) {
    return (
        <div>
            <h1>UserListing page</h1>
            <ul style={{
                backgroundColor: "brown", display: "flex", padding: "10px",
                justifyContent: "space-around", margin: 0, color: "yellow"
            }}>
                <li>Name</li>
                <li>Age</li>
                <li>Email</li>
            </ul>

            {
                !loading1?//means agar loading nhi hua toh ye <ul> list chalega it is loading1 state
                apidata && apidata.map((data) => (


                    <ul style={{
                        border: "solid", padding: "10px", backgroundColor: "skyblue", display: "flex",
                        justifyContent: "space-around", margin: "0"
                    }}>

                        <li>{data.firstName}</li>
                        <li>{data.age}</li>
                        <li>{data.email}</li>
                        {/* <li>{data.lastName}</li> */}
                        {/* <li>{data.username}</li> */}
                        {/* <li>{data.weight}</li> */}
                        {/* <li>{data.eyeColor}</li> */}
                    </ul>
                )) : <h1>Loading Datta ....</h1>
            }
        </div>
    )
}

export default UserListing;