class CreateHeroPage {
    selectorsList() {
        return {
            createNewHeroButton: 'a > .undefined',
            heroName: '[data-cy="nameInput"]',
            heroPrice: '[data-cy="priceInput"]',
            heroFans: '[data-cy="fansInput"]',
            heroSaves: '[data-cy="savesInput"]',
            heroPowers: '[data-cy="powersSelect"]',
            heroAvatar: '[data-cy="avatarFile"]',
            submitHeroButton: '[novalidate=""] button',
            createHeroConfirm: '[data-cy="hero-card"]',
            noValidateMessage: '[novalidate=""] .text-red-500',
            cardVisible: ':nth-child(6) > :nth-child(1)',
            trashButton: '[data-cy="trash"]',
            confirmDeleteButton: '.gap-2 > .text-white'
        }
    }

    clickCreateHeroButton() {
        cy.get(this.selectorsList().createNewHeroButton).click()
    }

    dataHero(fields: {name?: string, price?: string, fans?: string, saves?: string, powers?: string, avatar?: string}) {
        if (fields.name) cy.get(this.selectorsList().heroName).type(fields.name)
        if (fields.price) cy.get(this.selectorsList().heroPrice).type(fields.price)
        if (fields.fans) cy.get(this.selectorsList().heroFans).type(fields.fans)
        if (fields.saves) cy.get(this.selectorsList().heroSaves).type(fields.saves)
        if (fields.powers) cy.get(this.selectorsList().heroPowers).select(fields.powers)
        if (fields.avatar) cy.get(this.selectorsList().heroAvatar).attachFile(fields.avatar)
        
    }   
    
    submitHero() {
        cy.get(this.selectorsList().submitHeroButton).click()
    }

    confirmCreateHero() {
        cy.get(this.selectorsList().createHeroConfirm)
            .filter(':contains("Lord of Tests")')
            .should('have.length.gt', 0)
    }

    checkValidationError() {
        cy.get(this.selectorsList().noValidateMessage)
            .should('be.visible')
            
    }

    deleteHero() {
        cy.get(this.selectorsList().cardVisible).should('be.visible')
        cy.get(this.selectorsList().trashButton).eq(5).click()  
        cy.get(this.selectorsList().confirmDeleteButton).click()  
        
    }

}

export default CreateHeroPage