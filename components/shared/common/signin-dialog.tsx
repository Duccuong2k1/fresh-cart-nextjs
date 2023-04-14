import React from 'react'
import { Dialog, DialogProps } from '../utilities/form/dialog'
import { Input } from '../utilities/form/input'
import { Button } from '../utilities/form/button'

interface SignInFromProps extends DialogProps {

}

export function SignInDialog({ ...props }: SignInFromProps) {
    return (
        <>
            <Dialog
                maxWidth={400}
                isOpen={props.isOpen}
                onClose={props.onClose}
            >
                <div className='mb-5 text-2xl font-semibold capitalize'>Sign Up</div>
                <form>
                    <Input label='Name' type='text' name='email' placeholder='Enter your name' />
                    <Input label='Email address' type='email' name='email' placeholder='Enter email address' />
                    <Input label='Password' type='password' name='password' placeholder='Enter password' />
                    <p className='text-sm text-gray-500'>By Signup, you agree to our Terms of Service & Privacy Policy</p>
                    <Button
                        text="Sign Up"
                        className={"text-white bg-green-500 my-4"}
                    />
                    <div className='flex items-center justify-center gap-2 text-gray-500'>Already have an account ? <Button className='px-0 font-semibold text-green-500 hover:shadow-none ' text="Sign in" /></div>
                </form>


            </Dialog>
        </>
    )
}