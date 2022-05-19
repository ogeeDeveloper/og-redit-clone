import Image from 'next/image'
import React from 'react'
import { ChevronDownIcon, HomeIcon, SearchIcon,  MenuIcon} from '@heroicons/react/solid'
import { PlusIcon, BellIcon, ChatIcon,  SparklesIcon, SpeakerphoneIcon, VideoCameraIcon, GlobeIcon} from '@heroicons/react/outline'
import {signIn, signOut, useSession} from "next-auth/react"

const Header = () => {
    // Read the session that was created, and also renaming data to sesion
    const {data: session} = useSession()

    // Handler to call the signIn provider
    const signInHandler= ()=>{
        signIn()
    }

    // Hnadler to call the signout provider
    const signOutHandler = ()=>{
        signOut()
    }

  return (
    //   Left side
    <div className='flex bg-white px-4 py-2 shadow-sm sticky top-0 z-50'>
        <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
            <Image objectFit='contain' src="https://links.papareact.com/fqy" layout='fill'/>
        </div>

        <div className='mx-7 flex items-center xl:min-w-[300px]'>
            <HomeIcon className='h-5 w-5'/>
            <p className='ml-2 hidden flex-1 lg:inline'>Home</p>
            <ChevronDownIcon className='h-5 w-5'/>
        </div>

        {/* Seaech box */}
        <form action="" className='flex flex-1 items-center space-x-2 rounded-sm border-gray-200 bg-gray-100 px-3 py-1'>
            <SearchIcon className='h-6 w-6 text-gray-400' />
            <input className='flex-1 bg-transparent outline-none' type="text" name="" id="" placeholder='Search Redit' />
            <button type="submit" hidden></button>
        </form>
        {/* End of left side */}

        {/* Right side */}
        <div className=' mx-5 hidden text-gray-500 items-center space-x-2 lg:inline-flex'>
            <SparklesIcon className='icon'/>
            <GlobeIcon className='icon'/>
            <VideoCameraIcon className='icon'/>
            <hr className='h-10 border border-gray-100' />
            <ChatIcon className='icon'/>
            <BellIcon className='icon'/>
            <PlusIcon className='icon'/>
            <SpeakerphoneIcon className='icon'/>
        </div>
        {/* End of right side */}

        {/* Burger Menu */}
        <div className='ml-5 flex items-center lg:hidden'>
            <MenuIcon className='icon' />
        </div>

        {/* Signin and Signout */}
        {/* Terenary operator to check if a user is logged in or not through session */}
        {session ? (
            // Logout Logics
            <div onClick={signOutHandler} className='hidden item-center cursor-pointer space-x-2 border border-gray-100 p-2 lg:flex'>
                <div className='relative h-5 w-5 flex-shrink-0'>
                    <Image src="https://links.papareact.com/23l" layout='fill' />
                </div>
                <div className='flex-1 text-xs'>
                    <p className='truncate'>Hello {session.user?.name}</p>
                    {/* <p className='text-gray-400'>Sign out</p> */}
                    <p className='text-gray-400'>2 Karma</p>
                </div>

                <ChevronDownIcon className='h-5 flex-shrink-0' />
            </div>
        ): (
            // Logout Logics
            <div onClick={signInHandler} className='hidden item-center cursor-pointer space-x-2 border border-gray-100 p-2 lg:flex'>
                <div className='relative h-5 w-5 flex-shrink-0'>
                    <Image src="https://links.papareact.com/23l" layout='fill' />
                </div>
                <p className='text-gray-400'>Sign In</p>
            </div>
        )}
    </div>
  )
}

export default Header