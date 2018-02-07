import React, {PropTypes} from "react";
import sizeMe from 'react-sizeme';
import EchartsItem from "./echartsItem";

function PanelComponent({children, size: {width, height}, style, id, option, panel, index}) {
    return (
        <div style={{backgroundColor: "antiquewhite"}} key={"panel_" + index}>
            <EchartsItem
                id={id}
                option={option}
                panel={panel}
                width={width}
                height={height}
            />
        </div>
    )
}

PanelComponent.propTypes = {
    children: PropTypes.node,
    size: PropTypes.shape({
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
    }),
    style: PropTypes.object
}

export default sizeMe({
    monitorHeight: true,
})(PanelComponent)