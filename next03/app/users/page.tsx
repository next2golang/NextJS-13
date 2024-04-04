import React from 'react'
import Link from 'next/link'
import getAllUsers from '@/lib/getAllUsers'

export default async function UsersPage() {
    const usersData: Promise<User[]> = getAllUsers()
    const users = await usersData

    console.log("Hello")

    const content = (
        <section>
            <h2>
                <Link href="/">Back To Home</Link>
            </h2>
            <br />
            {users.map(user => {
                return (
                    <>
                        <p key={user.id}>
                            <Link href={`/users/${user.id}`}>
                                {user.name}
                            </Link>
                        </p>
                    </>
                )
            })}
        </section>
    )

    return content
}
