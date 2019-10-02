import React, {useState} from 'react';
import styled from 'styled-components';
import {GridImage} from "./GridImage";
import {Tooltip} from "./Tooltip";
import {Button} from "./Button";
import {ImageDetailsView} from "./ImageDetailsView";
import {AddImageView} from "./AddImageView";

const ParentGrid = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    & > ${Button} {
            position: fixed;
            bottom: 20px;
            right: 40px;
        }
`;


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
    const [addViewIsOpened, setAddView] = useState(false);

    const onImageClick = (idx) => () => {
        setActiveImage(idx);
        setDetailedView(true);
    };

    const onCloseClick = () => {
        setDetailedView(false);
    };

    const onAddViewClose = () => {
        setAddView(false);
    }

    const onButtonClick = () => {
        setAddView(true);
    };

    const data = [
        {
            id: '0',
            imageUrl: 'https://images.unsplash.com/photo-1549297161-14f79605a74c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80',
            tooltip: {
                text: 'Poodle dog with toys',
                position: 'BOTTOM',
                color: '#c24ec0',
                textColor: '#ffffff',
            }
        },
        {
            id: '1',
            imageUrl: 'https://images.unsplash.com/photo-1562244510-70270c6e138f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
            tooltip: {
                text: 'Happy walking dog',
                position: 'LEFT',
                color: '#db3d8a',
                textColor: '#ffffff',
            }
        },
        {
            id: '2',
            imageUrl: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
            tooltip: {
                text: 'Chow Chow dog with sunglasses',
                position: 'BOTTOM',
                color: '#f5e9b3',
                textColor: '#4f3b0a',
            }
        },
        {
            id: '3',
            imageUrl: 'https://images.unsplash.com/photo-1517423738875-5ce310acd3da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            tooltip: {
                text: 'Black boston terrier in the grey hoodie',
                position: 'RIGHT',
                color: '#42413e',
                textColor: '#ffffff',
            }
        },
        {
            id: '4',
            imageUrl: 'https://images.unsplash.com/photo-1530041539828-114de669390e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
            tooltip: {
                text: 'Black boston terrier in the yellow jacket',
                position: 'TOP',
                color: '#ffec1c',
                textColor: '#36352f',
            }
        },
        {
            id: '5',
            imageUrl: 'https://images.unsplash.com/photo-1517519014922-8fc06b814a0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
            tooltip: {
                text: 'Black boston terrier in the red beret',
                position: 'BOTTOM',
                color: '#ff0814',
                textColor: '#ffffff',
            }
        },
        {
            id: '6',
            imageUrl: 'https://images.unsplash.com/photo-1551135611-73f5dada3b4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            tooltip: {
                text: 'Dog on the bridge',
                position: 'LEFT',
                color: '#fcfc6a',
                textColor: '#3d3d04',
            }
        },
        {
            id: '7',
            imageUrl: 'https://images.unsplash.com/photo-1535554975110-9133cf938160?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
            tooltip: {
                text: 'Boxer dog wearing green jacket',
                position: 'BOTTOM',
                color: '#28fc19',
                textColor: '#020a01',
            }
        },
        {
            id: '8',
            imageUrl: 'https://images.unsplash.com/photo-1535554672698-902bc7dfbc50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            tooltip: {
                text: 'Smart boxer dog',
                position: 'RIGHT',
                color: '#245eff',
                textColor: '#ffffff',
            }
        },
        {
            id: '9',
            imageUrl: 'https://images.unsplash.com/photo-1520721973443-8f2bfd949b19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            tooltip: {
                text: 'Cute puppy on the coach',
                position: 'LEFT',
                color: '#e9ecf7',
                textColor: '#000000',
            }
        },
        {
            id: '10',
            imageUrl: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            tooltip: {
                text: 'Black boston terrier in the yellow cap',
                position: 'TOP',
                color: '#ffd829',
                textColor: '#ffffff',
            }
        },
        {
            id: '11',
            imageUrl: 'https://images.unsplash.com/photo-1532202802379-df93d543bac3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            tooltip: {
                text: 'Superman dog',
                position: 'LEFT',
                color: '#fc3912',
                textColor: '#ffffff',
            }
        },
        {
            id: '12',
            imageUrl: 'https://images.unsplash.com/photo-1505044197374-4d4ae3f9d566?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            tooltip: {
                text: 'Cute puppy',
                position: 'TOP',
                color: '#42413e',
                textColor: '#ffffff',
            }
        },
        {
            id: '13',
            imageUrl: 'https://images.unsplash.com/photo-1535230464639-a413d00b9934?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            tooltip: {
                text: 'Spaniel dog with white collar',
                position: 'RIGHT',
                color: '#db3d8a',
                textColor: '#ffffff',
            }
        },
        {
            id: '14',
            imageUrl: 'https://images.unsplash.com/photo-1563765123001-d5ea43c8677d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            tooltip: {
                text: 'White puppy with a bow',
                position: 'LEFT',
                color: '#c24ec0',
                textColor: '#ffffff',
            }
        },
        {
            id: '15',
            imageUrl: 'https://images.unsplash.com/photo-1513739373332-5c7f12df1f81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            tooltip: {
                text: 'Little puppy with flowers',
                position: 'TOP',
                color: '#42413e',
                textColor: '#ffffff',
            }
        },
    ];

    return (
        <ParentGrid>
            <StyledGrid>
                {data.map((item) =>
                    <Tooltip {...item.tooltip} key={item.id}>
                        <GridImage src={item.imageUrl} onClick={onImageClick(item.id)} />
                    </Tooltip> )}
            </StyledGrid>
            <Button add onClick={onButtonClick}>Add</Button>
            { detailedViewIsOpened ? <ImageDetailsView
               imageData={data[activeImage]}
               onCloseClick={onCloseClick}/> : null}
            {addViewIsOpened ? <AddImageView onCloseClick={onAddViewClose}/> : null}
        </ParentGrid>
    )
};
