import ReactQueryProvider from "../../lib/provider";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <Header />
      {children}
      <Footer />
    </ReactQueryProvider>
  );
};

export default Layout;
