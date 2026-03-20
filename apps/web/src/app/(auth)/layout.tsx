import Image from 'next/image';

export default function Layout({
    children
}: { children: React.ReactNode }) {
    return (
        <div className="w-full h-screen bg-[#A5BEF3] bg-[url('/login_bg.svg')] bg-cover bg-center bg-no-repeat flex items-center justify-center justify-center">
            <Image src="/synaptex_dark.svg" alt="Synaptex" width={150} height={50} className='absolute top-12 left-18' />
            <div className="bg-[#FFFFFF] w-lg h-fit rounded-3xl px-12 py-16">
                {children}
            </div>
        </div>
    )
}
