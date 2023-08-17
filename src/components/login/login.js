import axios from "axios"
import { useState } from "react"

export default function Login() {
    const [username, setUsername] = useState()
    console.log(username)
    const [password, setPassword] = useState()
    console.log(password)

    function handleSubmit() {
        axios
            .post('/https://localhost:8000/login', {
                username: username,
                password: password
            }
            )
            .then(res => {
                console.log('res', res.data);
            })
            .catch(err => {
                console.log('error in request', err);
            });

    }

    return (
        <div className='bg-Back h-screen '>
            <div className="flex justify-center items-center pt-8">
                <img src='3.jpg '
                    className='h-18 mt-10'
                ></img>
            </div>
            <div className='flex justify-center pt-16 pb-76 '>

                <div className='bg-white border-4 border-white rounded-lg p-9 h-96 '>
                    <div>
                        <div>
                            <input type='text' className="h-8 w-80 border-b-2 border-gray-200 mt-3 " value={username} onChange={(e) => {
                                setUsername(e.target.value)
                            }} placeholder='Username' name='Login'></input>

                        </div>
                        <div>
                            <input type='password' className=" h-8 w-80 border-b-2 border-gray-200 mt-16" value={password} onChange={(e) => {
                                setPassword(e.target.value)
                            }} placeholder='Password' name='Password' ></input>


                        </div>
                        <div>
                            <p className='text-blue-400 text-[14px] mt-10'>Forget Password</p>
                        </div>
                        <div>
                            <button onClick={handleSubmit} className='h-12 w-80 text-white bg-sky-600 hover:bg-sky-700 mt-10 rounded-lg mt-12' >
                                LOGIN</button>

                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}
