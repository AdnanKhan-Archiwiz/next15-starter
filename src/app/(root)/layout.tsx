import React from 'react';

import NavbarWithBanner from '@/components/shared/Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <NavbarWithBanner />
            <main className='flex min-h-screen w-full items-center justify-center'>{children}</main>
        </>
    );
};

export default Layout;
