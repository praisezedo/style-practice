export default function ProfileCard() {
    return (
        <div className="min-h-screen px-4 md:px-0  flex items-center justify-center">
            <div className="border  border-cyan-400 bg-slate-950 p-7 w-full md:w-80 rounded-lg">
            <h1 className="text-xl md:text-3xl my-2 text-center font-bold text-cyan-400">Praise Innocent</h1>
            <p className="my-2 font-normal text-center  text-gray-300 text-sm">web developer building AI enabled softwares</p>
            <p className="hidden md:block my-2 text-center text-gray-50 font-thin text-xs leading-relaxed">My name is innocent praise , i am a software engineering student and web developer interested in building AI enabled software.</p>
            <button className="block mx-auto bg-cyan-800 hover:bg-cyan-900 active:bg-cyan-950 transition duration-200 focus:ring-2 focus:ring-cyan-300  p-2 rounded-md text-white">Contact Me</button>
            </div>
        </div>
    )
}