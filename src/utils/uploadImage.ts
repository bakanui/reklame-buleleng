const base_url = process.env.REACT_APP_BASE_URL;

const uploadImage = async (url: string, body: any) => {
  const access_token = localStorage.getItem("access_token");

  console.log(access_token);

  const data = await fetch(`${base_url + url}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    body,
  })
    .then((res) => {
      if (res.status === 401) {
        console.log(res);
        return false;
      } else {
        return res.json();
      }
    })
    .then((result) => {
      return result;
    });

  if (!data) {
    console.log("Upload Image Failed");
  } else {
    return data;
  }
};

export default uploadImage;
