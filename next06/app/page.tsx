import Posts from "./components/Posts"

export default function Home() {
  return (
    <main>
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👏&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Dave</span>
        </span>
      </p>
      <Posts />
    </main>
  )
}
