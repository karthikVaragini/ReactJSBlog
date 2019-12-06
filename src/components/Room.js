import React from 'react'
import {Link} from 'react-router-dom'

export default function Room({room,key}) {
    return (
        <div room={room} key= {key}>
            Hello from Room Component
        </div>
    )
}
