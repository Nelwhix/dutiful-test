import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
    const date = new Date()

    return <>
        <header className='grid grid-cols-4'>
            <img className='mt-5 ml-8' src={"/logo.svg"} />

            <nav className="hidden md:flex col-span-2 justify-between mt-9 text-lg">
                <span>Business Directory</span>
                <span>Features</span>
                <span>Pricing</span>
                <span>Blog</span>
            </nav>

            <div className='hidden md:block mt-9 ml-24'>
               <Link className='py-4 px-12 text-primary font-semibold' to="/login"> Login </Link>
               <Link className="py-4 px-12 border-2 border-primary rounded-md text-lg text-primary" to="/register"> Sign up </Link>
            </div>
        </header>
        <Outlet />

        <footer className='bg-secondary md:px-32 text-white md:py-16'>
            <div className='hidden md:grid grid-cols-4 text-weirdpurple'>
                <div>
                    <h3 className='text-white text-lg mb-4'>Company</h3>
                    <p>About</p>
                    <p>Contact Us</p>
                    <p>FAQs</p>
                </div>
                <div>
                    <h3 className='text-white text-lg mb-4'>Quick Links</h3>
                    <p>Find Services</p>
                    <p>Pricing & Plans</p>
                    <p>List your business</p>
                </div>
                <div>
                    <h3 className='text-white text-lg mb-4'>Resources</h3>
                    <p>Blog</p>
                    <p>Affiliate Program</p>
                </div>
                <div>
                    <h3 className='text-white text-lg mb-4'>More From Dutiful</h3>
                    <p>Dutiful jobs</p>
                </div>
            </div>

            <hr className='text-weirdpurple mt-12 mb-8 hidden md:block' />

            <div className='w-full hidden md:flex justify-between'>
                <div className='flex justify-between w-1/4'>
                    <span className="font-semibold text-lg">Follow Us</span>
                    <img src={"/facebook.svg"} />
                    <img src={"/instagram.svg"} />
                    <img src={"/twitter.svg"} />
                    <img src={"/youtube.svg"} />
                    <img src={"/linkedin.svg"} />
                </div>

                <div className='flex justify-between w-1/4'>
                    <span className="font-semibold text-lg">Download the app</span>
                    <img src={"/apple.svg"} />
                    <img src={"/playstore.svg"} />
                </div>
            </div>

            <hr className='text-weirdpurple mt-12 mb-8 hidden md:block' />

            <div className='flex justify-between w-1/2'>
                <p>&copy; {date.getFullYear()} Dutiful®</p>

                <div className="text-weirdpurple hidden  md:flex justify-between">
                    <p>Terms of Service</p>
                    <p className='mx-8'>Privacy Policy</p>
                    <p>Disclaimer</p>
                </div>
            </div>
        </footer>
    </>
}