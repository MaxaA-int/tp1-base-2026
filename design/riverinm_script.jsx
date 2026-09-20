var inputFolder = Folder.selectDialog(
    "Choisissez un dossier de sources pour débuter",
  ),
  outputFolder = Folder.selectDialog(
    "Choisissez un dossier cible pour les images créées",
  ),
  imageSizes = [
    ["1320px", "1320px", "w1320"],
    ["980px", "980px", "w980"],
    ["700px", "700px", "w700"],
    ["660px", "660px", "w660"],
    ["490px", "490px", "w490"],
    ["350px", "350px", "w350"],
    ["300px", "300px", "w300"],
    ["200px", "200px", "w200"], 
    ["150px", "150px", "w150"],
    ["100px", "100px", "w100"],
  ],
  numImageSizes = imageSizes.length;

if (inputFolder != null && outputFolder != null) {
  var fileList = inputFolder.getFiles(/\.(jpg|jpeg|png|gif)$/i);
  for (var i = 0; i < fileList.length; i++) {
    var doc = app.open(fileList[i]);
    for (var j = 0; j < imageSizes.length; j++) {
      var currentImageSize = imageSizes[j],
        currentImageWidth = currentImageSize[0],
        currentImageHeight = currentImageSize[1],
        currentImageVersion = currentImageSize[2],
        fullname = doc.name,
        filename = fullname.substr(0, fullname.lastIndexOf(".")) || fullname,
        extension = fullname.split(".").pop(),
        exportOptionsSaveForWeb = new ExportOptionsSaveForWeb();
      doc.resizeImage(currentImageWidth, currentImageHeight);
      exportOptionsSaveForWeb.includeProfile = true;
      exportOptionsSaveForWeb.optimized = true;
      if (extension == "jpg" || extension == "jpeg") {
        exportOptionsSaveForWeb.format = SaveDocumentType.JPEG;
        exportOptionsSaveForWeb.includeProfile = true;
        exportOptionsSaveForWeb.quality = 100;
      }
      if (extension == "png") {
        exportOptionsSaveForWeb.format = SaveDocumentType.PNG;
      }
      if (extension == "gif") {
        exportOptionsSaveForWeb.format = SaveDocumentType.GIF;
      }
      var documentPath =
          decodeURI(outputFolder) +
          "/" +
          filename +
          "_" +
          currentImageVersion +
          "." +
          extension,
        file = new File(documentPath);
      doc.exportDocument(file, ExportType.SAVEFORWEB, exportOptionsSaveForWeb);
    }
    doc.close(SaveOptions.DONOTSAVECHANGES);
  }
}
