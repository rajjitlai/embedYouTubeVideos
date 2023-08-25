const apiKey = "your_API_key";
const channelId = "your_Channel_ID";
const videosContainer = document.getElementById("vidContainer");

fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&part=snippet&type=video&maxResults=6`)
    .then(response => response.json())
    .then(data => {
        data.items.forEach(video => {
            const videoId = video.id.videoId;
            const videoTitle = video.snippet.title;
            const embedCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;

            const videoDiv = document.createElement("div");
            videoDiv.className = "video";
            videoDiv.innerHTML = `<h3>${videoTitle}</h3>${embedCode}`;

            videosContainer.appendChild(videoDiv);
        });
    })
    .catch(error => console.error("Error fetching videos:", error));
