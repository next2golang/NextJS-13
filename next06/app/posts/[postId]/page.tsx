import React from 'react'
import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import { getPostData } from '@/lib/posts'
import { notFound } from 'next/navigation'
import getFormattedDate from '@/lib/getFormattedDate'

export async function generateStaticParams() {
    const posts = getSortedPostsData()
    return posts.map(post => ({
        postId: post.id
    }))
}

export async function generateMetadata({ params }: { params: { postId: string } }) {
    const posts = getSortedPostsData()
    const { postId } = params
    const post = posts.find(post => post.id === postId)

    if (!post) {
        return {
            title: "Post Not Found"
        }
    }

    return {
        title: post.title
    }
}

export default async function Post({ params }: { params: { postId: string } }) {

    const posts = getSortedPostsData()
    const { postId } = params

    if (!posts.find(post => post.id === postId)) {
        return notFound()
    }

    const { title, date, contentHTML } = await getPostData(postId)

    const pubDate = getFormattedDate(date)

    return (
        <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
            <h1 className="text-3xl mt-4 mb-0">
                {title}
            </h1>
            <p className="mt-0">
                {pubDate}
            </p>
            <article>
                <section dangerouslySetInnerHTML={{ __html: contentHTML}} />
                <p>
                    <Link href="/">Back to Home</Link>
                </p>
            </article>
        </main>
    )
}
