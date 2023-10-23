const AddtoLibrary = async (id) => {

    try {
        console.log('book id', id);
        const queryParams = new URLSearchParams();
        queryParams.append('book_id', id);
        const response = await fetch(`http://192.168.8.181:4000/api/user/addToLibrary?${queryParams.toString()}`, {
            method: "GET",
        });
        if (!response.ok) {
            throw new Error(`response was not ok. Status: ${response.status}`);
        }
        const res = await response.json();
        return res;
    }
    catch (err) {
        console.error("Error:", err);
        throw err;
    }
};

export default AddtoLibrary;