import Poster from "../components/poster/poster";
import Cards from "../components/cards/cards";
import Work from "../components/work/work";
import Service from "../components/service/service";
import Bransh from "../components/branches/bransh";
import Fetures from "../components/fetures/fetures";
import Make from "../components/make desction/make";
function Homepage(){
    return(
        <>
        <Poster/>
        <Cards/>
        <Work/>
        <Service/>
        <Bransh/>
        <Fetures/>
        <Make/>
        </>
    )
}
export default Homepage