import { useEffect, useState } from "react";

const useBooks = () => {
    const [trandings, setTrandings] = useState([]);
    const [classics, setClassics] = useState([]);
    const [loves, setLoves] = useState([]);

    // tranding books 
    useEffect(() => {
        fetch('tranding.json')
            .then(res => res.json())
            .then(data => setTrandings(data))
    }, [])

    // classic books 
    useEffect(() => {
        fetch('classic.json')
            .then(res => res.json())
            .then(data => setClassics(data))
    }, [])

    // books we love
    useEffect(() => {
        fetch('we-love.json')
            .then(res => res.json())
            .then(data => setLoves(data))
    }, [])

    return{
        trandings,
        classics,
        loves
    }
}

export default useBooks;