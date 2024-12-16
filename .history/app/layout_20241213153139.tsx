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
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="flex-grow  md:overflow-y-auto md:p-10">{children}</div>
        </div>
      </body>
    </html>
  );
}




