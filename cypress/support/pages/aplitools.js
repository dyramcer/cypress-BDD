class Aplitools {
    getLogo(){
        return cy.get('*.logo-w img')
    }

    getHeader(){
        return cy.get('h4.auth-header')
    }

    getUsernameField(){
        return cy.get('input#username')
    }

    getPasswordField(){
        return cy.get('input#password')
    }

    getLoginButton(){
        return cy.get('a#log-in')
    }
    
    getRememberMeCheckbox(){
        return cy.get('input.form-check-input')
    }

    getSocialMediaButton(platform){
        let selector
        switch (platform) {
            case 'twitter': selector = 'img[src="img/social-icons/twitter.png"]'
                break;
            case 'facebook': selector = 'img[src="img/social-icons/facebook.png"]'
                break;
            case 'linkedin': selector = 'src="img/social-icons/linkedin.png"'
                break;
        
            default:
                break;
        }
        return cy.get(selector)
    }

    getBalances(){
        return cy.get('div.element-balances')
    }

}

export default Aplitools