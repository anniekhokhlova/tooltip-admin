import React, {useState} from 'react';
import styled from 'styled-components';
import {GridImage} from "./GridImage";
import {Tooltip} from "./Tooltip";
import {ImageDetailsView} from "./ImageDetailsView";

const StyledGrid = styled.div`
        width: 1040px;
        height: 1000px;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        margin-top: 30px;
`;

export const Grid = () => {
    const [detailedViewIsOpened, setDetailedView] = useState(false);
    const [activeImage, setActiveImage] = useState(null);

    const onImageClick = (idx) => () => {
        setActiveImage(idx);
        setDetailedView(true);
    };

    const onCloseClick = () => {
        setDetailedView(false);
    };

    const imageUrls = ['https://images.unsplash.com/photo-1549297161-14f79605a74c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80',
                        'https://images.unsplash.com/photo-1562244510-70270c6e138f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                        'https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
                        'https://images.unsplash.com/photo-1517423738875-5ce310acd3da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                        'https://images.unsplash.com/photo-1530041539828-114de669390e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                        'https://images.unsplash.com/photo-1517519014922-8fc06b814a0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
                        'https://images.unsplash.com/photo-1551135611-73f5dada3b4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                        'https://images.unsplash.com/photo-1535554975110-9133cf938160?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                        'https://images.unsplash.com/photo-1535554672698-902bc7dfbc50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
                        'https://images.unsplash.com/photo-1520721973443-8f2bfd949b19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                        'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
                        'https://images.unsplash.com/photo-1532202802379-df93d543bac3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                        'https://images.unsplash.com/photo-1505044197374-4d4ae3f9d566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                        'https://images.unsplash.com/photo-1535230464639-a413d00b9934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                        'https://images.unsplash.com/photo-1563765123001-d5ea43c8677d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                        'https://images.unsplash.com/photo-1513739373332-5c7f12df1f81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    ];

    return (
        <React.Fragment>
            <StyledGrid>
                {imageUrls.map((src, idx) => <GridImage src={src} key={idx} onClick={onImageClick(idx)} Tooltip={<Tooltip text="abc"/>}/>)}
            </StyledGrid>
           <ImageDetailsView
               src={imageUrls[activeImage]}
               isVisible={detailedViewIsOpened}
               onCloseClick={onCloseClick}
               Tooltip={<Tooltip text="abc"/>} />
        </React.Fragment>
    )
}
