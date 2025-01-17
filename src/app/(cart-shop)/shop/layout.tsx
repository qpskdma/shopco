import Filters from "@/components/filters/Filters";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Filters />
      {children}
    </div>
  );
}
