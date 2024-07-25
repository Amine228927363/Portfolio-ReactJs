import logo from  "../assets/kevinRushLogo.png"
import { LinkedInLogoIcon,GitHubLogoIcon,InstagramLogoIcon,TwitterLogoIcon } from '@radix-ui/react-icons'

 const NavBar = () => {
  return (
    <nav className="mb-20  flex items-center justify-between py-6">
<div className="flex flex-shrink-0 items-center ">
<img className="mx-2 w-10 " src={logo} alt="logo" />
</div>
<div className="m-8  flex  items-center justify-center gap-4 text-2xl  ">
<GitHubLogoIcon color="white" width={40} height={30}/>
<InstagramLogoIcon color="white" width={40} height={30}/>
<LinkedInLogoIcon color="white" width={40} height={30}/>
<TwitterLogoIcon color="white" width={40} height={30}/>
</div>




    </nav>
  )
}
export default NavBar;