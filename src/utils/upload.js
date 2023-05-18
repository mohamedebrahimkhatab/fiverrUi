import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "foam");
  data.append('folder', "F.O.A.M");
  console.log(data);
  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dbafqor1r/image/upload",
      data, {
        headers: {
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
          'X-Requested-With': 'XMLHttpRequest',
        },}
    );

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
