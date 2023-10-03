import ContactPage from '../pageObjectModels/contactPage.js';
import HomePage from '../pageObjectModels/homePage.js'

describe('Sending a request via the form on the Contact page', ()=>{
    it('Sending request', async ()=>{

    // Navigate to the website
    await browser.url('https://learnautomatedtesting.com/');

    // Verify that the webpage is correctly loaded
    // Checking whether the BSURE Digital logo is present
    const bsureLogo = await $('header [src="/images/logo.png"]');
    await bsureLogo.isDisplayed(); 
        
    // Navigating to the Contact page
    await HomePage.clickContactButton();

    // Verify that the webpage is correctly loaded
    // Checking whether the -Contact us- text is present
    const contactUs = await $('//h3[text()="Contact us"]');
    await contactUs.isDisplayed();

    // Fill in the credentials and send the form   
    await ContactPage.fillInCredentialsAndMessage("Jeffrey Jongkees", "I'd love to have some input for my testautomation assignment.")
    
})

})