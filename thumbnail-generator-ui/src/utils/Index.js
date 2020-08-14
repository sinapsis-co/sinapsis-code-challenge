function previewImage(event) {
  let reader = new FileReader();
  let file = event[0];
  reader.readAsDataURL(file);

  if (file.type === "image/jpeg" || file.type === "image/png") {
    reader.onload = function () {
      let preview = document.getElementById("preview");
      let div = document.createElement("div");
      let image = document.createElement("img");
      image.src = reader.result;
      image.className = "loadimage__preview__image";
      div.id = "preview_images";
      div.className = "preview_images";
      preview.append(div);
      div.append(image);
    };
    return file;
  } else {
    alert("Error en la extension del archivo");
  }
}

function estructureObject(images) {
  const imageData = images.map((image) => {
    return (estructureObject = {
      size: image.size,
      type: image.type,
      path: image.path,
    });
  });
  return imageData;
}

module.exports = {
  previewImage,
  estructureObject,
};
