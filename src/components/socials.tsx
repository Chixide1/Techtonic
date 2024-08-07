import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon, GlobeIcon } from "@radix-ui/react-icons"
import { Searchbar } from "./searchbar"

type social = {
    link: string,
    icon: JSX.Element
}

export function Socials(){
    const socials: social[] = [
        {link: 'https://chikdoestech.xyz', icon: <GlobeIcon/>},
        {link: 'https://github.com/Chixide1', icon: <GitHubLogoIcon/>},
        {link: 'https://www.linkedin.com/in/chikezieonuoha', icon: <LinkedInLogoIcon/>},
        {link: 'mailto:chikezie.o.onuoha@gmail.com', icon: <EnvelopeClosedIcon />}
    ]
    return (
        <div className="flex">
            <Searchbar />
            <nav className="flex">
            {socials.map((social) => (
                <a key={social.link} href={social.link} target="_blank" className="p-2 rounded-md hover:bg-gray-100">{social.icon}</a>
            ))}
            </nav>
        </div>

    )
}