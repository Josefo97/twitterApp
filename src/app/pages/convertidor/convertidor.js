var mammoth = require("mammoth");

mammoth.convertToHtml({path: "path/to/document.docx"})
    .then(function(result){
        var html = result.value; // The generated HTML
        var messages = result.messages; // Any messages, such as warnings during conversion
    })
    .done();

//TODO EXAMPLE NUMBER 2 

    // <input type="file" onchange="parseWordDocxFile(this)">
  function parseWordDocxFile(inputElement) {
    var files = inputElement.files || [];
    if (!files.length) return;
    var file = files[0];

    console.time();
    var reader = new FileReader();
    reader.onloadend = function(event) {
      var arrayBuffer = reader.result;
      // debugger

      mammoth.convertToHtml({arrayBuffer: arrayBuffer}).then(function (resultObject) {
        result1.innerHTML = resultObject.value;
        console.log(resultObject.value);
      });
      console.timeEnd();

      mammoth.extractRawText({arrayBuffer: arrayBuffer}).then(function (resultObject) {
        result2.innerHTML = resultObject.value;
        console.log(resultObject.value);
      });

      mammoth.convertToMarkdown({arrayBuffer: arrayBuffer}).then(function (resultObject) {
        result3.innerHTML = resultObject.value;
        console.log(resultObject.value);
      });
    };
    reader.readAsArrayBuffer(file);
  }