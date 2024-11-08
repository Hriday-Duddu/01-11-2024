fetch('listFiles.php')
            .then(response => response.json())
            .then(files => {
                const fileListElement = document.getElementById('fileList');
                files.forEach(file => {
                    const fileElement = document.createElement('div');
                    fileElement.innerHTML = `<img src="${file.icon}" alt="File Icon" style="width: 64px; vertical-align: middle;"> <span></span>`;
                    fileListElement.appendChild(fileElement);
                });
            })
            .catch(error => console.error('Error:', error));

            // ${file.name}