const demoText = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. vestibulum tortor quam, feugiat vitae, ultricies.";

// Function to generate the template with variables
function generateTemplate(item, index) {
	const bookClass = `book-${index+1}`;
    const template =  `	
            <figure>
			<h4><span>Book id: </span><span>${item.id}</span></h4>	
				<div class="perspective">
					<div class="book ${bookClass}" data-book="book-${index+1 || 0}">
						<div class="cover">
							<div class="front"></div>
							<div class="inner inner-left"></div>
						</div>
						<div class="inner inner-right"></div>
					</div>
				</div>
                <div class="buttons"><a href="#">Look inside</a><a href="#">Details</a></div>
                <figcaption><h2>${item.title}<span>${item.sale}</span><span>${item.averageRating}</span></h2></figcaption>
                <div class="details">
					<ul>
						<li>${item.subtitle || demoText}</li>
						<li>${item.authors}</li>
						<li>${item.publishDate}</li>
						<li>${item.pageCount} pages</li>
					</ul>
				</div>
            </figure>    
    `;
	return template;
}


function generateContentTemplate(item, index) {
    return `	
	<div class="bb-custom-wrapper" id="book-${index+1 || 0}">
		<div class="bb-bookblock bb-vertical">
			<div class="bb-item" style="display: block;">
				<div class="bb-custom-side page-layout-3">
					<div id="book-content-top-left">
						<h3>book content</h3>
					</div>
					<div id="book-content-middle-left">
						<h4><span>Isbn: </span><span>${item.extractISBN}</span></h4>
						<h3>${item.title}</h3>
						<span>${item.searchInfo.length > 0 ? item.searchInfo : (item.subtitle || demoText)}</span>
						<button id="readmore"><span>more</span><img src="assets/images/chevron-right.svg"/></button>
					</div>
				</div>
				<div class="bb-custom-side page-layout-3">
				</div>
			</div>
			<div class="bb-item">
				<div class="bb-custom-side page-layout-1">
					<h3>
						Chapter 9 <span>Nomadic Lifestyle</span>
					</h3>
				</div>
				<div class="bb-custom-side page-layout-1">
					<p>Candy canes lollipop macaroon marshmallow gummi bears tiramisu. Dessert croissant cupcake candy canes. Bear claw faworki faworki lemon drops. Faworki marzipan sugar plum jelly-o marzipan cookie.</p>
				</div>
			</div>
			<div class="bb-item">
				<div class="bb-custom-side page-layout-2">
					<div>
						<h3>Aa</h3>
						<p>Faworki marzipan sugar plum jelly-o marzipan. Soufflé tootsie roll jelly beans. Sweet icing croissant dessert bear claw. Brownie dessert cheesecake danish jelly pudding bear claw soufflé.</p>
					</div>
					<div>
						<h3>Bb</h3>
						<p>Faworki marzipan sugar plum jelly-o marzipan. Soufflé tootsie roll jelly beans. Sweet icing croissant dessert bear claw. Brownie dessert cheesecake danish jelly pudding bear claw soufflé.</p>
					</div>
				</div>
				<div class="bb-custom-side page-layout-2">
					<div>
						<h3>Cc</h3>
						<p>Faworki marzipan sugar plum jelly-o marzipan. Soufflé tootsie roll jelly beans. Sweet icing croissant dessert bear claw. Brownie dessert cheesecake danish jelly pudding bear claw soufflé.</p>
					</div>
					<div>
						<h3>Dd</h3>
						<p>Faworki marzipan sugar plum jelly-o marzipan. Soufflé tootsie roll jelly beans. Sweet icing croissant dessert bear claw. Brownie dessert cheesecake danish jelly pudding bear claw soufflé.</p>
					</div>
				</div>
			</div>
		</div><!-- /bb-bookblock -->
		<nav>
			<a href="#" class="bb-nav-prev">Previous</a>
			<a href="#" class="bb-nav-next">Next</a>
			<a href="#" class="bb-nav-close">Close</a>
		</nav>
	</div>	
 `;
}


function createBookObject(item, index) {
			
	const bookObject = {
		id: item.id,
		title: item.volumeInfo.title || "",
		categories: item.volumeInfo.categories ? item.volumeInfo.categories[0] : "",
		description: item.volumeInfo.description || "",
        extractISBN: (function () {
            const isbn = item.volumeInfo.industryIdentifiers || [];
            
            if (isbn.length > 0 && isbn[0].type) {
                return (isbn[0].type === 'ISBN_13' ? 'ISBN_13: ' : 'ISBN_10: ') + JSON.stringify(isbn[0].identifier) || "";
            } else {
                return 'ISBN information not available';
            }
        })(),
		bookreader: item.accessInfo.webReaderLink || "",
		imageLinks: item.volumeInfo.imageLinks ? true:false,
		country: item.accessInfo.country || "",
		downloadLink: item.accessInfo.epub.downloadLink || "",
		pdfLink: JSON.stringify(item.accessInfo.pdf.downloadLink || ""),
		authors: item.volumeInfo.authors || "",
		publisher: item.volumeInfo.publisher || "",
		thumbnail: JSON.stringify(item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : "") || "",
		imagecover: `http://books.google.com/books/content?id=${item.id}&printsec=frontcover&img=1&zoom=10&edge=curl`|| "",
		featureImage: `https://books.google.com/books/publisher/content?id=${item.id}&printsec=frontcover&img=1&zoom=6&edge=cur` || "",
		pageCount: item.volumeInfo.pageCount || "",
		publishDate: item.volumeInfo.publishedDate || "",
		subtitle: item.volumeInfo.subtitle || "",
		searchInfo: item.searchInfo ? item.searchInfo.textSnippet : "",
		etag: item.etag || "",
		sale: item.saleInfo.saleability || "",
		averageRating: item.volumeInfo.averageRating || ""
	    
	};

   return bookObject;
}

