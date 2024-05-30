import React from 'react'

interface SkillCardProps {
    title: React.ReactNode;
    icon: JSX.Element
    isActive: Boolean;
    onClick: Function;
}

const SkillCard: React.FC<SkillCardProps> = ({ onClick, title, icon, isActive }) => {
    return (
        <div
            className={`${isActive ? "active" : ""} cursor-pointer`}
            onClick={() => onClick()}
        >
            <div className={`${isActive ? "active shadow-lg overflow-hidden z-10 after:z-[-1] relative after:absolute after:transition-all after:duration-700 after:w-full after:h-full after:bg-depth-light dark:after:bg-depth-dark after:rounded-none after:scale-150" : "after:rounded-full after:scale-0"} tracking-tightest leading-none w-fit p-3 rounded-xl border border-depth-light dark:border-depth-dark text-4xl md:text-7xl flex items-center `}>
                <h5 className='pr-3'>{title}</h5>
                <i className='text-2xl'>{icon}</i>
            </div>
        </div>

    )
}

export default SkillCard