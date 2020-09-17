
import React, { useState, useContext, useEffect } from 'react';
import styled from "styled-components";
import { ItemContext } from './contexts/ItemContext';

const SellerCard = prop => {
    const [itemData, setUserData] = useState([])

    const Container = styled.div`
    border: 1px #80808059 solid;
    border-radius: 10px;
    padding: 0 0 0.5rem ;
    max-width: 400px;
    margin: 1rem 0;
    
    `
    const Page = styled.div`
    border: 2px #80808059 solid;
    align-items: baseline;
    border-radius: 3px;
    padding: 0.5rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    `
    const ImageContainer = styled.img`
    
    max-width: 100%;
    max-hight: 1200px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    `
    const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    div{
        padding:.5rem;
    }

    `
    const Timer = styled.div`
    border: 2px green solid;
    border-radius: 100%;
    `
    const Price = styled.div`
    display: flex;
    font-weight: 600;
    `


    const Des = styled.div`
    text-align: left;
    `
    const itemProp = useContext(ItemContext);

    useEffect(() => {
        setUserData(itemProp)
    }, [])

    return (
        <Page>

            {
                itemData.map((item, index) =>
                    <Container key={index}>
                        <ImageContainer src={item.image} alt='item-imag' />
                        <DataContainer>

                            <Price>
                                {item.price.bidState == true ? <><div>Current Bid: ${item.price.price}</div><div>Bidder: {item.biderName}</div></> : <div>${item.price.price}</div>}
                            </Price>
                            <Des>
                                <div>{item.description}</div>
                            </Des>

                            <div>
                                <Timer>{item.timer}</Timer>
                                {/* <PlaceBid item={item}/> */}
                            </div>
                        </DataContainer>
                    </Container>
                )
            }
        </Page>
    )


}

export default SellerCard;