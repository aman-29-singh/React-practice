import User from "./User"

function Table() {
    const userdata = [
        {
            ID: "1",
            Name: "Aman",
            Email: "amansingh@gmail.con",
            city: "mumbai"
        },

        {
            ID: "2",
            Name: "mohit",
            Email: "mohitsingh@gmail.con",
            city: "jalgaon"
        },

        {
            ID: "3",
            Name: "farhan",
            Email: "farhansingh@gmail.con",
            city: "pune"
        }
    ]
    return (
        <div>
            {userdata.map((data1)=>(
                <User  key={data1.ID}  user1={data1}/>
            ))}
            <h1>this is a table data with using of loop in jsx</h1>
            <table border={2}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>city</th>

                    </tr>
                </thead>

                <tbody>
                    {userdata.map((user) => (
                        <tr>
                            <td>{user.ID}</td>
                            <td>{user.Name}</td>
                            <td>{user.Email}</td>
                            <td>{user.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h1>this is a table data without using of loop in jsx</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>city</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Aman</td>
                        <td>aman@gmail.com</td>
                        <td>mumbai</td>



                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Abhay</td>
                        <td>abhbay@gmail.com</td>
                        <td>delhi</td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>mohit</td>
                        <td>mohit@gmail.com</td>
                        <td>gurgaon</td>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table