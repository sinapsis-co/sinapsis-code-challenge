const { v4: uuid } = require("uuid");

function previewImage(event) {
  let reader = new FileReader();
  let file = event[0];
  reader.readAsDataURL(file);

  if (file.type === "image/jpeg" || file.type === "image/png") {
    reader.onload = function () {
      file.id = uuid();
      let preview = document.getElementById("preview");
      let image = document.createElement("img");
      image.src = reader.result;
      image.className = "loadimage__preview__image";
      image.id = file.id;
      preview.append(image);
    };
    return file;
  } else {
    alert("Error en la extension del archivo");
  }
}

module.exports = {
  previewImage,
};
