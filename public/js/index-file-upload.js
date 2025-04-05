const inputFileElement = document.getElementById("uploadFile");

inputFileElement.addEventListener("change", function (e) {
  e.preventDefault();
  let file = e.target.uploadFile.file;

  let formData = new FormData();
  formData.append("file", file);

  fetch(`http://${hostname}:${port}/uploadFile`, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.errors) {
        alert(data.errors);
      } else {
        console.log(data);
      }
    });
});
