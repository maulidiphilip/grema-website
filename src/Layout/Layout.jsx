import Header from "@/components/schoolView/Navigation/Header";
import Router from "@/ProjectRoutes/Router";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mt-20">
        {" "}
        {/* Adjust this value as needed */}
        <Router />
      </main>
    </>
  );
};

export default Layout;
