import Header from "../Header";
import "./style.css";

const Page = ({ title = "", children }) => {
  return (
    <div className="page">
      <Header />
      <div className="title">{title}</div>
      {children}
    </div>
  );
};

export default Page;
