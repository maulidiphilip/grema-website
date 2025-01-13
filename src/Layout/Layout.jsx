import Footer from "@/components/schoolView/Footer/Footer";
import Header from "@/components/schoolView/Navigation/Header";
import Router from "@/ProjectRoutes/Router";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mt-20">
        <Router />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
