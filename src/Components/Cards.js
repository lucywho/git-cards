//make axios call and render data

import axios from "axios"
import Card from "./Card"
import testData from "../testData"

export default function Cards(props) {
    return (
        <>
            <p>text from Cards</p>
            <Card {...testData[0]} />
            <Card {...testData[1]} />
            <Card {...testData[2]} />
        </>
    )
}
