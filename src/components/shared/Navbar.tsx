'use client';

import { useEffect, useState } from 'react';

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
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import {
    ArrowRightFromLine,
    Bath,
    Brush,
    DollarSign,
    Hammer,
    Home,
    CookingPotIcon as Kitchen,
    Mail,
    Menu,
    Phone,
    TreesIcon as Tree,
    Wrench,
    X
} from 'lucide-react';

const services = [
    {
        title: 'Roofing',
        href: '/services/roofing',
        description: 'Professional roofing solutions for durability and style.',
        icon: Home
    },
    {
        title: 'Kitchen Remodeling',
        href: '/services/kitchen-remodeling',
        description: 'Transform your kitchen into a modern and functional space.',
        icon: Kitchen
    },
    {
        title: 'Bathroom Remodeling',
        href: '/services/bathroom-remodeling',
        description: 'Upgrade your bathroom with elegant and practical designs.',
        icon: Bath
    },
    {
        title: 'Home Remodeling',
        href: '/services/home-remodeling',
        description: 'Comprehensive home remodeling services tailored to your needs.',
        icon: Hammer
    },
    {
        title: 'Flooring',
        href: '/services/flooring',
        description: 'Expert flooring installation and refinishing services.',
        icon: Brush
    },
    {
        title: 'Drywall',
        href: '/services/drywall',
        description: 'Professional drywall installation and repair services.',
        icon: Wrench
    },
    {
        title: 'Painting',
        href: '/services/painting',
        description: 'High-quality painting services for interior and exterior spaces.',
        icon: Brush
    },
    {
        title: 'General Handy Services',
        href: '/services/handy-services',
        description: 'Reliable and versatile handyman services for your home projects.',
        icon: Wrench
    },
    {
        title: 'Landscape Designing and Installation',
        href: '/services/landscaping',
        description: 'Beautiful landscape designs and expert installation services.',
        icon: Tree
    },
    {
        title: 'Tree Trimming',
        href: '/services/tree-trimming',
        description: 'Professional tree trimming and maintenance for a healthier yard.',
        icon: Tree
    }
];

const NavbarWithBanner = () => {
    const { scrollY } = useScroll();
    const bannerHeight = 40;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const bannerOpacity = useTransform(scrollY, [0, bannerHeight], [1, 0]);
    const bannerScale = useTransform(scrollY, [0, bannerHeight], [1, 0.95]);
    const navbarY = useTransform(scrollY, [0, bannerHeight], [bannerHeight, 0]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <AnimatePresence>
                {/* Banner with contact information */}
                <motion.div
                    initial={{ opacity: 1, y: 0, scale: 1 }}
                    style={{
                        opacity: bannerOpacity,
                        scale: bannerScale
                    }}
                    className='fixed inset-x-0 top-0 z-50 h-10 bg-gradient-to-r from-red-600 to-red-800 text-white'>
                    <div className='mx-auto flex h-full max-w-7xl items-center justify-between px-4'>
                        {/* Left section with contact info */}
                        <div className='flex items-center space-x-6'>
                            <Link
                                href='mailto:info@adnan.com'
                                className='flex items-center space-x-2 transition-colors hover:text-red-200'>
                                <Mail className='size-4' aria-hidden='true' />
                                <span className='text-sm font-medium'>info@adnan.com</span>
                            </Link>
                            <Link
                                href='tel:+11111111111'
                                className='flex items-center space-x-2 transition-colors hover:text-red-200'>
                                <Phone className='size-4' aria-hidden='true' />
                                <span className='text-sm font-medium'>(111) 111-1111</span>
                            </Link>
                        </div>

                        {/* Right section with quote link */}
                        <Link
                            href='/quote'
                            className='group flex items-center space-x-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium transition-all hover:bg-white/20'>
                            <DollarSign className='size-4' aria-hidden='true' />
                            <span>Get A Quote</span>
                            <ArrowRightFromLine
                                className='size-4 transition-transform group-hover:translate-x-1'
                                aria-hidden='true'
                            />
                        </Link>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navbar */}
            <motion.nav
                style={{ y: navbarY }}
                className='fixed inset-x-0 top-0 z-40 h-16 border-b bg-background/80 backdrop-blur-md'
                initial={{ y: bannerHeight }}>
                <div className='mx-auto flex h-full max-w-7xl items-center justify-between px-4'>
                    {/* Logo */}
                    <Link className='flex items-center justify-start gap-2' href='/'>
                        <Image
                            alt='Adnan Logo'
                            height={32}
                            src='https://placehold.co/32x32'
                            width={32}
                            className='rounded-full'
                        />
                        <p className='bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-xl font-bold text-transparent'>
                            Adnan
                        </p>
                    </Link>

                    {/* Navigation Links */}
                    <div className='hidden items-center space-x-8 md:flex'>
                        <NavigationMenu>
                            <NavigationMenuList className='gap-1'>
                                <NavigationMenuItem>
                                    <Link href='/' legacyBehavior passHref>
                                        <NavigationMenuLink className='px-3 py-2 text-sm font-medium transition-colors hover:text-red-700'>
                                            Home
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href='/about' legacyBehavior passHref>
                                        <NavigationMenuLink className='px-3 py-2 text-sm font-medium transition-colors hover:text-red-700'>
                                            About
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className='px-3 py-2 text-sm font-medium transition-colors hover:text-red-700'>
                                        Services
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                                            {services.map((service) => (
                                                <li key={service.title}>
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            href={service.href}
                                                            className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-red-700 focus:bg-red-50 focus:text-red-700'>
                                                            <div className='flex items-center space-x-2'>
                                                                <service.icon className='size-4' />
                                                                <div className='text-sm font-medium leading-none'>
                                                                    {service.title}
                                                                </div>
                                                            </div>
                                                            <p className='mt-1 line-clamp-2 text-sm leading-snug text-muted-foreground'>
                                                                {service.description}
                                                            </p>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href='/blogs' legacyBehavior passHref>
                                        <NavigationMenuLink className='px-3 py-2 text-sm font-medium transition-colors hover:text-red-700'>
                                            Blog
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href='/contact-us' legacyBehavior passHref>
                                        <NavigationMenuLink className='px-3 py-2 text-sm font-medium transition-colors hover:text-red-700'>
                                            Contact
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        {/* Theme Switches */}
                        <div className='flex items-center space-x-4'>
                            <ThemeSwitch />
                            <ThemeSwitch2 />
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <MobileMenue />
                </div>
            </motion.nav>

            {/* Spacer to prevent content from going under navbar */}
            <div className='h-24' />
        </>
    );
};

export default NavbarWithBanner;
