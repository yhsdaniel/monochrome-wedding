import React from 'react'

export default function GenerateAvatar({ name }) {
    function generateBackground(name) {
        let hash = 0;
        let i;

        for (i = 0; i < name.length; i += 1) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        // name.charCodeAt() return an int between 0 and 65535
        // left shift (<<)  operator moves to left by number of specified 
        // bites after <<. The whole for loop will create a color hash 
        // based on username length
        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }

        return color;
    }

    let color = generateBackground(name)
    const customStyle =
    {
        background: color,
    }

    return (
        <div className={`w-7 h-7 flex justify-center items-center rounded-full text-white bg-[${color}]`} style={customStyle}>
            <img src={`https://ui-avatars.com/api/?name=${name}&background=random`} alt="avatar" className='rounded-full' />
        </div>
    )
}
