'use client';

import Image from 'next/image';
import Link from 'next/link';

import ThemeSwitch from '@/components/shared/ThemeSwitch';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from '@/components/ui/navigation-menu';

import MobileMenue from './MobileMenue';
import ThemeSwitch2 from './ThemeSwitch2';
import { ArrowRightFromLine, DollarSign, Mail, Phone } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

const services = [
    {
        title: 'Roofing',
        href: '/services/roofing',
        description: 'Professional roofing solutions for durability and style.'
    },
    {
        title: 'Kitchen Remodeling',
        href: '/services/kitchen-remodeling',
        description: 'Transform your kitchen into a modern and functional space.'
    },
    {
        title: 'Bathroom Remodeling',
        href: '/services/bathroom-remodeling',
        description: 'Upgrade your bathroom with elegant and practical designs.'
    },
    {
        title: 'Home Remodeling',
        href: '/services/home-remodeling',
        description: 'Comprehensive home remodeling services tailored to your needs.'
    },
    {
        title: 'Flooring',
        href: '/services/flooring',
        description: 'Expert flooring installation and refinishing services.'
    },
    {
        title: 'Drywall',
        href: '/services/drywall',
        description: 'Professional drywall installation and repair services.'
    },
    {
        title: 'Painting',
        href: '/services/painting',
        description: 'High-quality painting services for interior and exterior spaces.'
    },
    {
        title: 'General Handy Services',
        href: '/services/handy-services',
        description: 'Reliable and versatile handyman services for your home projects.'
    },
    {
        title: 'Landscape Designing and Installation',
        href: '/services/landscaping',
        description: 'Beautiful landscape designs and expert installation services.'
    },
    {
        title: 'Tree Trimming',
        href: '/services/tree-trimming',
        description: 'Professional tree trimming and maintenance for a healthier yard.'
    }
];

const NavbarWithBanner = () => {
    const { scrollY } = useScroll();
    const bannerHeight = 40;

    const bannerOpacity = useTransform(scrollY, [0, bannerHeight], [1, 0]);
    const bannerY = useTransform(scrollY, [0, bannerHeight], [0, -bannerHeight]);
    const navbarY = useTransform(scrollY, [0, bannerHeight], [bannerHeight, 0]);

    return (
        <>
            {/* Banner with contact information */}
            <motion.div
                style={{
                    opacity: bannerOpacity,
                    y: bannerY
                }}
                className='fixed inset-x-0 top-0 z-50 h-10 bg-gray-700 text-white'>
                <div className='mx-auto flex h-full max-w-7xl items-center justify-between px-4'>
                    {/* Left section with contact info */}
                    <div className='flex items-center space-x-6'>
                        <Link
                            href='mailto:info@archiwiz.com'
                            className='flex items-center space-x-2 transition-colors hover:text-red-200'>
                            <Mail className='size-4' />
                            <span className='text-sm'>info@adnan.com</span>
                        </Link>
                        <Link
                            href='tel:+18136788860'
                            className='flex items-center space-x-2 transition-colors hover:text-red-200'>
                            <Phone className='size-4' />
                            <span className='text-sm'>(111) 111-1111</span>
                        </Link>
                    </div>

                    {/* Right section with social media */}
                    <div className='flex items-center space-x-4'>
                        <Link
                            href='/quote'
                            className='flex items-center space-x-2 transition-colors hover:text-red-200'>
                            <DollarSign className='size-4' />
                            <span className='text-sm'>Get A Quote</span>
                            <ArrowRightFromLine />
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* Navbar */}
            <motion.nav style={{ y: navbarY }} className='fixed inset-x-0 top-0 z-40 h-16 border-b bg-background'>
                <div className='mx-auto flex h-full max-w-7xl items-center justify-between px-4'>
                    {/* Logo */}
                    <Link className='flex items-center justify-start gap-1' href='/'>
                        <Image alt='Logo' height={80} src='https://placehold.co/32x24' width={80} />
                        <p className='text-xl font-bold'>Adnan</p>
                    </Link>

                    {/* Navigation Links */}
                    <MobileMenue />
                    <div className='hidden items-center space-x-8 md:flex'>
                        <NavigationMenu>
                            <NavigationMenuList className='bold gap-4'>
                                <NavigationMenuItem>
                                    <Link href='/' legacyBehavior passHref>
                                        <NavigationMenuLink className='transition-colors hover:text-red-700'>
                                            Home
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href='/about' legacyBehavior passHref>
                                        <NavigationMenuLink className='transition-colors hover:text-red-700'>
                                            About
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href='/services' legacyBehavior passHref>
                                        <NavigationMenuTrigger className='text-md bold -mx-4 hover:text-red-700'>
                                            Services
                                        </NavigationMenuTrigger>
                                    </Link>
                                    <NavigationMenuContent>
                                        <ul className='grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                                            {services.map((service) => (
                                                <Link href={service.href} key={service.title}>
                                                    <li className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                                        <p className='text-sm font-bold leading-none'>
                                                            {service.title}
                                                        </p>

                                                        <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                                                            {service.description}
                                                        </p>
                                                    </li>
                                                </Link>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href='/blogs' legacyBehavior passHref>
                                        <NavigationMenuLink className='transition-colors hover:text-red-700'>
                                            Blog
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href='/contact-us' legacyBehavior passHref>
                                        <NavigationMenuLink className='transition-colors hover:text-red-700'>
                                            Contact
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        {/* Right Section */}
                        <div className='flex items-center space-x-4'>
                            <ThemeSwitch />
                            <ThemeSwitch2 />
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Spacer to prevent content from going under navbar */}
            <div className='mb-24' />
        </>
    );
};

export default NavbarWithBanner;
