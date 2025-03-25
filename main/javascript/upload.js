
// JavaScript to Handle File Upload
function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
      // Ensure it's an EPUB file
      if (file.type === "application/epub+zip") {
        document.getElementById('output').innerHTML = `<p>Uploaded file: ${file.name}</p>`;
        // You can process the file further here
      } else {
        document.getElementById('output').innerHTML = "<p>Please upload a valid EPUB file.</p>";
      }
    } else {
      document.getElementById('output').innerHTML = "<p>No file selected.</p>";
    }
  }