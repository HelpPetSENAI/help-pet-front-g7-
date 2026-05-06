import { useEffect } from "react"

export const Fetch = async () => {
    const response = await fetch("http://localhost:8080/notifications")
    const data = await response.json()
    console.log(data)
}

useEffect(() => {



},);