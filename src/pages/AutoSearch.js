import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AutoSearch = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    
    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(response.data);
            setFilteredData(response.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };
    useEffect(() => {
        // Fetch data from fake API
        

        fetchData();
    }, []);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchTerm) {
                const filtered = data.filter(item => 
                    item.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setFilteredData(filtered);
            } else {
                setFilteredData(data);
            }
        }, 1000);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm, data]);

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search by title" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control p-2 mb-0 search-input"
                style={{ width: "250px" }}
            />
            <div>
                {filteredData.map(item => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AutoSearch;
