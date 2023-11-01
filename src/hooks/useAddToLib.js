const AddtoLibrary = async (id) => {

    try {
        console.log('book id', id);
        const queryParams = new URLSearchParams();
        queryParams.append('book_id', id);
        console.log('queryParams', queryParams);
        const response = await fetch(`https://arbookreaderserver.onrender.com/api/user/addToLibrary?${queryParams.toString()}`, {
            method: "GET",
        });
        console.log('response', response);
        if (!response.ok) {
            throw new Error(`response was not ok. Status: ${response.status}`);
        }
        const res = await response.json();
        console.log('res', res);
        return res;
    }
    catch (err) {
        console.error("Error:", err);
        throw err;
    }
};

export default AddtoLibrary;