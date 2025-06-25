
import './globals.css'; // Ensure this import is present
import { Providers } from './providers';

export const metadata = {
  title: 'Advanced To-Do App',
  description: 'A modern to-do application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}