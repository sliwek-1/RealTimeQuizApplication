export const image_handler = async (blobInfo: any, progress: any) => {
    try {
        const formData = new FormData();
        formData.append('file', blobInfo.blob(), blobInfo.filename());

        const response = await fetch('http://localhost:3000/api/image', {
            method: 'post',
            body: `Bearer  ${formData}`
        });

        const data = await response.json();
 
        return data.location
    } catch (error) {
        console.log("Error: ", error)
    } finally {
        console.log("Everything went succesfully");
    }
}
