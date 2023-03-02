class MarkDown {
    static placeAnswers(answers) {
        return `
# ${answers.title}

## Description
${answers.description}

## Deployed Link
${answers.deployedLink}

## Screenshot
![App Screenshot](${answers.screenshot})

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contribution}

## Tests
${answers.tests}

## If you have any questions?
feel free to reach: ${answers.GitHub}
                    ${answers.email}

## Lisence
${answers.lisence} 

`
    }
}

module.exports= MarkDown