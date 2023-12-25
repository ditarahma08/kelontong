"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function clickOnSubmit() {
    router.push("/catalog");
  }

  return (
    <div className="border rounded-md border-neutral-300 w-96 p-10">
      <div
        className="flex flex-col gap-y-4 text-white"
      >
        <div>
          <label>Username</label>
          <input
            className="input"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            className="input"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button
          type="submit"
          className="button is-info"
          onClick={clickOnSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
