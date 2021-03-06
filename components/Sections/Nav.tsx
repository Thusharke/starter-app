import SkeletonElement from '../Skeletons/SkeletonElement';
import styles from '../../styles/skeleton.module.css';
import React, { useState } from 'react';
interface Props {
   content: NavDetails;
}
interface NavDetails {
   navHeader: string;
   navLinks: Link[];
}

interface Link {
   link: string;
}

const NavLinks: React.FC<{ navLinks: Link[] }> = ({ navLinks }) => {
   return (
      <div className="h-screen bg-bgColor w-screen mt-24 border border-gray-200 pb-8 fixed top-0 left-0 block lg:hidden">
         <div>
            {navLinks.map((links, index) => {
               return (
                  <div className="pl-6 text-cus1 block h-2/12" key={index}>
                     {links.link}
                  </div>
               );
            })}
         </div>
      </div>
   );
};
const Nav: React.FC<Props> = ({ content }) => {
   var [showLinks, setShowLinks] = useState(false);

   return (
      <div className="fixed top-0 left-0 w-screen bg-bgColor z-10">
         <div className="flex container mx-auto max-w-screen-lg h-24 leading-24 text-navColor ">
            <div className="flex-1 w-1/4 flex items-center">
               {content ? (
                  <div className="w-10 ml-5">
                     <img
                        className="w-full object-contain"
                        src={content.navHeader}
                     />
                  </div>
               ) : (
                  <SkeletonElement classes={styles.circle} />
               )}
            </div>

            <div className="ml-4 flex-2 w-3/4 hidden lg:block">
               <ul className="flex justify-evenly items-center h-full">
                  {content &&
                     content.navLinks.map((link, index) => {
                        return (
                           <li className="text-base" key={index}>
                              {link.link}
                           </li>
                        );
                     })}
                  {!content && (
                     <>
                        <li>
                           <SkeletonElement classes={styles.text} />
                        </li>
                        <li>
                           <SkeletonElement classes={styles.text} />
                        </li>
                        <li>
                           <SkeletonElement classes={styles.text} />
                        </li>
                        <li>
                           <SkeletonElement classes={styles.text} />
                        </li>
                        <li>
                           <SkeletonElement classes={styles.text} />
                        </li>
                        <li>
                           <SkeletonElement classes={styles.text} />
                        </li>
                        <li>
                           <SkeletonElement classes={styles.text} />
                        </li>
                     </>
                  )}
               </ul>
            </div>

            <div className="block lg:hidden absolute top-1 right-0 mt-8 mr-8 w-7 cursor-pointer z-50">
               <img
                  className="w-full"
                  src="https://assets-global.website-files.com/5f8dd056c51c1d04c3eaa497/5fa46322f80edc7c5b188c70_burger.svg"
                  onClick={() => {
                     if (showLinks == true) setShowLinks(false);
                     else setShowLinks(true);
                  }}
               />
            </div>
            {showLinks && <NavLinks navLinks={content.navLinks} />}
         </div>
      </div>
   );
};

export default Nav;
