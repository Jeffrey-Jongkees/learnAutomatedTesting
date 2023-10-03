import { config } from 'dotenv';
config();

class ContactPage{
    
    
    elements = {
        
        name : () => $('input[name="name"]'),
        email : () => $('input[name="email"]'),
        phonenumber : () => $('input[name="phone"]'),
        message : () => $('textarea[name="message"]'),
        sendButton : () => $('button[type="submit"]')  
    }

    async fillInCredentialsAndMessage(name, message){
        
        const email = process.env.EMAIL_ADDRESS;
        const phonenumber = process.env.PHONENUMBER;     

    await this.elements.name().setValue(name);
    await this.elements.email().setValue(email);
    await this.elements.phonenumber().setValue(phonenumber);
    await this.elements.message().setValue(message);
    await this.elements.sendButton().click();
    }
}

export default new ContactPage();