import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {

  const Links = [
    {
      title: 'Company',
      links: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'About Us ',
          link: '/about-us'
        },
        {
          name: 'Contact Us',
          link: '/contact-us'
        },
      ]
    },
    {
      title: 'Movies',
      links: [
        {
          name: 'Action',
          link: '/actions'
        },
        {
          name: 'Romantics',
          link: '/about-us'
        },
        {
          name: 'Drama',
          link: '/contact-us'
        },
        {
          name: 'Si-fi',
          link: '/contact-us'
        },
      ]
    },
    {
      title: 'Connect with Us',
      links: [
        {
          name: '',
          link: '/actions'
        },
        {
          name: 'Romantics',
          link: '/about-us'
        },
        {
          name: 'Drama',
          link: '/contact-us'
        },
        {
          name: 'Si-fi',
          link: '/contact-us'
        },
      ]
    }
  ]
  return (
    <div className='bg-dry py-4 border-t-2 border-black'>
      <div className='container mx-auto px-2'>
        <div className='grid grid-cols-2 md:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between'>
          {
            Links.map((link,index) => (
              <div
                key={index}
                className='col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0'
              >
                <h3 className='text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5
                '>{link.title}</h3>
              <ul className='text-sm flex flex-col space-y-3'>
              {link.links.map((text,index)=>(
                <li key={index}
                className='flex items-baseline'>
                  <Link to={text.link}
                  className='text-border inline-block w-full hover:text-subMain'>{text.name}</Link>
                </li>
                ))}
              </ul>
              </div>
            )) 
          }
          <div className='pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3'>
            <Link to="/">
              <img src="/images/logo.png" alt="logo" 
              className='h-12 '
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer