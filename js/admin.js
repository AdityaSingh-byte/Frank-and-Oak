async function fetchData() {
    try {
        const response = await fetch('https://frank-and-oak.onrender.com/Data');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayData(data) {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = ''; // Clear previous data

    const table = document.createElement('table');
    const headers = ['ID', 'Image','Image2', 'Badge', 'Title', 'Price', 'Size', 'Category'];
    const headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    data.forEach(item => {
        const tr = document.createElement('tr');
        Object.values(item).forEach(value => {
            const td = document.createElement('td');
            if (typeof value === 'string' && value.startsWith('http')) {
                const img = document.createElement('img');
                img.src = value;
                img.alt = item.Title;
                td.appendChild(img);
            } else {
                td.textContent = value;
            }
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });

    dataContainer.appendChild(table);
}

async function addData(event) {
    event.preventDefault();
    const form = event.target;
    const ID = form.querySelector('#ID').value;
    const image = form.querySelector('#image').value;
    const badge = form.querySelector('#badge').value;
    const title = form.querySelector('#title').value;
    const price = form.querySelector('#price').value;
    const size = form.querySelector('#size').value;
    const category = form.querySelector('#category').value;

    const requestData = {
        "ID" : ID,
        "Image": image,
        "product-badge": badge,
        "Title": title,
        "Price": parseFloat(price), // Convert to number
        "Size": size,
        "Category": category
    };

    try {
        const response = await fetch(
            "https://frank-and-oak.onrender.com/Data",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            }
        );

        if (!response.ok) {
            throw new Error('Failed to add data');
        }

        fetchData(); // Refresh data after adding
        form.reset();
    } catch (error) {
        console.error('Error adding data:', error);
    }
}

async function updateData(event) {
    event.preventDefault();
    const form = event.target;
    const updateId = form.querySelector('#updateId').value;
    const newTitle = form.querySelector('#newTitle').value;
    const newPrice = form.querySelector('#newPrice').value;
    const newSize = form.querySelector('#newSize').value;
    const newCategory = form.querySelector('#newCategory').value;

    const requestData = {
        "Title": newTitle,
        "Price": parseFloat(newPrice), // Convert to number
        "Size": newSize,
        "Category": newCategory
    };

    try {
        const response = await fetch(
            `https://frank-and-oak.onrender.com/Data/${updateId}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            }
        );

        if (!response.ok) {
            throw new Error('Failed to update data');
        }

        fetchData(); // Refresh data after update
        form.reset();
    } catch (error) {
        console.error('Error updating data:', error);
    }
}

async function deleteData(event) {
    event.preventDefault();
    const form = event.target;
    const deleteId = form.querySelector('#deleteId').value;
    console.log(deleteId);

    try {
        const response = await fetch(
            `https://frank-and-oak.onrender.com/Data/${deleteId}`,
            {
                method: "DELETE"
            }
        );

        if (!response.ok) {
            throw new Error('Failed to delete data');
        }

        fetchData(); // Refresh data after deletion
        form.reset();
    } catch (error) {
        console.error('Error deleting data:', error);
    }
}

document.getElementById('addForm').addEventListener('submit', addData);
document.getElementById('updateForm').addEventListener('submit', updateData);
document.getElementById('deleteForm').addEventListener('submit', deleteData);

fetchData(); // Fetch initial data
// Function to handle login form submission


// Rest of your JavaScript code for admin panel functionality goes here
