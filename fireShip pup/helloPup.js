const puppeteer = require('puppeteer');
 
function download(uri, filename, callback) {
  request.head(uri, function(err, res, body) {
    request(uri)
    .pipe(fs.createWriteStream(filename))
    .on("close", callback);
 });
} 
 
 
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.goto('https://www.instagram.com/robertdowneyjr/');
  // await page.screenshot({path: 'example.png'});


	await page.goto('https://www.instagram.com/robertdowneyjr/');

    await page.waitForSelector('img ', {
        visible: true,
    });


    // await page.screenshot({path: '3.png'});


    // Execute code in the DOM
    const data = await page.evaluate( () => {

        const images = document.querySelectorAll('img');

        const urls = Array.from(images).map(v => v.src);

        return urls
    });
	
	
	console.log(data[0]);
	
	await page.goto(data[0]);
	await page.waitFor(1000);

	await page.screenshot({path: 'example.png'});
	
    const imageUrl = await page.evaluate(() =>
    document.querySelector("img") // image selector
    );
	
	console.log(imageUrl);
	
	// download(imageUrl, "image.png", function() {
     // console.log("Image downloaded");
	// });
	
	
    await browser.close();

    

    return data;



  await browser.close();
})();