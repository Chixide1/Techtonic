import { GitHubLogoIcon} from "@radix-ui/react-icons"

export const githubLink = 'https://github.com/Chixide1/techtonic'

export function GithubButton({className}: {className?: string}){

  return (
    <a href={githubLink} target="_blank" className={"btn block" + ' ' + className}>
      <GitHubLogoIcon/>
    </a>
  )
}