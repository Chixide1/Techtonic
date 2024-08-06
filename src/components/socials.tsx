import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon, GlobeIcon } from "@radix-ui/react-icons"

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
        <nav className="flex gap-3">
            {socials.map((social) => (
                <a href={social.link} target="_blank" className="">{social.icon}</a>
            ))}
        </nav>
    )
}