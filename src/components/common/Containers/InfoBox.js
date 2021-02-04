import React from 'react';
import styled from 'styled-components';

function InfoBox({ className, title, children, underBoxText=null }) {
    return (
        <div className={className}>
            <h2 className="infobox_title">
                {title}
            </h2>
            <div className="infobox_box-style">
               {children}
            </div>
            {underBoxText && underBoxText}
        </div>
    )
}

export default styled(InfoBox)``;
