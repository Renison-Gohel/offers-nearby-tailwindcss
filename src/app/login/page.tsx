import { login, signup } from './actions'

export default function LoginPage() {
    return (
        <div className='flex flex-col justify-center items-center w-screen h-max'>
            <form>
                <div className='flex flex-row w-full justify-between items-center'>
                    <label htmlFor="email" className='text-slate-500 font-semibold'>Email:</label>
                    <input id="email" name="email" type="email" required className='bg-slate-300 rounded-lg m-2 p-2' />
                </div>

                <div className='flex flex-row w-full justify-between items-center'>
                    <label htmlFor="password" className='text-slate-500 font-semibold'>Password:</label>
                    <input id="password" name="password" type="password" required className='bg-slate-300 rounded-lg m-2 p-2' />
                </div>

                <div className='flex flex-row w-full gap-x-4 mt-5 justify-center'>
                    <button formAction={login} className='bg-orange-200 rounded-lg p-2 m-1 font-medium text-lg'>Log in</button>
                    <button formAction={signup} className='bg-orange-200 rounded-lg p-2 m-1 font-medium text-lg'>Sign up</button>
                </div>
            </form>
        </div>
    )
}