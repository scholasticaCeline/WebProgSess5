import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
          <p className="mt-2 text-gray-600">Hiiii, sign here pls (no scam trust)</p>
        </div>

        <SignedOut>
          <div className="space-y-4">
            <SignInButton mode="modal">
              <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Sign In
              </button>
            </SignInButton>
            <div className="text-center">
              <Link href="/sign-up" className="text-blue-600 hover:text-blue-500 text-sm">
                Don&apos;t have an account? Sign up
              </Link>
            </div>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="text-center space-y-4">
            <p className="text-gray-600">You are signed in!</p>
            <UserButton afterSignOutUrl="/" />
            <div>
              <Link href="/dashboard" className="text-blue-600 hover:text-blue-500">
                Go to Dashboard
              </Link>
            </div>
          </div>
        </SignedIn>
      </div>
    </div>
  )
}
