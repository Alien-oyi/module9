class MarkDown {
    static placeAnswers(answers) {
        return `
        # ${answers.title}

        ## Description
        ${answers.description}

        ## Deployed Link
        ${answers.deployedLink}

        ## Installation
        ${answers.installation}

        ## Screenshot
        ![Alt Text](${answers.screenshot})
        
        `
    }
}

module.exports= MarkDown