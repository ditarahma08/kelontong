'use client'
import { useState } from "react"

export default function Login() {
    const [username, setUsername] = useState('')

    return (
        <div className="border rounded-md border-neutral-300 flex flex-col gap-y-4 w-96 p-10">
            {/* <div className="flex justify-between">
                <label>Username</label>
                <input type="text" className="w-52" value={username}/>
            </div>
            <div className="flex justify-between">
                <label>Password</label>
                <input type="password" className="w-52"/>
            </div>

            <button>Login</button> */}
            <form>
                <label>Username</label>
                <input className="input" type="text"/>
            </form>
        </div>
    )
}