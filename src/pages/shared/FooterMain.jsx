
import { Footer } from 'flowbite-react';
import {  BsGithub} from 'react-icons/bs';
import { AiFillFire , AiOutlineGlobal} from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
const FooterMain = () => {
  return (
    <Footer >
      <div className="w-full px-4 lg:px-24">
       
        <div className="w-full px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by=" Монгол модон барын бүтээлийг ангилж бүртгэх "
            href="#"
            year={2024}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://tiger-book-client-6qgefprxf-nasantuguldur01s-projects.vercel.app/"
              icon={AiOutlineGlobal}
            />
            <Footer.Icon
              href="https://console.firebase.google.com/project/tiger-book-log/authentication/settings"
              icon={AiFillFire}
            />
            <Footer.Icon
              href="https://cloud.mongodb.com/v2/6649dc17e099285a37ee33f6#/overview"
              icon={SiMongodb}
            />
            <Footer.Icon
              href="https://react-icons.github.io/react-icons/search/#q=react"
              icon={FaReact}
            />
            <Footer.Icon
              href="https://github.com/nasantuguldur01/tiger-book-client"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default FooterMain;