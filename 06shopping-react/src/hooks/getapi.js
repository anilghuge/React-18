import { useState, useEffect } from 'react';
import axios from 'axios';

export function useAPI(url) {
    const [data, setData] = useState();

    useEffect(() => {
        axios.get(url)
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, [url]);

    return data;
}
