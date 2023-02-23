const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCXpC96kqkamtsdTJBoJqnEQ&part=snippet%2Cid&order=date&maxResults=4';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8c9b5be2admsha29565bb33ea140p12d94bjsn0f52a06185eb',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data
}

//funcion auto-ejecutable
(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                    </div>
                    <div class="mt-4  justify-between">
                        <h3 class="text-md text-gray-200">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                        </h3>
                        <br>
                        <p class="text-sm text-gray-500">${video.snippet.description}</p>
                        
                    </div>
            </div>
        `).slice(0,3).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();
