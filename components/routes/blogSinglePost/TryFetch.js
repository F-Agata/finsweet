import React, {useEffect} from "react";
import Box from "../../../styles/Box";


const TryFetch = () => {

    useEffect(() =>{
        fetch("https://randomuser.me/api/?results=7")
            .then((res) =>{
                if (res.ok) {
                    // console.log(res, "res")
                    return res
                } throw Error(res.status)
            })
            .then((res) => res.json())
            .then((data) => {
                // console.log('data', data)

                // console.log('data.results', data.results)
                // console.log('data.results[1].picture.large', data.results[1].picture.large)
                // console.log('data.results.id', data.results[1].id.value)
            })
            .catch (error => console.log(error))
    },[])

    return (
        <Box>
            fgbhfbgff
        </Box>
    );
}

export default TryFetch;

