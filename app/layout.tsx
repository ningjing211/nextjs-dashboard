import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
// import SideNav from '@/app/ui/dashboard/sidenav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flow`}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="flex-grow md:overflow-y-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}




