import { useSession } from "next-auth/react"
import Avatar from "./Avatar"

const PostBox = () => {
    //   Get the user login session
    const {data:session} = useSession()
  return (
    <div className="flex items-center space-x-3">
        {/* Avatar */}
        <Avatar />
        <input disabled={!session} type="text" className="flex-1 rounded-md bg-gray-50 p2 pl-2 outline-none" placeholder={session ? "Create a new post by just entering a title": "You must be logged in to post"} />
    </div>
  )
}

export default PostBox