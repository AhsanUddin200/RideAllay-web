// src/app/layout.tsx

import './globals.css'; // Import your global styles
import Navbar from '../components/Navbar'; // Import your Navbar component
import Header from '../components/Header';

export const metadata = {
    title: 'Your Website Title',
    description: 'Your website description goes here.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
