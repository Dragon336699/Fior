import StartArea from '../StartArea/startArea'
import About from '../About/about'
import Reason from '../reason/reason'
import Gallery from '../Gallery/gallery'
import Customer from '../Customer/customer'
import Arrange from '../Arrange/arrange'
import Contact from '../Contact/contact'
import Info from '../Info/info'
import Footer from '../Footer/footer'

function Home() {
    return (
        <div>
            <StartArea />
            <About />
            <Reason />
            <Gallery />
            <Customer />
            <Arrange />
            <Contact />
            <Info />
            <Footer />
        </div>
    )
}

export default Home