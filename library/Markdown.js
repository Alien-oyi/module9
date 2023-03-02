class MarkDown {
    static placeAnswers(answers) {
        return `
        # ${answers.title}

        ## Description
        ${answers.description}

        ## Deployed Link
        ${answers.deployedLink}

        ## Screenshot
        ![Alt Text](${answers.screenshot})

        ## Installation
        ${answers.installation}

        ## Usage
        ${answers.usage}

        ## Contributing
        ${answers.contribution}

        ## Tests
        ${answers.tests}

        ## If you have any questions?
        ${answers.GitHub}
        ${answers.email}

        ## Lisence
        ${answers.lisence} 
        
        `
    }
}

module.exports= MarkDown