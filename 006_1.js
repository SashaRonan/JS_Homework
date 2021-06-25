var images = document.querySelectorAll("img");
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function (e) {
        var img = document.createElement("img");
        img.src = "big/b" + (e.target.id[1]) + ".jpg";
        img.classList.add("container");
        img.onerror = function() {
            alert("Ошибка загрузки изображения");
          };
                document.body.append(img);
    }
    

}

