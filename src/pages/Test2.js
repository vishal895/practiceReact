import React, { useState, useEffect } from 'react';
import axios from 'axios';

// update api 

const fakeAPI = [
  { id: 1, name: 'Item 1', description: 'Description 1' },
  { id: 2, name: 'Item 2', description: 'Description 2' },
  { id: 3, name: 'Item 3', description: 'Description 3' },
];

const Test2 = () => {
  const [data, setData] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editItem, setEditItem] = useState({ id: null, name: '', description: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Simulate fetching data from a fake API
    setData(fakeAPI);
  };

  const handleEdit = (id) => {
    // Find the item to edit
    const itemToEdit = data.find(item => item.id === id);
    setEditItem(itemToEdit);
    setEditModalOpen(true);
  };

  const handleSave = () => {
    // Simulate calling PUT API to update the item
    const updatedData = data.map(item => {
      if (item.id === editItem.id) {
        return editItem;
      }
      return item;
    });
    setData(updatedData);
    setEditModalOpen(false);

    // Simulate calling PUT API
    const apiPath = `PUT_API_URL/${editItem.id}`;
    axios.put(apiPath, editItem)
      .then(response => {
        console.log('Item updated successfully:', response.data);
      })
      .catch(error => {
        console.error('Error updating item:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditItem(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Item</h2>
            <label>
              Name:
              <input type="text" name="name" value={editItem.name} onChange={handleChange} />
            </label>
            <label>
              Description:
              <input type="text" name="description" value={editItem.description} onChange={handleChange} />
            </label>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setEditModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Test2;
