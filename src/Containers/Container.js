// mapStateToProps
// mapDispatchToProps
import {connect} from 'react-redux';
import Home from '../ComponentsTopics/Home';
import { mapDispatchToProps } from "./mapDispatchToProps.1";
// import 
const mapStateToProps = state => {

}
export default connect(mapStateToProps,mapDispatchToProps)(Home);

// export default Home;