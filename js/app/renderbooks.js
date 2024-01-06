// Function to generate the books template with variables
function generateTemplate(item, index) {
	const bookClass = `book-${index+1}`;
    const template =  `		
            <figure>
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
                <figcaption><h2>${item.title}<span>${item.sale}</span></h2></figcaption>
                <div class="details">
					<ul>
						<li>Understanding the life of a worm can be enlightening to anybody. Dive into the micro cosmos of a creeping and burrowing invertebrate and learn how a limbless little creature reaches happiness.</li>
						<li>Graham Press</li>
						<li>12.09.2010</li>
						<li>${item.pageCount} pages</li>
					</ul>
				</div>
            </figure>    
    `;
	return template;
}

// Function to generate the books content template with variables
function generateContentTemplate(item, index) {
    return `	
	<div class="bb-custom-wrapper" id="book-${index+1 || 0}">
		<div class="bb-bookblock bb-vertical">
			<div class="bb-item" style="display: block;">
				<div class="bb-custom-side page-layout-3">
					<div>
						<h3>${item.name}</h3>
						<p>${item.email}</p>
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