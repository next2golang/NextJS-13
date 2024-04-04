import React from 'react'
import { Suspense } from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import getUser from '@/lib/getUser'
import getUserPosts from '@/lib/getUserPosts'
import getAllUsers from '@/lib/getAllUsers'
import UserPosts from './components/UserPosts'

type Params = {
    params: {
        userId: string
    }
}

export async function generateMetadata({ params: { userId }}: Params):Promise<Metadata> {
    const userData: Promise<User> = getUser(userId)
    const user: User = await userData

    if(!user.name) {
        return { title: "user not Found" }
    }

    return {
        title: user.name,
        description: `This is the page of ${user.name}`
    }

}

export default async function UserPage({ params: { userId } }: Params) {
    const userData: Promise<User> = getUser(userId)
    const userPostsData: Promise<Post[]> = getUserPosts(userId)

    // const [user, userPosts] = await Promise.all([userData, userPostsData])
    const user:User = await userData

    if (!user.name) return notFound()

    return (
        <>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>
                <UserPosts promise={userPostsData} />
            </Suspense>
            
        </>
    )
}

export async function generateStaticParams() {
    const usersData:Promise<User[]> = getAllUsers()
    const users = await usersData

    return users.map(user => ({
        userId: user.id.toString()
    }))
}
