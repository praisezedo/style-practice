import { skills } from "../constants/skills"

export default function SkillsCard() {
return (
    <div className="flex justify-center items-stretch px-4">
     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
        skills.map((skill) => (
            <div key={skill.id} className="hover:scale-105 transition duration-200 flex justify-center items-center flex-col p-4 rounded-lg bg-slate-900">
                <h1 className="font-extrabold text-cyan-400 text-2xl">{skill.name}</h1>
                <p className="text-cyan-400 text-sm">{skill.description}</p>
            </div>
        ))
        }
</div>
    </div>
)
}