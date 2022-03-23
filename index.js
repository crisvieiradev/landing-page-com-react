import ReactDOM from "react-dom";
import Menu from "./Menu";
import Header from "./Header";
import Services from "./Services";
import Testimonial from "./Testimonials";
import Team from "./Team";


function App() {
    return (
        <>
					<Menu />
					<Header />
          <Services />
          <Testimonial />
          <Team />
				</>
    );
    }

ReactDOM.render(<App />, document.querySelector(".root"));
