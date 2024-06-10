export default function Layout({ children }) {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center py-5 px-5"
        style={{
          minHeight: "91vh",
        }}
      >
        {children}
      </div>

      <footer className="text-center text-gray-600 text-sm flex flex-col justify-center items-center mb-2">
        
        
      </footer>
    </>
  );
}
