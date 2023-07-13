export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>Page</div>
      <div className="bg-white h-screen w-full p-10">{children}</div>
    </>
  );
}
