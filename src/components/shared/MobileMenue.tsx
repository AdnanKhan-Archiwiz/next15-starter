'use client';

import React, { useState } from 'react';

import Link from 'next/link';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

import { AlignJustify } from 'lucide-react';

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

const MobileMenue = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className='md:hidden'>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant='outline' size='icon'>
                        <AlignJustify className='size-5' />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader className='mb-4'>
                        <SheetTitle>Navigation Menu</SheetTitle>
                    </SheetHeader>

                    <div className='space-y-4'>
                        <Link
                            href='/'
                            onClick={handleLinkClick}
                            className='block w-full py-2 text-lg hover:bg-accent hover:text-accent-foreground'>
                            Home
                        </Link>

                        <Link
                            href='/about'
                            onClick={handleLinkClick}
                            className='block w-full py-2 text-lg hover:bg-accent hover:text-accent-foreground'>
                            About Us
                        </Link>

                        <Accordion type='single' collapsible>
                            <AccordionItem value='services'>
                                <AccordionTrigger className='text-lg'>Services</AccordionTrigger>
                                <AccordionContent>
                                    <div className='space-y-2'>
                                        {services.map((service) => (
                                            <Link
                                                key={service.title}
                                                href={service.href}
                                                onClick={handleLinkClick}
                                                className='block px-4 py-2 text-base hover:bg-accent hover:text-accent-foreground'>
                                                {service.title}
                                            </Link>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Link
                            href='/blogs'
                            onClick={handleLinkClick}
                            className='block w-full py-2 text-lg hover:bg-accent hover:text-accent-foreground'>
                            Blog
                        </Link>

                        <Link
                            href='/contact-us'
                            onClick={handleLinkClick}
                            className='block w-full py-2 text-lg hover:bg-accent hover:text-accent-foreground'>
                            Contact Us
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileMenue;
