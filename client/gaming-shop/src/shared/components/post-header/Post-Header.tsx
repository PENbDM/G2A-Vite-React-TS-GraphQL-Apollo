
const NAV_LINKS = [
    { label: 'Gaming', icon: 'gaming' },
    { label: 'Software', icon: 'software' },
    { label: 'Subscriptions', icon: 'subcription' },
    { label: 'Gift cards', icon: 'giftcards' },
    { label: 'Random Weekend', icon: 'key' },
    { label: 'OUTLET', icon: 'discrount' },
];

function PostHeader() {
    return (
        <div className="bg-black w-full h-12 grid place-items-center">
            <div className='w-[1168px]'>
                <ul className='flex justify-between items-center w-full h-12 text-white font-medium text-md'>
                    {NAV_LINKS.map((link) => (
                        <li key={link.label} className='flex items-center gap-2 cursor-pointer hover:opacity-80'>
                            <img src={`/icons/${link.icon}.svg`} alt="" className="w-4 h-4" />
                            {link.label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PostHeader