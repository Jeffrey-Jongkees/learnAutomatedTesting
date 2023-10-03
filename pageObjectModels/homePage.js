class HomePage{
    
    elements = {
        
        contactButton : () => $('header [href="/contact/"]'), 
    }

    async clickContactButton(){
    await this.elements.contactButton().click();
    }
}

export default new HomePage();