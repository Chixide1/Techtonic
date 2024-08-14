import { GitHubLogoIcon} from "@radix-ui/react-icons"

export function GithubButton({className}: {className?: string}){

  return (
    <a href='https://github.com/Chixide1/blog-app' target="_blank" className={"btn block" + ' ' + className}>
      <GitHubLogoIcon/>
    </a>
  )
}