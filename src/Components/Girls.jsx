import { getGirls } from "../Selectors/namesSelector";
import { connect } from "react-redux";

function Girls({girls}) {

    return (
        <ul className="girls">
            {
                girls.map((g, i) => <li key={i}>{g}</li>)
            }
        </ul>
    )
}

const mapStateToProps = (state) => {
    const girls = getGirls(state);
    return { girls }
}

export default connect(mapStateToProps)(Girls);