const list = document.querySelector('.bookshelf');
const listContent = document.querySelector('.container');

const processBooks = async (item, index) => {
    return new Promise(async (resolve) => {
        const listTemplate = generateTemplate(item, index);
        const listContentTemplate = generateContentTemplate(item, index);
        list.innerHTML += listTemplate;
        listContent.insertAdjacentHTML('beforeend', listContentTemplate);
        resolve();
    });
};

const queryInput = document.querySelector('#query');
const $form = document.querySelector("#form");


const submitSearchForm = () => {
    return new Promise((resolve) => {
        $form.addEventListener("submit", async (e) => {
            e.preventDefault();
			$form.removeEventListener("submit",submitSearchForm);
            resolve(queryInput.value);
        });
    });
};

const getDefaultSearchValue = async () => {
	const default_data_query ="rats+prize+car+turtle+investor+lion+fish+coding+barry+online+money";
    const data_query = default_data_query;
    await fetchDataAndRender(data_query);
    createBookshelfScript();
};


const getSearchValue = async () => {
    const data_query = await submitSearchForm();
    await fetchDataAndRender(data_query);
    createBookshelfScript();
};


const setLoadingScreen = async (data_query) =>{
	return new Promise((resolve) => {
		list.innerHTML = `
		<div id="loading-container">
			<h3>Loading...</h3>
			<p>Fetching and rendering data: <span>${data_query}</span></p>
		</div>
		`;
		setTimeout(() => {
			resolve(); // simulating loading with adding some extra time
		}, 500);
	});
}


const API_KEY = "YOUR_KEY";
const maxResults = 40;
async function fetchDataAndRender(data_query) {
	await setLoadingScreen(data_query);
    try {
		const query= `https://www.googleapis.com/books/v1/volumes?q=${data_query}&maxResults=${maxResults}&projection=full&key=${API_KEY}`;
	    const response = await axios.get(`${query}`);
        const data = response.data;
		const items = data.items;
        if (data) {
			list.innerHTML = '';
			
			const bookLibrary = await Promise.all(items.map(async (item, index) => await createBookObject(item, index)));
			
			const bookPromises = bookLibrary.map(async (item, index) => {
				await processBooks(item, index);
				setTimeout(async() => {
					await changeBookBackground(item, index);
				}, 1);			
			});
		
			await Promise.all(bookPromises);
	
        }
    } catch (err) {
        console.log("Error:", err.message);
    }
}

async function changeBookBackground(item,index){
	return new Promise((resolve) => {	
	const emptyspace = "󠀠󠁪󠀪                    ";
	const bookitem = document.querySelector(`.book[data-book="book-${index+1}"] .front`);
	const booksidecover = document.querySelector(`.book[data-book="book-${index+1}"] .cover`);
	const bookitemcontent = document.querySelector(`#book-${index+1} .bb-custom-side.page-layout-3:last-child`);

	booksidecover.setAttribute('cover-data-text',`${item.title} ${emptyspace} ${item.authors[0]}`);

	console.log(item.imageLinks)

	if(item.imageLinks===false){
		bookitem.classList.add('nocover');
		bookitem.setAttribute('no-image-cover',`${item.title}`);
	}
	

	if (bookitem) {	
		bookitem.classList.add('book-background');
		
		if(item.imageLinks===false){
			bookitem.style.background = 'linear-gradient(to right, rgba(0, 0, 0, 0.1) 0%, rgba(211, 211, 211, 0.1) 5%, rgba(255, 255, 255, 0.15) 5%, rgba(255, 255, 255, 0.1) 9%, rgba(0, 0, 0, 0.01) 100%), rgb(233 201 143)';
		}else{
			bookitem.style.background = `linear-gradient(to right, rgba(0, 0, 0, 0.1) 0%, rgba(211, 211, 211, 0.1) 5%, rgba(255, 255, 255, 0.15) 5%, rgba(255, 255, 255, 0.1) 9%, rgba(0, 0, 0, 0.01) 100%), url(${item.imagecover}), rgb(55 63 67)`;
		}
		
		
		bookitemcontent.style.background = `linear-gradient(to right, rgba(0, 0, 0, 0.1) 0%, rgba(211, 211, 211, 0.1) 5%, rgba(255, 255, 255, 0.15) 5%, rgba(255, 255, 255, 0.1) 9%, rgba(0, 0, 0, 0.01) 100%), url(${item.imagecover}), rgb(55 63 67)`;
		// Set background size to 100%
		bookitem.style.backgroundSize = '100% 100%';
        bookitemcontent.style.backgroundSize = '100% 100%';
		// Set background position to center center
		bookitem.style.backgroundPosition = 'center center';
        bookitemcontent.style.backgroundPosition = 'center center';
		// Set background repeat to no-repeat
		bookitem.style.backgroundRepeat = 'no-repeat';
		bookitemcontent.style.backgroundRepeat = 'no-repeat';
	}
	setTimeout(() => {
		resolve();
	}, 500);
    });
}

document.addEventListener('DOMContentLoaded', async function () {
	getDefaultSearchValue();
	await getSearchValue();
	$form.addEventListener("submit", getSearchValue);
});

function createBookshelfScript() {
    const bookshelfScript = document.createElement('script');
    bookshelfScript.src = 'https://tympanus.net/Development/BookPreview/js/bookshelf.js';
    document.body.appendChild(bookshelfScript);
}


